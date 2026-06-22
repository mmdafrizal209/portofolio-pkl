document.addEventListener("DOMContentLoaded", () => {
  // =========================================================
  // LOGIKA UPDATE: SAKELAR THEME TOGGLE (DARK MODE / LIGHT MODE)
  // =========================================================
  const themeToggleBtn = document.getElementById("theme-toggle");
  const sunIcon = document.getElementById("theme-icon-sun");
  const moonIcon = document.getElementById("theme-icon-moon");
  const htmlRoot = document.documentElement;

  function updateThemeIcons(isDark) {
    if (sunIcon && moonIcon) {
      if (isDark) {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
      } else {
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
      }
    }
  }

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    htmlRoot.classList.remove("dark");
    updateThemeIcons(false);
  } else {
    htmlRoot.classList.add("dark");
    updateThemeIcons(true);
    if (!savedTheme) {
      localStorage.setItem("theme", "dark");
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isCurrentlyDark = htmlRoot.classList.contains("dark");
      if (isCurrentlyDark) {
        htmlRoot.classList.remove("dark");
        localStorage.setItem("theme", "light");
        updateThemeIcons(false);
      } else {
        htmlRoot.classList.add("dark");
        localStorage.setItem("theme", "dark");
        updateThemeIcons(true);
      }
    });
  }

  // =========================================================
  // DATA DICTIONARY MULTI-LANGUAGE
  // =========================================================
  const dictionary = {
    id: {
      "nav-about": "Tentang",
      "nav-skills": "Keahlian",
      "nav-projects": "Project",
      "nav-blog": "Blog",
      "nav-contact": "Kontak",
      "hero-available": "Available for Projects",
      "hero-greet": "Halo, Saya",
      "hero-iam": "Saya seorang",
      "hero-btn": "Hubungi Saya",
      "hero-cv": "Unduh CV", // Tambahan terjemahan CV (ID)
      "about-title": "Tentang Saya",
      "about-desc":
        'Saya adalah siswa SMKN 1 CIANJUR jurusan <strong class="text-slate-800 dark:text-slate-200 font-semibold">Rekayasa Perangkat Lunak (RPL)</strong> yang memiliki focus mendalam pada pengembangan aplikasi web dan mobile. Saya gemar menuangkan id kreatif ke dalam baris kode, membangun antarmuka UI/UX yang responsif, serta mempelajari arsitektur teknologi baru untuk menciptakan solusi digital yang efisien dan fungsional.',
      "skills-title": "Keahlian Teknis",
      "projects-title": "Project & Karya",
      "project-tag-1": "School Project",
      "project-desc-1":
        "Aplikasi mobile pemandu ibadah digital yang menyediakan fitur Al-Qur'an digital, jadwal sholat berbasis lokasi realtime, serta kumpulan doa harian untuk mendukung kebutuhan ibadah umat Muslim.",
      "project-tag-2": "School Project",
      "project-desc-2":
        "Sebuah platform landing page modern yang dibangun dengan fokus pada aspek visual dan interaktivitas. Mengimplementasikan berbagai teknik animasi transisi, micro-interactions, serta tata letak responsif untuk menciptakan pengalaman pengguna yang dinamis, estetik, dan hidup saat diakses di berbagai perangkat.",
      "contact-title": "Hubungi Saya",
      "contact-desc":
        "Tertarik dengan profil saya atau ingin berdiskusi mengenai pengembangan aplikasi? Jangan ragu untuk menghubungi saya melalui saluran kontak di bawah ini.",
      "footer-rights": "Hak Cipta Dilindungi. Built with HTML, CSS, & JS.",
      "typewriter-1": "Siswa Rekayasa Perangkat Lunak.",
      "typewriter-2": "Kreator Solusi Digital Kreatif.",
      "blog-title": "Blog & Catatan",
      "blog-date-1": "20 Juni 2026",
      "blog-headline-1": "Belajar Tailwind CSS dengan Cepat untuk Pemula",
      "blog-summary-1":
        "Tailwind CSS mengubah cara kita mendesain website. Mari pelajari konsep utility-first framework dan cara membuat kodingan CSS portfolio menjadi ringkas.",
      "blog-read-1": "Baca Selengkapnya &rarr;",
      "blog-date-2": "15 Mei 2026",
      "blog-headline-2": "Mengapa Memilih Flutter di Tahun 2026?",
      "blog-summary-2":
        "Flutter masih menjadi primadona pengembangan aplikasi cross-platform. Mari bedah keunggulan performa dan efisiensi satu basis kode untuk Android dan iOS.",
      "blog-read-2": "Baca Selengkapnya &rarr;",
      "body-tailwind":
        "<p>Tailwind CSS adalah framework CSS yang sangat populer dengan pendekatan <b>Utility-First</b>. Berbeda dengan framework konvensional seperti Bootstrap yang menyediakan komponen siap pakai (seperti .btn atau .card), Tailwind membekali kita dengan class-class kecil yang spesifik (seperti flex, pt-4, bg-blue-500, dan rounded-xl).</p><p>Dengan cara ini, kita tidak perlu lagi meninggalkan file HTML untuk menulis kode CSS panjang di file terpisah. Semua modifikasi tampilan dashboard, layouting responsif, hingga transisi warna dark mode bisa langsung dieksekusi di satu baris kode HTML.</p><p>Keunggulan utamanya adalah fleksibilitas tanpa batas dalam merancang desain UI/UX yang unik tanpa takut berat, karena Tailwind akan otomatis memangkas class CSS yang tidak terpakai saat proses build akhir.</p>",
      "body-flutter":
        '<p>Di tahun 2026, Flutter yang dikembangkan oleh Google terbukti tetap menjadi teknologi unggulan dalam dunia pengembangan aplikasi mobile. Menggunakan bahasa pemrograman <b>Dart</b>, Flutter menawarkan performa tinggi karena kodenya langsung dikompilasi ke kode mesin asli (native code) tanpa perantara bridge.</p><p>Keunggulan utama Flutter terletak pada arsitektur widget-nya yang sangat fleksibel. Konsep <i>"Everything is a Widget"</i> memudahkan developer merancang animasi kompleks dan kustomisasi antarmuka aplikasi secara piksel-demi-piksel agar berjalan mulus di Android maupun iOS.</p><p>Bagi siswa jurusan RPL, menguasai Flutter memberikan keuntungan besar karena efisiensi waktu kerja: cukup maintain satu basis kode (single codebase) untuk meluncurkan aplikasi di dua platform raksasa sekaligus dengan performa yang tetap responsif dan stabil.</p>',
    },
    en: {
      "nav-about": "About",
      "nav-skills": "Skills",
      "nav-projects": "Projects",
      "nav-blog": "Blog",
      "nav-contact": "Contact",
      "hero-available": "Available for Projects",
      "hero-greet": "Hello, I am",
      "hero-iam": "I am a",
      "hero-btn": "Contact Me",
      "hero-cv": "Download CV", // Tambahan terjemahan CV (EN)
      "about-title": "About Me",
      "about-desc":
        'I am a student at SMKN 1 CIANJUR majoring in <strong class="text-slate-800 dark:text-slate-200 font-semibold">Software Engineering (RPL)</strong> who has a deep focus on web and mobile application development. I love pouring creative ideas into lines of code, building responsive UI/UX interfaces, and learning new technology architectures to create efficient and functional digital solutions.',
      "skills-title": "Technical Skills",
      "projects-title": "Projects & Works",
      "project-tag-1": "School Project",
      "project-desc-1":
        "A digital worship guide mobile application that provides digital Al-Qur'an features, real-time location-based prayer schedules, and a collection of daily prayers to support the worship needs of Muslims.",
      "project-tag-2": "School Project",
      "project-desc-2":
        "A modern landing page platform built with a focus on visual aspects and interactivity. Implementing various transition animation techniques, micro-interactions, and responsive layouts to create a dynamic, aesthetic, and lively user experience when accessed across various devices.",
      "contact-title": "Contact Me",
      "contact-desc":
        "Interested in my profile or want to discuss application development? Feel free to contact me through the communication channels below.",
      "footer-rights": "All Rights Reserved. Built with HTML, CSS, & JS.",
      "typewriter-1": "Software Engineering Student.",
      "typewriter-2": "Creative Digital Solution Creator.",
      "blog-title": "Blog & Notes",
      "blog-date-1": "June 20, 2026",
      "blog-headline-1": "Learn Tailwind CSS Quickly for Beginners",
      "blog-summary-1":
        "Tailwind CSS changes the way we design websites. Let's learn the concept of utility-first framework and how to keep portfolio CSS code clean.",
      "blog-read-1": "Read More &rarr;",
      "blog-date-2": "May 15, 2026",
      "blog-headline-2": "Why Choose Flutter in 2026?",
      "blog-summary-2":
        "Flutter remains the king of cross-platform app development. Let's dissect the performance advantages and single codebase efficiency for Android and iOS.",
      "blog-read-2": "Read More &rarr;",
      "body-tailwind":
        "<p>Tailwind CSS is a highly popular CSS framework utilizing a <b>Utility-First</b> approach. Unlike conventional frameworks like Bootstrap that provide pre-styled components (such as .btn or .card), Tailwind equips us with tiny, specific class names (like flex, pt-4, bg-blue-500, and rounded-xl).</p><p>With this workflow, you no longer need to leave your HTML file to write long CSS styles in a separate document. Layout structural grids, responsive screen modifiers, and even dark-mode transition triggers can all be written directly inside the HTML markup classes.</p><p>Its ultimate benefit is the endless design freedom it provides for crafting unique UI/UX without causing bloat, as Tailwind automatically prunes unused styles during the production build cycle.</p>",
      "body-flutter":
        '<p>In 2026, Google\'s Flutter has consistently proven to be a premier choice in mobile application development. Engineered with the <b>Dart</b> language, Flutter delivers high-speed native execution as the framework compiles direct to machine instructions without an overhead bridging engine.</p><p>The power of Flutter stems from its high-fidelity widget ecosystem. Adhering to the principle of <i>"Everything is a Widget"</i> allows engineers to program rich transitions and pixel-perfect custom visual styling fluidly on both Android and iOS devices.</p><p>For Software Engineering students, mastering Flutter is highly strategic due to cross-platform dev cycles: you build and ship a single codebase across two major application ecosystems seamlessly without compromising performance or stability.</p>',
    },
  };

  let currentLang = "id";

  // =========================================================
  // LOGIKA: EFEK TYPEWRITER
  // =========================================================
  let indeksKata = 0;
  let indeksHuruf = 0;
  let statusMenghapus = false;
  let timeoutTypewriter = null;
  const elemenTeks = document.getElementById("animasi-teks");

  function jalankanTypewriter() {
    if (!elemenTeks) return;

    const kataKata = [
      dictionary[currentLang]["typewriter-1"],
      dictionary[currentLang]["typewriter-2"],
    ];

    const kalimatAktif = kataKata[indeksKata];

    if (statusMenghapus) {
      elemenTeks.textContent = kalimatAktif.substring(0, indeksHuruf - 1);
      indeksHuruf--;
    } else {
      elemenTeks.textContent = kalimatAktif.substring(0, indeksHuruf + 1);
      indeksHuruf++;
    }

    let tempoKetik = statusMenghapus ? 35 : 70;

    if (!statusMenghapus && indeksHuruf === kalimatAktif.length) {
      tempoKetik = 2500;
      statusMenghapus = true;
    } else if (statusMenghapus && indeksHuruf === 0) {
      statusMenghapus = false;
      indeksKata = (indeksKata + 1) % kataKata.length;
      tempoKetik = 300;
    }

    timeoutTypewriter = setTimeout(jalankanTypewriter, tempoKetik);
  }

  if (elemenTeks) {
    jalankanTypewriter();
  }

  // =========================================================
  // LOGIKA: SCROLL ANIMATION
  // =========================================================
  const komponenAnimasi = document.querySelectorAll(".efek-muncul");

  const konfigurasiObserver = {
    root: null,
    threshold: 0.08,
    rootMargin: "0px 0px -30px 0px",
  };

  const pengamatDinamis = new IntersectionObserver(
    (kumpulanEntri, pengamat) => {
      kumpulanEntri.forEach((entri) => {
        if (entri.isIntersecting) {
          const targetCard = entri.target;
          targetCard.classList.add("sudah-muncul");
          pengamat.unobserve(targetCard);
        }
      });
    },
    konfigurasiObserver
  );

  komponenAnimasi.forEach((komponen) => {
    pengamatDinamis.observe(komponen);
  });

  // =========================================================
  // LOGIKA: HAMBURGER MENU (RESPONSIF MOBILE)
  // =========================================================
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuToggle && navMenu && menuIcon) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navMenu.classList.toggle("hidden");
      navMenu.classList.toggle("flex");

      if (navMenu.classList.contains("hidden")) {
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`;
      } else {
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`;
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (!navMenu.classList.contains("hidden")) {
          navMenu.classList.add("hidden");
          navMenu.classList.remove("flex");
          menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`;
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (
        !navMenu.classList.contains("hidden") &&
        !navMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        navMenu.classList.add("hidden");
        navMenu.classList.remove("flex");
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`;
      }
    });
  }

  // =========================================================
  // LOGIKA: MODAL POP-UP ARTIKEL BLOG
  // =========================================================
  const blogModal = document.getElementById("blog-modal");
  const modalClose = document.getElementById("modal-close");
  const modalDate = document.getElementById("modal-date");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");
  const readMoreButtons = document.querySelectorAll("[data-art]");

  function openModal(articleKey) {
    if (!blogModal || !modalDate || !modalTitle || !modalContent) return;

    if (articleKey === "tailwind") {
      modalDate.textContent = dictionary[currentLang]["blog-date-1"];
      modalTitle.textContent = dictionary[currentLang]["blog-headline-1"];
      modalContent.innerHTML = dictionary[currentLang]["body-tailwind"];
    } else if (articleKey === "flutter") {
      modalDate.textContent = dictionary[currentLang]["blog-date-2"];
      modalTitle.textContent = dictionary[currentLang]["blog-headline-2"];
      modalContent.innerHTML = dictionary[currentLang]["body-flutter"];
    }

    blogModal.classList.remove("hidden");
    setTimeout(() => {
      blogModal.classList.remove("opacity-0");
      blogModal.querySelector(".transform").classList.remove("scale-95");
    }, 10);
    document.body.classList.add("overflow-hidden");
  }

  function closeModal() {
    if (!blogModal) return;
    blogModal.classList.add("opacity-0");
    blogModal.querySelector(".transform").classList.add("scale-95");
    setTimeout(() => {
      blogModal.classList.add("hidden");
    }, 300);
    document.body.classList.remove("overflow-hidden");
  }

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const articleKey = button.getAttribute("data-art");
      openModal(articleKey);
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);

  if (blogModal) {
    blogModal.addEventListener("click", (e) => {
      if (e.target === blogModal) closeModal();
    });
  }

  // =========================================================
  // LOGIKA: FITUR MULTI-LANGUAGE
  // =========================================================
  const langToggle = document.getElementById("lang-toggle");

  function updateLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (dictionary[lang][key]) {
        element.innerHTML = dictionary[lang][key];
      }
    });

    langToggle.textContent = lang.toUpperCase();

    // Reset mesin tik otomatis
    clearTimeout(timeoutTypewriter);
    indeksKata = 0;
    indeksHuruf = 0;
    statusMenghapus = false;
    if (elemenTeks) {
      elemenTeks.textContent = "";
      jalankanTypewriter();
    }
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "id" ? "en" : "id";
      updateLanguage(currentLang);
    });
  }
});
