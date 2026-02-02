var node = [
    {
        type: 'heading',
        text: 'BAB I PENDAHULUAN'
    },
    {
        type: 'paragraph',
        text: 'Algoritma adalah sekumpulan langkah-langkah sistematis yang disusun secara logis untuk menyelesaikan sebuah masalah dalam pemrograman.'
    }
];
console.log('Node DST:', node);
console.log('\n');
var raw = "\nBAB I PENDAHULUAN\n\nAlgoritma merupakan sekumpulan instruksi sistematis yang disusun secara logis untuk menyelesaikan permasalahan spesifik dalam pemrograman. Sementara itu, struktur data adalah metode pengorganisasian, penyimpanan, dan pengaturan data di dalam memori komputer agar dapat diakses serta dimodifikasi secara efisien. Sinergi antara keduanya merupakan fondasi fundamental dalam pengembangan perangkat lunak untuk menghasilkan performa yang optimal dan skalabilitas yang tinggi.\nPenerapan algoritma yang tepat sangat krusial karena tanpa logika yang kuat, kode program akan menjadi sulit dipahami dan dipelihara. Sebaliknya, pemilihan struktur data yang tidak sesuai dapat menyebabkan penurunan performa yang signifikan, terutama saat sistem harus memproses volume informasi yang besar dan kompleks. Oleh karena itu, penguasaan terhadap kedua aspek ini menjadi syarat mutlak dalam membangun sistem yang handal dan efisien.\n\nBAB II LANDASAN TEORI\nDalam implementasinya, pemilihan struktur data sangat bergantung pada jenis operasi yang paling sering dilakukan oleh program. Sebagai contoh, Array menawarkan akses data yang cepat melalui indeks, namun memerlukan biaya komputasi yang besar saat melakukan penyisipan atau penghapusan di tengah elemen. Di sisi lain, struktur seperti Linked List memberikan fleksibilitas lebih tinggi dalam manipulasi elemen dinamis, meskipun pencarian datanya relatif lebih lambat.\nSelain aspek efisiensi waktu (Time Complexity), efisiensi ruang memori (Space Complexity) juga menjadi pertimbangan krusial dalam pemodelan data. Penggunaan tipe data yang tepat, seperti interface yang ketat dalam TypeScript, membantu pengembang untuk memvalidasi struktur informasi sejak tahap awal pengembangan. Hal ini memastikan bahwa data yang diproses tidak hanya akurat, tetapi juga terproteksi dari kesalahan tipe data yang sering menjadi penyebab utama munculnya bug pada aplikasi berskala besar.\n";
var cleanLine = raw.split('\n').map(function (l) { return l.trim(); }).filter(Boolean);
function detectType(line) {
    if (line.startsWith('BAB')) {
        return "heading";
    }
    return "paragraph";
}
var dstParagraph = cleanLine.map(function (line) { return ({
    type: detectType(line),
    text: line
}); });
console.log('DST Paragraph:', dstParagraph);
console.log('\n');
var dstParagraphWithSentence = cleanLine.map(function (line) {
    var type = detectType(line);
    var sentence = line.split('.').map(function (s) { return s.trim(); }).filter(Boolean);
    return {
        type: type,
        text: sentence
    };
});
console.log('DST sentence:', dstParagraphWithSentence);
