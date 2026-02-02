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
var raw = "\nBAB I PENDAHULUAN\n\nAlgoritma adalah sekumpulan langkah-langkah sistematis yang disusun secara logis untuk menyelesaikan sebuah masalah dalam pemrograman.\nStruktur data adalah cara menyimpan data secara terorganisir agar dapat diakses dan dimodifikasi dengan efisien pada memori komputer.\nKeduanya merupakan fondasi utama dalam membangun sistem perangkat lunak yang memiliki performa tinggi serta skalabilitas yang baik.\nTanpa pemahaman algoritma yang kuat, kode akan sulit untuk dibaca.\nSebaliknya, tanpa struktur data yang tepat, program akan menjadi sangat lambat dalam memproses informasi yang besar dan kompleks.\n\nBAB II LANDASAN TEORI\nDalam implementasinya, pemilihan struktur data sangat bergantung pada jenis operasi yang paling sering dilakukan oleh program. Sebagai contoh, Array menawarkan akses data yang cepat melalui indeks, namun memerlukan biaya komputasi yang besar saat melakukan penyisipan atau penghapusan di tengah elemen. Di sisi lain, struktur seperti Linked List memberikan fleksibilitas lebih tinggi dalam manipulasi elemen dinamis, meskipun pencarian datanya relatif lebih lambat.\nSelain aspek efisiensi waktu (Time Complexity), efisiensi ruang memori (Space Complexity) juga menjadi pertimbangan krusial dalam pemodelan data. Penggunaan tipe data yang tepat, seperti interface yang ketat dalam TypeScript, membantu pengembang untuk memvalidasi struktur informasi sejak tahap awal pengembangan. Hal ini memastikan bahwa data yang diproses tidak hanya akurat, tetapi juga terproteksi dari kesalahan tipe data yang sering menjadi penyebab utama munculnya bug pada aplikasi berskala besar.\n";
var cleanLine = raw.split('\n').map(function (l) { return l.trim(); }).filter(Boolean);
function detectType(line) {
    if (line.startsWith('BAB')) {
        return "heading";
    }
    return "paragraph";
}
var dst = cleanLine.map(function (line) { return ({
    type: detectType(line),
    text: line
}); });
console.log('Node DST:', node);
console.log('\n');
console.log('Clean line before DST', cleanLine);
console.log('\n');
console.log('DST Lines:', dst);
