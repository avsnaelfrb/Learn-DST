const text: string = `
BAB I PENDAHULUAN

Algoritma adalah langkah-langkah penyelesaian masalah.
Struktur data adalah cara menyimpan data.
`;

const atMethod = text.at(8)
const charAtMethod = text.charAt(10)
const sliceMethod = text.slice(18, -1)
const subStringMethod = text.substring(18, -1)
const splitMethod = text.split("\n")
const joinMethod = splitMethod.join(" ")

console.log('At method:', atMethod);
console.log('CharAt method:', charAtMethod);
console.log('Slice method:', sliceMethod);
console.log('Sub String method:', subStringMethod);
console.log('Split method:', splitMethod);
console.log('Join method:', joinMethod);
