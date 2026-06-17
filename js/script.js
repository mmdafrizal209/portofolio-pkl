// Tunggu sampai halaman HTML selesai dimuat semua
document.addEventListener("DOMContentLoaded", () => {
  // Daftar kata yang mau diketik bergantian
  const daftarKata = [
    "Siswa RPL Cianjur.",
    "Full-Stack Developer.",
    "Mobile Developer.",
    "Peserta PKL.",
  ];

  let indeksKata = 0;
  let indeksHuruf = 0;
  let sedangMenghapus = false;
  const targetElemen = document.getElementById("animasi-teks");

  function efekKetik() {
    const kataSekarang = daftarKata[indeksKata];

    if (sedangMenghapus) {
      // Kurangi satu huruf
      targetElemen.textContent = kataSekarang.substring(0, indeksHuruf - 1);
      indeksHuruf--;
    } else {
      // Tambah satu huruf
      targetElemen.textContent = kataSekarang.substring(0, indeksHuruf + 1);
      indeksHuruf++;
    }

    // Atur kecepatan ketik (mengetik: 100ms, menghapus: 50ms)
    let kecepatan = sedangMenghapus ? 50 : 100;

    // Kalau kata sudah selesai diketik semua
    if (!sedangMenghapus && indeksHuruf === kataSekarang.length) {
      kecepatan = 2000; // Diam dulu selama 2 detik
      sedangMenghapus = true;
    }
    // Kalau kata sudah selesai dihapus semua
    else if (sedangMenghapus && indeksHuruf === 0) {
      sedangMenghapus = false;
      indeksKata = (indeksKata + 1) % daftarKata.length; // Ganti ke kata berikutnya
      kecepatan = 500; // Jeda sebentar sebelum mengetik lagi
    }

    setTimeout(efekKetik, kecepatan);
  }

  // Jalankan fungsinya
  efekKetik();
});
