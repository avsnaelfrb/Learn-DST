const text: string = `
BAB I PENDAHULUAN

Algoritma adalah sekumpulan langkah-langkah sistematis yang disusun
secara logis untuk menyelesaikan sebuah masalah dalam pemrograman.
Struktur data adalah cara menyimpan data secara terorganisir agar
dapat diakses dan dimodifikasi dengan efisien pada memori komputer.
Keduanya merupakan fondasi utama dalam membangun sistem perangkat
lunak yang memiliki performa tinggi serta skalabilitas yang baik.
Tanpa pemahaman algoritma yang kuat, kode akan sulit untuk dibaca.
Sebaliknya, tanpa struktur data yang tepat, program akan menjadi
sangat lambat dalam memproses informasi yang besar dan kompleks.
`;

const atMethod = text.at(8)
const charAtMethod = text.charAt(10)
const sliceMethod = text.slice(20, -1)
const subStringMethod = text.substring(1, 18)
const splitMethod = text.split("\n")
const joinMethod = splitMethod.join(" ")
const lines = text.split("\n").map(line => line.trim()).filter(Boolean)

console.log('At method:', atMethod);
console.log('\n');
console.log('CharAt method:', charAtMethod);
console.log('\n');
console.log('Slice method:', sliceMethod);
console.log('\n');
console.log('Sub String method:', subStringMethod);
console.log('\n');
console.log('Split method:', splitMethod);
console.log('\n');
console.log('Join method:', joinMethod);
console.log('\n');
console.log('Lines:', lines);
