document.addEventListener('DOMContentLoaded', () => {

  // =========================================================
  // LOGIKA JS 1: EFEK TYPEWRITER (MENGETIK OTOMATIS BERGANTIAN)
  // =========================================================
  const kataKata = [
      "Siswa Rekayasa Perangkat Lunak.",
      "Kreator Solusi Digital Kreatif."
  ];

  let indeksKata = 0;
  let indeksHuruf = 0;
  let statusMenghapus = false;
  const elemenTeks = document.getElementById('animasi-teks');

  function jalankanTypewriter() {
      const kalimatAktif = kataKata[indeksKata];

      if (statusMenghapus) {
          // Proses menghapus per huruf
          elemenTeks.textContent = kalimatAktif.substring(0, indeksHuruf - 1);
          indeksHuruf--;
      } else {
          // Proses mengetik per huruf
          elemenTeks.textContent = kalimatAktif.substring(0, indeksHuruf + 1);
          indeksHuruf++;
      }

      // Kecepatan mengetik (70ms) & menghapus (35ms) agar ritmenya natural
      let tempoKetik = statusMenghapus ? 35 : 70;

      // Jika satu kalimat sudah utuh terketik
      if (!statusMenghapus && indeksHuruf === kalimatAktif.length) {
          tempoKetik = 2500; // Diamkan selama 2.5 detik agar elegan terbaca
          statusMenghapus = true;
      } 
      // Jika kalimat sudah terhapus bersih secara total
      else if (statusMenghapus && indeksHuruf === 0) {
          statusMenghapus = false;
          indeksKata = (indeksKata + 1) % kataKata.length; // Lompat ke baris kata berikutnya
          tempoKetik = 300; // Jeda sejenak sebelum mulai mengetik baru
      }

      setTimeout(jalankanTypewriter, tempoKetik);
  }

  // Eksekusi typewriter jika id komponennya valid tersedia
  if (elemenTeks) {
      jalankanTypewriter();
  }


  // =========================================================
  // LOGIKA JS 2: SCROLL ANIMATION (MUNCUL HALUS BERGANTIAN/STAGGERED)
  // =========================================================
  const komponenAnimasi = document.querySelectorAll('.efek-muncul');

  const konfigurasiObserver = {
      root: null,          // Area pandang layar browser
      threshold: 0.08,     // Aktif saat 8% bagian elemen masuk layar
      rootMargin: "0px 0px -30px 0px"
  };

  const pengamatDinamis = new IntersectionObserver((kumpulanEntri, pengamat) => {
      kumpulanEntri.forEach((entri) => {
          if (entri.isIntersecting) {
              // Beri efek transisi delay otomatis jika elemen berupa kartu berurutan
              const targetCard = entri.target;
              if (targetCard.classList.contains('skill-card')) {
                  // Mencari urutan index elemen di dalam grid untuk menentukan besaran delay
                  const saudara = Array.from(targetCard.parentNode.children);
                  const indexUrut = saudara.indexOf(targetCard);
                  
                  setTimeout(() => {
                      targetCard.classList.add('sudah-muncul');
                  }, indexUrut * 80); // jeda 80 milidetik antar card
              } else {
                  targetCard.classList.add('sudah-muncul');
              }
              
              // Matikan pengawasan pada elemen yang sudah sukses muncul agar hemat RAM
              pengamat.unobserve(targetCard);
          }
      });
  }, konfigurasiObserver);

  // Daftarkan semua elemen target ke dalam sistem pengamat scroll JS
  komponenAnimasi.forEach(komponen => {
      pengamatDinamis.observe(komponen);
  });

});