# 🧠 Day 1 — Fundamental Text Processing in TypeScript

Pada tahap awal mempelajari konsep **Document Structure Tree (DST)**, hal paling mendasar yang perlu dikuasai bukan parsing dokumen, tetapi cara memproses teks mentah (**raw text**) menggunakan TypeScript.

Karena pada akhirnya, dokumen `.docx` atau `.pdf` yang dibaca oleh program akan berubah menjadi **string panjang**, dan di sinilah proses manipulasi teks sangat berperan.

---

## 🎯 Tujuan Pembelajaran

Memahami bagaimana cara:

* Mengakses karakter dalam string
* Mengambil sebagian teks
* Memecah teks berdasarkan pola tertentu
* Membersihkan teks dari spasi dan baris kosong
* Mengubah teks mentah menjadi bentuk yang lebih terstruktur

---

## 🧪 Studi Kasus

Diberikan sebuah teks laporan praktikum dalam bentuk **multiline string**.

Teks ini kemudian diproses menggunakan beberapa method bawaan JavaScript/TypeScript untuk memahami bagaimana teks dapat diolah sebelum diubah menjadi struktur data (DST).

```ts
const text: string = `
BAB I PENDAHULUAN

Algoritma adalah sekumpulan langkah-langkah sistematis yang disusun
secara logis untuk menyelesaikan sebuah masalah dalam pemrograman.
Struktur data adalah cara menyimpan data secara terorganisir agar
dapat diakses dan dimodifikasi dengan efisien pada memori komputer.
`;
```

---

## 🔍 Method yang Dipelajari

### 1. `at(index)`

Mengambil karakter berdasarkan index (**mendukung index negatif**).

```ts
text.at(8);
```

Berguna saat ingin membaca karakter tertentu dalam teks.

---

### 2. `charAt(index)`

Mirip dengan `at()`, tetapi **tidak mendukung index negatif**.

```ts
text.charAt(10);
```

---

### 3. `slice(start, end)`

Mengambil sebagian teks berdasarkan rentang index.

```ts
text.slice(20, -1);
```

Sangat penting saat ingin mengambil sebagian isi paragraf.

---

### 4. `substring(start, end)`

Mirip `slice`, tetapi **tidak menerima nilai negatif**.

```ts
text.substring(1, 18);
```

---

### 5. `split(separator)`

Memecah teks menjadi array berdasarkan pemisah tertentu.

```ts
text.split("\n");
```

Ini kunci penting untuk memecah dokumen menjadi baris-baris.

---

### 6. `join(separator)`

Menggabungkan kembali array menjadi string.

```ts
splitMethod.join(" ");
```

---

### 7. Pembersihan Teks (Trim + Filter)

Ini bagian paling penting menuju DST.

```ts
const lines = text
  .split("\n")
  .map(line => line.trim())
  .filter(Boolean);
```

**Penjelasan:**

| Step              | Fungsi                        |
| ----------------- | ----------------------------- |
| `split("\n")`     | Memecah teks per baris        |
| `trim()`          | Menghapus spasi di awal/akhir |
| `filter(Boolean)` | Menghapus baris kosong        |

Hasilnya: teks bersih dan siap diproses menjadi struktur data.

---

## 💡 Insight Penting

Sebelum dokumen bisa diubah menjadi DST, program harus bisa:

> Mengubah teks berantakan menjadi daftar baris yang rapi dan bermakna.

Dan itulah yang dilakukan di latihan ini.

---

## 🔗 Hubungan dengan DST

Hasil akhir:

```ts
const lines = [
  "BAB I PENDAHULUAN",
  "Algoritma adalah sekumpulan langkah-langkah sistematis...",
  "Struktur data adalah cara menyimpan data..."
];
```

Bentuk ini sudah sangat dekat dengan DST, karena:

* Setiap baris bisa dianalisis tipenya (heading / paragraph)
* Teks sudah bersih
* Siap dimapping menjadi object JSON terstruktur

---

## ✅ Kesimpulan

Latihan ini bukan sekadar belajar string method.

Ini adalah langkah awal memahami bahwa:

> Dokumen bukan dibaca sebagai teks panjang, tetapi sebagai potongan-potongan teks yang bisa diolah, dianalisis, dan disusun kembali menjadi struktur data.

Skill ini adalah fondasi utama sebelum masuk ke tahap parsing `.docx` dan membangun **Document Structure Tree (DST)**.
