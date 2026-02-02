type NodeType = 'heading' | 'paragraph'

interface DataStructure {
    type: NodeType;
    text: string
}

const node: DataStructure[] = [
    {
        type: 'heading',
        text: 'BAB I PENDAHULUAN'
    },
    {
        type: 'paragraph',
        text: 'Algoritma adalah sekumpulan langkah-langkah sistematis yang disusun secara logis untuk menyelesaikan sebuah masalah dalam pemrograman.'
    }
]

const raw: string = `
BAB I PENDAHULUAN

Algoritma merupakan sekumpulan instruksi sistematis yang disusun secara logis untuk menyelesaikan permasalahan spesifik dalam pemrograman. Sementara itu, struktur data adalah metode pengorganisasian, penyimpanan, dan pengaturan data di dalam memori komputer agar dapat diakses serta dimodifikasi secara efisien. Sinergi antara keduanya merupakan fondasi fundamental dalam pengembangan perangkat lunak untuk menghasilkan performa yang optimal dan skalabilitas yang tinggi.
Penerapan algoritma yang tepat sangat krusial karena tanpa logika yang kuat, kode program akan menjadi sulit dipahami dan dipelihara. Sebaliknya, pemilihan struktur data yang tidak sesuai dapat menyebabkan penurunan performa yang signifikan, terutama saat sistem harus memproses volume informasi yang besar dan kompleks. Oleh karena itu, penguasaan terhadap kedua aspek ini menjadi syarat mutlak dalam membangun sistem yang handal dan efisien.

BAB II LANDASAN TEORI
Dalam implementasinya, pemilihan struktur data sangat bergantung pada jenis operasi yang paling sering dilakukan oleh program. Sebagai contoh, Array menawarkan akses data yang cepat melalui indeks, namun memerlukan biaya komputasi yang besar saat melakukan penyisipan atau penghapusan di tengah elemen. Di sisi lain, struktur seperti Linked List memberikan fleksibilitas lebih tinggi dalam manipulasi elemen dinamis, meskipun pencarian datanya relatif lebih lambat.
Selain aspek efisiensi waktu (Time Complexity), efisiensi ruang memori (Space Complexity) juga menjadi pertimbangan krusial dalam pemodelan data. Penggunaan tipe data yang tepat, seperti interface yang ketat dalam TypeScript, membantu pengembang untuk memvalidasi struktur informasi sejak tahap awal pengembangan. Hal ini memastikan bahwa data yang diproses tidak hanya akurat, tetapi juga terproteksi dari kesalahan tipe data yang sering menjadi penyebab utama munculnya bug pada aplikasi berskala besar.
`;

const cleanLine = raw.split('\n').map(l => l.trim()).filter(Boolean)

function detectType(line: any): NodeType {
    if (line.startsWith('BAB')) {
        return "heading"
    }

    return "paragraph"
}

const dst = cleanLine.map(line => ({
    type: detectType(line),
    text: line
}))

console.log('Node DST:', node);
console.log('\n');
console.log('Clean line before DST', cleanLine);
console.log('\n');
console.log('DST Lines:', dst);

