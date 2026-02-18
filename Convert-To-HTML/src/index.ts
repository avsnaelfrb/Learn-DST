import * as mammoth from 'mammoth';
import * as path from 'path';

// --- DEFINISI TIPE DATA ---

// Interface untuk struktur Tree kita
// tag: nama elemen (misal: 'p', 'strong', 'text')
// content: isi teks (hanya ada jika tag = 'text')
// children: elemen anak (rekursif)
interface Node {
    tag: string;
    content: string;
    children: Node[];
}

// --- FUNGSI UTAMA ---

/**
 * Fungsi Konversi DOCX ke Raw HTML
 * Kenapa: Kita butuh format teks yang terstruktur (HTML) agar mudah diparsing.
 */
async function convertDocxToHtml(filename: string): Promise<string> {
    const filePath = path.join(__dirname, `../src/${filename}`);

    // Mammoth mengubah .docx menjadi string HTML sederhana
    const result = await mammoth.convertToHtml({ path: filePath });
    return result.value;
}

/**
 * Fungsi Tokenizer
 * Apa: Memecah string HTML panjang menjadi potongan-potongan kecil (token).
 * Kenapa: Agar kita bisa memproses tag ('<p>') dan teks ('Halo') secara terpisah.
 */
function tokenizeHtml(html: string): string[] {
    // Regex ini memisahkan string berdasarkan tag HTML.
    // (<\/?[^>]+>) artinya: tangkap apa saja yang dimulai dengan < dan diakhiri >
    const regex = /(<\/?[^>]+>)/g;

    // Split dan filter string kosong agar array bersih
    return html.split(regex).filter(token => token.trim() !== '');
}

/**
 * Fungsi Parsing Rekursif (Inti Pembelajaran Tree)
 * Apa: Mengubah daftar token linear menjadi struktur Tree bersarang.
 * Kenapa: HTML memiliki struktur sarang (nested), contoh: <p><b>Teks</b></p>.
 * Struktur data Tree paling cocok untuk merepresentasikan data bersarang ini.
 */
function parseTokensToTree(tokens: string[]): Node[] {
    const nodes: Node[] = [];

    // Loop selama masih ada token untuk diproses di level ini
    while (tokens.length > 0) {
        const currentToken = tokens[0]; // Intip token pertama (Head)

        // Safety check untuk TypeScript
        if (!currentToken) {
            tokens.shift(); // Hapus token invalid jika ada
            continue;
        }

        // KASUS 1: Closing Tag (misal: </p>, <strong>)
        // Jika ketemu closing tag, berarti tugas di level ini selesai.
        // Kita berhenti dan kembali ke parent (return dari rekursi).
        if (currentToken.startsWith('</')) {
            return nodes; // Selesai memproses children
        }

        // KASUS 2: Opening Tag (misal: <p>, <strong>)
        if (currentToken.startsWith('<')) {
            // Ambil nama tag, buang karakter < dan >
            // Contoh: '<p>' -> 'p'
            const tag = currentToken.replace(/[<>/]/g, '');

            // "Makan" (hapus) token opening tag dari antrian
            tokens.shift();

            // --- REKURSI DI SINI ---
            // Kita panggil fungsi ini lagi untuk memproses isi di dalam tag tersebut.
            // Hasilnya akan menjadi 'children' dari node ini.
            const children = parseTokensToTree(tokens);

            // Setelah rekursi selesai (ketemu closing tag pasangannya),
            // Kita buat Node baru
            const newNode: Node = {
                tag: tag,
                content: '',
                children: children
            };
            nodes.push(newNode);

            // "Makan" token closing tag milik tag ini (jika ada)
            // Ini untuk memastikan kita lanjut ke sibling berikutnya
            if (tokens.length > 0 && tokens[0]?.startsWith('</')) {
                tokens.shift();
            }
        }

        // KASUS 3: Teks Biasa
        else {
            const textContent = tokens.shift() || ''; // Ambil teksnya

            // Buat Node khusus teks (Leaf Node)
            const textNode: Node = {
                tag: 'text',
                content: textContent,
                children: [] // Text node tidak punya children
            };
            nodes.push(textNode);
        }
    }

    return nodes;
}

// --- FUNGSI EKSEKUSI ---

async function main() {
    try {
        console.log("--- 1. Membaca & Konversi DOCX ---");
        const filename = 'sample-v2.0.docx';
        const rawHtml = await convertDocxToHtml(filename);
        console.log("Raw HTML (Snippet):", rawHtml.substring(0, 100) + "...");

        console.log("\n--- 2. Tokenisasi ---");
        const tokens = tokenizeHtml(rawHtml);
        // Tampilkan 5 token pertama sebagai contoh
        console.log("Tokens (Preview):", tokens.slice(0, 5));

        console.log("\n--- 3. Parsing ke Tree (Rekursif) ---");
        // Kita copy array tokens agar array asli tidak habis (opsional, untuk debug)
        const treeStructure = parseTokensToTree([...tokens]);

        console.log("\n--- HASIL STRUKTUR TREE ---");
        // Gunakan JSON.stringify dengan indentasi 2 spasi agar mudah dibaca
        console.log(JSON.stringify(treeStructure, null, 2));

    } catch (error) {
        console.error("Terjadi error:", error);
    }
}

// Jalankan program
main();