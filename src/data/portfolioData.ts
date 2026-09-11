import {
  ProjectItem,
  EducationItem,
  SkillCategoryItem,
  AchievementItem,
  CompetitiveGameItem,
  TechStackGroup,
  JourneyStep,
} from '../types';

export const PERSONAL_INFO = {
  fullName: 'Alvin Nuril Iqbal',
  nickname: 'Vinn',
  brand: 'VinnZxie',
  avatarUrl: '/pp.jpg',
  title: 'Full Stack Developer · Computer Engineering Student',
  status: 'University Student at Politeknik Negeri Banyuwangi',
  department: 'Bisnis dan Informatika',
  program: 'Teknologi Rekayasa Komputer',
  previousSchool: 'SMK Negeri 1 Banyuwangi (TJKT)',
  location: 'Banyuwangi, Indonesia',
  coordinates: '8.2192° S, 114.3692° E',
  email: 'alvinnurilqbal@gmail.com',
  github: 'https://github.com/vinzxie',
  instagram: 'https://instagram.com/vinzxie',
  instagramHandle: '@vinzxie',
  tiktok: 'https://tiktok.com/@vinzxie_',
  tiktokHandle: '@vinzxie_',
  youtube: 'https://youtube.com/@VinnNotPinn',
  youtubeHandle: 'VinnNotPinn'
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'quiz-coding',
    title: 'QuizCoding',
    category: 'Education',
    categoryLabel: {
      id: 'Edukasi',
      en: 'Education'
    },
    tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'TypeScript'],
    shortDescription: {
      id: 'Platform kuis pemrograman interaktif berbasis web untuk melatih pemahaman sintaksis, logika algoritma, dan konsep rekayasa perangkat lunak dengan analisis jawaban langsung.',
      en: 'Interactive coding quiz platform designed to help users practice programming concepts and test algorithmic knowledge through dynamic quizzes.'
    },
    problemStatement: {
      id: 'Mempelajari sintaks dari dokumentasi statis seringkali kurang memberikan umpan balik langsung dan evaluasi retensi, menyulitkan pembelajar mengukur pemahaman konsep.',
      en: 'Learning syntax from static docs often lacks instant feedback and gamified retention, making it hard for learners to gauge concept mastery.'
    },
    solutionNarrative: {
      id: 'Membangun aplikasi web full-stack menggunakan Next.js untuk navigasi cepat dan transisi halaman, dipadukan dengan Supabase untuk sinkronisasi state kuis dan pencatatan skor real-time.',
      en: 'Engineered a full-featured web client using Next.js for server-rendered page transitions, coupled with Supabase for real-time quiz state and score tracking.'
    },
    keyFeatures: {
      id: [
        'Antarmuka kuis interaktif dengan penghitung waktu dan analisis jawaban instan',
        'Bank soal berbasis kategori mencakup algoritma, web fundamental, dan struktur data',
        'Evaluasi skor komprehensif dan rincian pembahasan jawaban',
        'Persistensi basis data Supabase untuk penyimpanan bank soal dan statistik sesi'
      ],
      en: [
        'Interactive timed quiz interface with immediate answer analysis',
        'Category-based question banks covering algorithms and web fundamentals',
        'Instant score evaluation and progress breakdown',
        'Supabase-backed persistence for question sets and player statistics'
      ]
    },
    techStackDetailed: [
      {
        feature: {
          id: 'Mesin State & Logika Kuis',
          en: 'Quiz Logic & State Engine'
        },
        tech: 'Next.js & React Hooks',
        detail: {
          id: 'Mengatur timer per soal, validasi jawaban pengguna, dan transisi state lokal kuis.',
          en: 'Manages step-by-step question timers, response validation, and local quiz sessions.'
        }
      },
      {
        feature: {
          id: 'Lapisan Data & Penyimpanan',
          en: 'Data Layer & Auth Persistence'
        },
        tech: 'Supabase (PostgreSQL)',
        detail: {
          id: 'Menyimpan rekaman soal terstruktur, opsi pilihan ganda, progres, dan stempel waktu sesi.',
          en: 'Stores structured question records, choices, user progress, and session timestamps.'
        }
      },
      {
        feature: {
          id: 'Tata Letak Visual & Feedback',
          en: 'Visual Layout & Feedback'
        },
        tech: 'Tailwind CSS',
        detail: {
          id: 'Menyediakan styling sintaks kode berbobot tinggi, pilihan interaktif, dan kartu kontras.',
          en: 'Delivers high-contrast typography, code snippet syntax styling, and interactive options.'
        }
      }
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'TypeScript'],
    architectureSummary: {
      id: 'Halaman katalog yang di-render secara optimal di sisi server dengan pengelola state kuis reaktif di sisi klien terhubung ke Supabase PostgreSQL.',
      en: 'Server-side pre-rendered catalog pages with client-side reactive quiz state manager connected to Supabase PostgreSQL.'
    },
    previewType: 'code',
    status: {
      id: 'Selesai',
      en: 'Completed'
    }
  },
  {
    id: 'agritrack',
    title: 'AgriTrack',
    category: 'Dashboard',
    categoryLabel: {
      id: 'Dasbor',
      en: 'Dashboard'
    },
    tags: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    shortDescription: {
      id: 'Platform pelacakan dan analitik pertanian digital untuk mengelola siklus tanam, memantau riwayat sensor lingkungan, dan memvisualisasikan data panen.',
      en: 'Digital agriculture tracking and analytics platform for managing crop cycles, monitoring environmental records, and visualizing farm data.'
    },
    problemStatement: {
      id: 'Pencatatan data pertanian manual sering kali tersebar di buku catatan fisik, menyulitkan analisis tren hasil panen historis dan pemantauan kondisi lingkungan.',
      en: 'Agricultural record-keeping is often fragmented across physical logs, making historical yield analysis and environmental monitoring difficult.'
    },
    solutionNarrative: {
      id: 'Membangun dasbor analitik berbasis web dengan tabel manajemen terstruktur dan grafik visual interaktif untuk mengubah data mentah pertanian menjadi wawasan yang dapat ditindaklanjuti.',
      en: 'Created an analytical dashboard with tabular management views and visual timeline charts to turn raw farming data into actionable insights.'
    },
    keyFeatures: {
      id: [
        'Grafik visual tren curah hujan, kelembapan tanah, dan volume hasil panen musiman',
        'Modul manajemen inventaris benih, pupuk, dan pencatatan siklus panen',
        'Skema relasional PostgreSQL untuk log batch tanaman yang terorganisir',
        'Endpoint RESTful Express/Node.js untuk penerimaan data telemetri yang cepat'
      ],
      en: [
        'Visual trend charts for rainfall, soil moisture, and seasonal crop yields',
        'Inventory and harvest tracking management module',
        'Relational PostgreSQL schema for relational crop batch logs',
        'RESTful Express/Node.js endpoints for fast telemetry ingestion'
      ]
    },
    techStackDetailed: [
      {
        feature: {
          id: 'Visualisasi Data & Grafik',
          en: 'Data Visualization & Graphs'
        },
        tech: 'Chart.js & React Chartjs',
        detail: {
          id: 'Merender grafik deret waktu dinamis untuk volume panen dan fluktuasi suhu.',
          en: 'Renders dynamic time-series charts for harvest volume and temperature trends.'
        }
      },
      {
        feature: {
          id: 'API Backend Ingestion',
          en: 'Backend Ingestion API'
        },
        tech: 'Node.js + Express',
        detail: {
          id: 'Menyediakan endpoint REST terstruktur dengan filter kueri berdasarkan ID batch dan rentang tanggal.',
          en: 'Provides structured REST endpoints with query filters for batch IDs and date ranges.'
        }
      },
      {
        feature: {
          id: 'Basis Data Relasional',
          en: 'Relational Database'
        },
        tech: 'PostgreSQL',
        detail: {
          id: 'Skema ternormalisasi yang menghubungkan lahan, jenis tanaman, pembacaan sensor, dan entri panen.',
          en: 'Normalized schema connecting fields, crop types, sensor readings, and harvest entries.'
        }
      }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    architectureSummary: {
      id: 'Frontend SPA terpisah yang berinteraksi melalui REST API JSON dengan backend middleware Express di atas basis data PostgreSQL.',
      en: 'Decoupled SPA frontend interacting via JSON REST API with an Express middleware backend running over PostgreSQL.'
    },
    previewType: 'dashboard',
    status: {
      id: 'Selesai',
      en: 'Completed'
    }
  },
  {
    id: 'calculator-subnetmask',
    title: 'Calculator Subnetmask',
    category: 'Networking',
    categoryLabel: {
      id: 'Jaringan',
      en: 'Networking'
    },
    tags: ['JavaScript', 'React', 'Tailwind CSS', 'Networking'],
    shortDescription: {
      id: 'Kalkulator subnet mask yang dirancang untuk mempermudah perhitungan pengalamatan IPv4, konversi notasi CIDR, penentuan batas jaringan, dan rentang host yang dapat digunakan.',
      en: 'Subnet mask calculator engineered to simplify IP addressing, CIDR notation conversions, network bounds calculation, and usable host ranges.'
    },
    problemStatement: {
      id: 'Perhitungan bitwise manual subnet IPv4, alamat broadcast, dan wildcard mask saat konfigurasi jaringan rentan terhadap kesalahan dan memakan waktu.',
      en: 'Manual bitwise calculation of IPv4 subnets, broadcast addresses, and wildcard masks during network setup is error-prone and time-consuming.'
    },
    solutionNarrative: {
      id: 'Membangun perkakas jaringan khusus yang menjalankan aritmatika biner 32-bit pada oktet IPv4 secara langsung, menghasilkan parameter subnet secara instan tanpa latensi.',
      en: 'Built a specialized networking utility that performs 32-bit binary arithmetic on IPv4 octets in real-time, instantly rendering subnet details.'
    },
    keyFeatures: {
      id: [
        'Konversi langsung notasi CIDR (/1 hingga /32) ke format dotted-decimal subnet mask',
        'Rincian biner Network ID, Rentang Alamat Host yang Dapat Digunakan, dan Broadcast IP',
        'Perhitungan total host usable dan analisis wildcard mask',
        'Pemeriksa arsitektur pengalamatan Classful (Kelas A/B/C) vs Classless (CIDR)'
      ],
      en: [
        'Real-time CIDR (/1 - /32) to dotted-decimal mask conversion',
        'Binary breakdown of Network ID, Usable Host IP Range, and Broadcast IP',
        'Total usable hosts calculation with wildcard mask analysis',
        'Classful vs Classless (CIDR) architecture inspector'
      ]
    },
    techStackDetailed: [
      {
        feature: {
          id: 'Mesin Kalkulasi Bitwise',
          en: 'Bitwise Calculation Engine'
        },
        tech: 'Vanilla JavaScript Bitwise Math',
        detail: {
          id: 'Mengonversi string 4-oktet IPv4 menjadi bilangan bulat 32-bit untuk operasi bitwise AND/OR/NOT.',
          en: 'Converts 4-octet IPv4 strings into 32-bit integers to apply bitwise AND/OR/NOT operations.'
        }
      },
      {
        feature: {
          id: 'Input & Slider Reaktif',
          en: 'Interactive Input & Slider'
        },
        tech: 'React State Management',
        detail: {
          id: 'Menjalankan kalkulasi ulang instan saat slider CIDR digeser tanpa hambatan kinerja.',
          en: 'Enables instant recalculation on CIDR slider movement with zero lag.'
        }
      },
      {
        feature: {
          id: 'Matriks Tampilan Monospace',
          en: 'Terminal-Style Matrix UI'
        },
        tech: 'Tailwind CSS',
        detail: {
          id: 'Matriks berjarak presisi yang menyandingkan string biner 32-bit dan alamat desimal.',
          en: 'Structured monospace matrix presenting binary strings and decimal addresses side-by-side.'
        }
      }
    ],
    technologies: ['JavaScript', 'React', 'Tailwind CSS'],
    architectureSummary: {
      id: 'Mesin algoritma sisi klien dengan manipulasi bitwise berkecepatan tinggi pada blok pengalamatan IPv4.',
      en: 'Zero-latency client-side algorithmic engine operating with bitwise manipulation on IPv4 addressing blocks.'
    },
    previewType: 'calculator',
    status: {
      id: 'Selesai',
      en: 'Completed'
    }
  },
  {
    id: 'devlink-vault',
    title: 'DevLink Vault',
    category: 'Tools',
    categoryLabel: {
      id: 'Perkakas',
      en: 'Tools'
    },
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Local State'],
    shortDescription: {
      id: 'Ruang kerja kurasi tautan dan sumber daya pengembang untuk mengorganisasi repositori, dokumentasi API, toolkit, dan cuplikan kode penting.',
      en: 'Personal developer resource and link curation workspace for categorizing repositories, documentation, toolkits, and code snippets.'
    },
    problemStatement: {
      id: 'Pengembang kerap kehilangan referensi dokumentasi, pustaka, dan utilitas penting karena bookmark browser yang menumpuk tanpa struktur kategori.',
      en: 'Developers constantly lose useful documentation, libraries, and utilities across unorganized browser bookmark bars.'
    },
    solutionNarrative: {
      id: 'Merancang antarmuka berkas vault yang rapi dengan pelabelan tag, pencarian kata kunci instan, dan kartu metadata yang dapat disalin dengan satu klik.',
      en: 'Designed an organized vault interface featuring category tagging, quick keyword search, and instant click-to-copy metadata cards.'
    },
    keyFeatures: {
      id: [
        'Pencarian fuzzy cepat di sisi klien pada judul, tag, dan deskripsi sumber daya',
        'Filter kategorisasi (Frontend, DevOps, Sistem, Jaringan, UI)',
        'Tata letak kartu rapi dengan aksi buka langsung dan salin tautan cepat',
        'Penyimpanan state lokal browser tanpa dependensi eksternal yang lambat'
      ],
      en: [
        'Fast client-side fuzzy search across title, tags, and descriptions',
        'Categorization filters (Frontend, DevOps, System, Networking, UI)',
        'Clean card layouts with quick launch and copy actions',
        'Zero-bloat local storage state persistence'
      ]
    },
    techStackDetailed: [
      {
        feature: {
          id: 'Pipeline Pencarian & Filter',
          en: 'Search & Filter Pipeline'
        },
        tech: 'TypeScript Array Memoization',
        detail: {
          id: 'Filter multi-predikat yang mencocokkan tag, token string, dan teks judul secara efisien.',
          en: 'Multi-predicate filter matching tags, category strings, and title tokens.'
        }
      },
      {
        feature: {
          id: 'Penyimpanan State Lokal',
          en: 'State Cache'
        },
        tech: 'Web Storage API (localStorage)',
        detail: {
          id: 'Menyimpan koleksi tautan kustom dan item favorit secara persisten di peramban lokal.',
          en: 'Stores custom collections and pinned favorite bookmarks locally in the browser.'
        }
      },
      {
        feature: {
          id: 'Tata Letak Grid Responsif',
          en: 'Responsive Grid Layout'
        },
        tech: 'Tailwind CSS Grid & Flexbox',
        detail: {
          id: 'Grid kartu bergaya bento yang adaptif dengan umpan balik visual saat disentuh.',
          en: 'Adaptive bento-style card grid with micro-interactions.'
        }
      }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    architectureSummary: {
      id: 'Aplikasi SPA React modular yang memanfaatkan penyimpanan hook kustom dan pencarian ter-memoize.',
      en: 'Modular client-side React SPA leveraging custom hook persistence and performant memoized search pipelines.'
    },
    previewType: 'catalog',
    status: {
      id: 'Selesai',
      en: 'Completed'
    }
  },
  {
    id: 'aura-dashboard',
    title: 'AURA Dashboard',
    category: 'Dashboard',
    categoryLabel: {
      id: 'Dasbor',
      en: 'Dashboard'
    },
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Recharts'],
    projectType: {
      id: 'Web Dashboard',
      en: 'Web Dashboard'
    },
    purpose: {
      id: 'Monitoring & Visualisasi Data',
      en: 'Monitoring & Data Visualization'
    },
    role: {
      id: 'Frontend & Full Stack Development',
      en: 'Frontend & Full Stack Development'
    },
    shortDescription: {
      id: 'Web dashboard untuk memusatkan informasi, statistik, dan aktivitas dalam satu interface sehingga data dapat dipantau dengan lebih cepat dan terorganisir.',
      en: 'A centralized web dashboard unifying information, statistics, and activity logs into a single interface for faster, organized data monitoring.'
    },
    overview: {
      id: 'AURA Dashboard dirancang untuk menyatukan berbagai sumber data metrik, indikator performa, dan riwayat aktivitas ke dalam satu tampilan terpadu, menghilangkan keharusan berpindah-pindah aplikasi secara manual.',
      en: 'AURA Dashboard is designed to unite fragmented metric data sources, key performance indicators, and activity logs into a unified view, eliminating manual context-switching between tools.'
    },
    projectGoals: {
      id: 'Menghadirkan pusat kendali pemantauan (single pane of glass) yang memungkinkan pengguna memeriksa statistik utama dan log aktivitas dalam hitungan detik secara terstruktur.',
      en: 'Provide a unified single-pane-of-glass monitoring console that enables operators to inspect key metrics and activity streams within seconds in an organized manner.'
    },
    problemStatement: {
      id: 'Informasi operasional, statistik metrik, dan log aktivitas sering kali terpencar di berbagai sistem terpisah, menyulitkan pengguna dalam memantau tren data secara cepat dan mendeteksi anomali.',
      en: 'Operational information, metrics, and activity logs are frequently scattered across disconnected tools, slowing down situational awareness and making anomaly detection tedious.'
    },
    solutionNarrative: {
      id: 'Membangun web dashboard terpusat berbasis React dan Tailwind CSS dengan kartu metrik real-time, visualisasi grafik interaktif, dan feed aktivitas terorganisir yang responsif di semua perangkat.',
      en: 'Engineered a centralized React and Tailwind CSS web dashboard featuring real-time stat cards, interactive charts, and organized activity streams optimized for all devices.'
    },
    developmentChallenges: {
      id: 'Menjaga performa render tetap ringan saat memproses pembaruan aliran log aktivitas, serta mengatur tata letak widget statistik agar tetap padat namun ergonomis di layar ponsel maupun desktop.',
      en: 'Maintaining lightweight rendering performance during continuous activity stream updates while organizing widget density ergonomically across mobile and desktop viewports.'
    },
    developmentSolutions: {
      id: 'Mengimplementasikan hierarki komponen modular dengan memoization untuk mencegah re-render yang tidak diperlukan, serta memanfaatkan CSS Grid adaptif untuk penataan widget.',
      en: 'Implemented modular component hierarchies with memoization to prevent redundant re-renders, paired with responsive CSS Grid systems for fluid widget distribution.'
    },
    keyFeatures: {
      id: [
        'Pusat Informasi & Metrik: Ringkasan data statistik utama dan indikator performa dalam widget ringkas',
        'Feed Aktivitas Terpusat: Log catatan aktivitas sistem dan pengguna yang disajikan secara kronologis',
        'Visualisasi Data & Grafik: Grafik analitik interaktif untuk membaca pola tren dan riwayat metrik',
        'Tata Letak Responsif & Terorganisir: Desain modular adaptif yang nyaman digunakan di HP, tablet, maupun desktop',
        'Penyaringan Data Cepat: Filter kategori dan pencarian log untuk mempercepat penelusuran informasi spesifik'
      ],
      en: [
        'Centralized Metrics & KPIs: Essential statistical summaries and performance indicators in concise widgets',
        'Unified Activity Stream: Chronological logging of recent system events and user actions',
        'Interactive Data Visualization: Trend charts for periodic performance and historical metric analysis',
        'Responsive & Organized Layout: Adaptive modular grid system engineered for mobile, tablet, and desktop',
        'Rapid Data Filtering: Instant category filters and search to pinpoint specific records quickly'
      ]
    },
    techStackDetailed: [
      {
        feature: {
          id: 'Arsitektur UI & Komponen',
          en: 'UI Architecture & Components'
        },
        tech: 'React / Next.js',
        detail: {
          id: 'Membangun struktur antarmuka modular, komponen kartu statistik yang dapat digunakan kembali, dan state reaktif.',
          en: 'Constructing modular UI structures, reusable metric cards, and reactive dashboard state.'
        }
      },
      {
        feature: {
          id: 'Desain Tata Letak & Styling',
          en: 'Layout System & Styling'
        },
        tech: 'Tailwind CSS',
        detail: {
          id: 'Sistem grid responsif, penataan ruang negatif seimbang, dan palet warna kontras tinggi yang ramah mata.',
          en: 'Responsive grid system, balanced negative space, and high-contrast eye-safe color tokens.'
        }
      },
      {
        feature: {
          id: 'Visualisasi Grafik & Statistik',
          en: 'Data Charts & Visualization'
        },
        tech: 'Recharts & Lucide Icons',
        detail: {
          id: 'Merender grafik analitik tren statistik dengan tooltip interaktif dan ikonografi representatif.',
          en: 'Rendering analytic trend charts with interactive tooltips and semantic iconography.'
        }
      },
      {
        feature: {
          id: 'Keamanan Tipe & Logika Data',
          en: 'Type Safety & Data Flow'
        },
        tech: 'TypeScript',
        detail: {
          id: 'Menstandarkan skema tipe data statistik, format tanggal, dan payload aktivitas.',
          en: 'Standardizing metric schemas, timestamp formatting, and event log payloads.'
        }
      }
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Recharts'],
    architectureSummary: {
      id: 'Dasbor front-end berbasis komponen modular dengan pemisahan widget metrik, feed aktivitas terpusat, dan visualizer grafik.',
      en: 'Modular component-based front-end dashboard decoupling metric widgets, centralized activity streams, and chart visualizers.'
    },
    githubUrl: 'https://github.com/vinzxie/aura-dashboard',
    liveDemoUrl: 'https://auradashboard-vinn.vercel.app/',
    previewType: 'dashboard',
    status: {
      id: 'Selesai',
      en: 'Completed'
    }
  },
  {
    id: 'ecommerce-website',
    title: 'E-Commerce Website',
    category: 'Web',
    categoryLabel: {
      id: 'Web',
      en: 'Web'
    },
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS3'],
    shortDescription: {
      id: 'Konsep platform e-commerce dengan manajemen katalog produk, sesi keranjang belanja, alur checkout dinamis, dan kueri inventaris terstruktur.',
      en: 'E-commerce platform concept featuring product catalog management, shopping cart sessions, dynamic checkout flow, and inventory queries.'
    },
    problemStatement: {
      id: 'Memahami siklus transaksi perdagangan web dari penanganan state keranjang belanja hingga penguncian inventaris pada basis data.',
      en: 'Understanding the lifecycle of server-rendered commerce transactions from cart state to database inventory locks.'
    },
    solutionNarrative: {
      id: 'Membangun aplikasi PHP server-rendered yang memanfaatkan tabel relasional MySQL dengan prepared statements untuk pencegahan celah keamanan SQL injection.',
      en: 'Constructed a full server-rendered PHP application utilizing MySQL relational tables with prepared statements for catalog exploration.'
    },
    keyFeatures: {
      id: [
        'Daftar produk dinamis dengan filter kategori dan pencarian nama',
        'Pengelolaan keranjang belanja berbasis sesi server (tambah, perbarui jumlah, hapus)',
        'Skema relasional MySQL untuk produk, kategori, dan riwayat pesanan pelanggan',
        'Validasi formulir dan sanitasi input untuk integritas transaksi'
      ],
      en: [
        'Dynamic product listing and category filtering',
        'Session-based shopping cart management (add, update quantities, remove)',
        'Relational MySQL schema for products, categories, and customer orders',
        'Form validation and sanitized SQL operations for secure interactions'
      ]
    },
    techStackDetailed: [
      {
        feature: {
          id: 'Server-Side Rendering & Routing',
          en: 'Server-Side Rendering & Routing'
        },
        tech: 'PHP Native MVC Architecture',
        detail: {
          id: 'Menangani routing permintaan HTTP, session cookies, dan rendering template dinamis.',
          en: 'Handles request routing, session cookies, and dynamic template rendering.'
        }
      },
      {
        feature: {
          id: 'Basis Data & Model Relasional',
          en: 'Database & Relational Model'
        },
        tech: 'MySQL dengan PDO',
        detail: {
          id: 'Menyimpan data produk, nomor SKU, stok, dan log transaksi menggunakan query berparameter.',
          en: 'Stores product records, SKU numbers, stock count, and transaction logs using parameterized queries.'
        }
      },
      {
        feature: {
          id: 'Interaksi Klien',
          en: 'Client Interactions'
        },
        tech: 'JavaScript (ES6)',
        detail: {
          id: 'Pembaruan kuantitas keranjang berbasis AJAX dan validasi formulir sisi klien.',
          en: 'AJAX-driven cart quantity adjustments and client-side input validations.'
        }
      }
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS3'],
    architectureSummary: {
      id: 'Pola MVC tumpukan LAMP klasik dengan abstraksi basis data PDO dan manajemen state sesi server.',
      en: 'Classic LAMP stack MVC pattern with PDO database abstraction and server session state management.'
    },
    previewType: 'catalog',
    status: {
      id: 'Selesai',
      en: 'Completed'
    }
  },
  {
    id: 'network-monitoring-system',
    title: 'Network Monitoring System',
    category: 'Networking',
    categoryLabel: {
      id: 'Jaringan',
      en: 'Networking'
    },
    tags: ['Python', 'Flask', 'SNMP', 'Networking'],
    shortDescription: {
      id: 'Konsep sistem pemantauan infrastruktur jaringan untuk memeriksa status router, bandwidth lalu lintas antarmuka, dan keterjangkauan perangkat melalui protokol SNMP.',
      en: 'Network infrastructure monitoring concept designed for polling router status, interface traffic bandwidth, and device reachability via SNMP.'
    },
    problemStatement: {
      id: 'Administrator jaringan memerlukan visibilitas cepat terhadap uptime interface router dan penggunaan bandwidth di seluruh port switch yang terhubung.',
      en: 'Network administrators need visibility into router interface uptime and bandwidth utilization across connected switch ports.'
    },
    solutionNarrative: {
      id: 'Membangun layanan mikro Python Flask yang menggabungkan kueri SNMP (Simple Network Management Protocol) dengan konsol pemantauan berbasis web.',
      en: 'Built a lightweight Python Flask service combining SNMP queries (Simple Network Management Protocol) with a web monitoring console.'
    },
    keyFeatures: {
      id: [
        'Polling SNMP OID untuk CPU router, memori, dan status link port (UP/DOWN)',
        'Verifikasi keterjangkauan perangkat dan pengukuran latensi jaringan',
        'Backend layanan mikro Flask dengan endpoint rute yang ringan',
        'Indikator visual yang jelas untuk kondisi operasional antarmuka'
      ],
      en: [
        'SNMP OID polling for router CPU, memory, and port link state (UP/DOWN)',
        'Device reachability verification and latency measurement',
        'Flask micro-service backend with lightweight route endpoints',
        'Clear status indicators for interface operational conditions'
      ]
    },
    techStackDetailed: [
      {
        feature: {
          id: 'Polling Telemetri SNMP',
          en: 'SNMP Telemetry Polling'
        },
        tech: 'Python (pysnmp / socket utilities)',
        detail: {
          id: 'Mengirimkan permintaan SNMP GET/WALK ke OID perangkat jaringan sasaran.',
          en: 'Sends SNMP GET/WALK requests to network target OIDs for interface counters.'
        }
      },
      {
        feature: {
          id: 'Server Backend Web',
          en: 'Web Backend Server'
        },
        tech: 'Python Flask',
        detail: {
          id: 'Menerjemahkan oktet respons mentah SNMP menjadi format JSON yang mudah dibaca.',
          en: 'Translates raw SNMP response octets into human-readable JSON payloads.'
        }
      },
      {
        feature: {
          id: 'Konsol Perangkat Langsung',
          en: 'Live Device Console'
        },
        tech: 'HTML5, JavaScript & CSS',
        detail: {
          id: 'Menampilkan statistik antarmuka dalam tabel dan badge status operasional.',
          en: 'Displays tabular interface statistics and real-time status pills.'
        }
      }
    ],
    technologies: ['Python', 'Flask', 'SNMP'],
    architectureSummary: {
      id: 'Daemon Python yang memanfaatkan socket SNMP untuk polling perangkat jaringan, disajikan melalui micro-framework Flask.',
      en: 'Python daemon leveraging SNMP sockets to poll network devices, served via Flask micro-framework.'
    },
    previewType: 'network',
    status: {
      id: 'Konsep / Prototipe',
      en: 'Concept / Prototype'
    }
  },
  {
    id: 'school-management-system',
    title: 'School Management System',
    category: 'Education',
    categoryLabel: {
      id: 'Edukasi',
      en: 'Education'
    },
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    shortDescription: {
      id: 'Sistem informasi manajemen sekolah untuk mengorganisasi data pendaftaran siswa, penugasan guru, jadwal kelas, dan catatan nilai akademik.',
      en: 'Administrative school management system designed to organize student enrollment, teacher assignments, class schedules, and academic records.'
    },
    problemStatement: {
      id: 'Pengelola sekolah membutuhkan pencatatan terpusat untuk siswa, rombel kelas, dan mata pelajaran tanpa ketergantungan pada spreadsheet yang terpisah-pisah.',
      en: 'School administrators require unified record-keeping for students, classes, and subjects without scattered spreadsheets.'
    },
    solutionNarrative: {
      id: 'Merancang portal administrasi multi-modul menggunakan PHP dengan constraint relasional MySQL dan tabel data terstruktur.',
      en: 'Engineered a multi-module administrative management portal in PHP with MySQL relational constraints and structured data tables.'
    },
    keyFeatures: {
      id: [
        'Manajemen data master siswa dan guru (operasi CRUD lengkap)',
        'Matriks penjadwalan kelas dan pengalokasian mata pelajaran',
        'Basis data relasional yang menghubungkan siswa, kelas, guru, dan nilai akademik',
        'Antarmuka tabular yang mudah diakses dengan fitur pencarian dan penyaringan data'
      ],
      en: [
        'Student and staff master record management (CRUD operations)',
        'Classroom and subject assignment scheduling matrix',
        'Relational database linking students, grades, and academic semesters',
        'Accessible tabular UI with search and filter capabilities'
      ]
    },
    techStackDetailed: [
      {
        feature: {
          id: 'Logika Administrasi & CRUD',
          en: 'Administrative Logic & CRUD'
        },
        tech: 'PHP Core Backend',
        detail: {
          id: 'Menangani pembuatan, validasi, pembaruan, dan penghapusan entitas data sekolah.',
          en: 'Handles data creation, validation, update, and deletion processes.'
        }
      },
      {
        feature: {
          id: 'Basis Data Akademik',
          en: 'Academic Relational Database'
        },
        tech: 'MySQL',
        detail: {
          id: 'Tabel berelasi dengan foreign key untuk kelas, siswa, guru, dan nilai rapor.',
          en: 'Foreign-key constrained tables for classes, students, teachers, and grades.'
        }
      },
      {
        feature: {
          id: 'Sistem Tata Letak UI',
          en: 'UI Layout System'
        },
        tech: 'Bootstrap Framework',
        detail: {
          id: 'Grid responsif, navigasi admin, dan modal form entri data yang efisien.',
          en: 'Responsive grid, navigation bars, and administrative modal forms.'
        }
      }
    ],
    technologies: ['PHP', 'MySQL', 'Bootstrap'],
    architectureSummary: {
      id: 'Aplikasi web PHP monolitik dengan struktur relasional MySQL yang menyediakan alur kerja administratif berbasis peran.',
      en: 'Monolithic PHP web application with MySQL relational structure providing role-oriented administrative workflows.'
    },
    previewType: 'catalog',
    status: {
      id: 'Selesai',
      en: 'Completed'
    }
  },
  {
    id: 'business-analytics-dashboard',
    title: 'Business Analytics Dashboard',
    category: 'Dashboard',
    categoryLabel: {
      id: 'Dasbor',
      en: 'Dashboard'
    },
    tags: ['JavaScript', 'Chart.js', 'REST API', 'CSS3'],
    shortDescription: {
      id: 'Antarmuka dasbor interaktif untuk memvisualisasikan metrik performa bisnis, distribusi kategori, indikator pendapatan, dan tren pertumbuhan berkala.',
      en: 'Interactive dashboard interface for visualizing business-related metrics, category distribution, revenue indicators, and performance trends.'
    },
    problemStatement: {
      id: 'Pengambil keputusan membutuhkan visualisasi intuitif untuk mengenali lintasan penjualan dan anomali kinerja secara sekilas.',
      en: 'Decision-makers need intuitive visualizations to spot sales trajectories and performance anomalies at a glance.'
    },
    solutionNarrative: {
      id: 'Membangun antarmuka analitik data interaktif menggunakan pipeline render Chart.js yang terhubung ke sumber data API JSON.',
      en: 'Built an interactive data analytics interface utilizing Chart.js rendering pipelines connected to structured JSON API data sources.'
    },
    keyFeatures: {
      id: [
        'Rendering grafik multi-tipe: garis tren (line), batang (bar), dan distribusi (doughnut)',
        'Penyaringan dinamis berdasarkan rentang tanggal dan kategori produk',
        'Tabel data responsif dengan indikator persentase pertumbuhan',
        'Tata letak visual yang ergonomis dan mudah dianalisis'
      ],
      en: [
        'Multi-type chart rendering: line, bar, and doughnut charts',
        'Dynamic date range and category filtering',
        'Responsive data tables with inline performance indicators',
        'Clean dark-themed analytical layout'
      ]
    },
    techStackDetailed: [
      {
        feature: {
          id: 'Mesin Grafik & Renderer',
          en: 'Chart Engine & Renderers'
        },
        tech: 'Chart.js Canvas Renderers',
        detail: {
          id: 'Merender dataset multi-sumbu dengan tooltip kustom, toggle legenda, dan transisi mulus.',
          en: 'Plots multi-axis datasets with custom tooltips, legend toggles, and smooth transitions.'
        }
      },
      {
        feature: {
          id: 'Pengambilan Data & Parsing',
          en: 'Data Ingestion & Fetching'
        },
        tech: 'JavaScript Fetch API',
        detail: {
          id: 'Mengambil payload JSON dan memformat stempel waktu menjadi label grafik terstruktur.',
          en: 'Retrieves mock/live JSON payloads and formats timestamps into chart labels.'
        }
      }
    ],
    technologies: ['JavaScript', 'Chart.js', 'REST API'],
    architectureSummary: {
      id: 'Visualizer analitik sisi klien dengan render Chart.js berbasis canvas di atas grid kontainer responsif.',
      en: 'Client-side analytical visualizer with canvas-based Chart.js rendering layered over responsive container grids.'
    },
    previewType: 'dashboard',
    status: {
      id: 'Selesai',
      en: 'Completed'
    }
  },
  {
    id: 'mobile-app-landing-page',
    title: 'Mobile App Landing Page',
    category: 'Frontend',
    categoryLabel: {
      id: 'Frontend',
      en: 'Frontend'
    },
    tags: ['HTML5', 'CSS3', 'GSAP', 'Responsive Design'],
    shortDescription: {
      id: 'Konsep landing page responsif untuk aplikasi seluler, difokuskan pada hierarki visual modern, animasi halus, dan pengalaman konversi yang optimal.',
      en: 'Responsive landing page concept for mobile applications, focusing on modern visual hierarchy, fluid animations, and high conversion UX.'
    },
    problemStatement: {
      id: 'Landing page produk harus mampu menarik perhatian audiens secara instan serta mengomunikasikan keunggulan aplikasi dengan performa muat yang cepat.',
      en: 'Product landing pages need to capture user interest immediately while conveying application benefits with smooth responsiveness.'
    },
    solutionNarrative: {
      id: 'Merancang halaman presentasi dengan tipografi presisi, bingkai mockup perangkat, akordeon fitur interaktif, dan koreografi animasi GSAP yang halus.',
      en: 'Crafted a presentation page featuring typography pacing, device mockup framing, interactive feature accordions, and subtle GSAP choreography.'
    },
    keyFeatures: {
      id: [
        'Animasi elemen berbasis scroll dan transisi masuk yang mulus',
        'Tata letak responsif lintas perangkat dengan breakpoint mobile-first',
        'Showcase fitur interaktif dan penjelasan manfaat produk',
        'Pemuatan aset ringan dengan optimasi performa tinggi'
      ],
      en: [
        'Scroll-triggered motion animations and element transitions',
        'Cross-device responsive layout with mobile-first breakpoints',
        'Interactive feature showcase and benefit breakdown',
        'Optimized lightweight asset delivery'
      ]
    },
    techStackDetailed: [
      {
        feature: {
          id: 'Koreografi Animasi & Scroll',
          en: 'Motion & Scroll Choreography'
        },
        tech: 'GSAP (GreenSock Animation Platform)',
        detail: {
          id: 'Menggerakkan transisi timeline yang dipicu oleh scroll untuk header dan kartu fitur.',
          en: 'Drives scroll-triggered timeline transitions for hero headers and feature items.'
        }
      },
      {
        feature: {
          id: 'Tata Letak Semantik & Styling',
          en: 'Semantic Layout & Styling'
        },
        tech: 'HTML5 & Modern CSS3 Grid/Flexbox',
        detail: {
          id: 'Struktur semantik bersih dengan tipografi fluid clamp dan jarak proporsional.',
          en: 'Clean semantic structure with responsive clamp typography and fluid spacing.'
        }
      }
    ],
    technologies: ['HTML5', 'CSS3', 'GSAP'],
    architectureSummary: {
      id: 'Landing page statis berkinerja tinggi dengan akselerasi GPU untuk sekuens animasi visual.',
      en: 'High-performance static frontend landing page with GPU-accelerated motion sequences.'
    },
    previewType: 'code',
    status: {
      id: 'Selesai',
      en: 'Completed'
    }
  },
  {
    id: 'chatbot-customer-service',
    title: 'Chatbot Customer Service',
    category: 'AI',
    categoryLabel: {
      id: 'AI & Bot',
      en: 'AI & Bots'
    },
    tags: ['Python', 'Flask', 'NLP', 'Rule-Based Engine'],
    shortDescription: {
      id: 'Konsep chatbot layanan pelanggan otomatis yang dibangun dengan Python dan Flask, memanfaatkan pencocokan pola dan pemrosesan bahasa alami (NLP) untuk menjawab pertanyaan pengguna.',
      en: 'Automated customer service chatbot concept built with Python and Flask, utilizing pattern matching and NLP to answer user inquiries.'
    },
    problemStatement: {
      id: 'Menjawab pertanyaan pelanggan yang berulang secara manual menghabiskan waktu tim dukungan dan memperlambat kecepatan respons.',
      en: 'Handling repetitive customer questions manually takes valuable support time and slows down response turnaround.'
    },
    solutionNarrative: {
      id: 'Mengimplementasikan layanan mikro percakapan ringan yang menggabungkan tokenisasi kata, kamus pengenalan maksud (intent), dan respons dinamis API Flask.',
      en: 'Implemented a lightweight conversational micro-service combining tokenization, intent recognition dictionaries, and dynamic Flask API responses.'
    },
    keyFeatures: {
      id: [
        'Logika tokenisasi kata kunci dan pengenalan intent pertanyaan',
        'Pangkalan pengetahuan (knowledge base) yang dapat dikonfigurasi untuk topik umum',
        'Endpoint penanganan pesan RESTful (/api/chat)',
        'Antarmuka obrolan bersih dengan penandaan waktu dan status mengetik'
      ],
      en: [
        'Intent recognition and keyword tokenization logic',
        'Configurable response knowledge base for frequently asked topics',
        'RESTful message handling endpoint (/api/chat)',
        'Clean chat message interface with real-time response rendering'
      ]
    },
    techStackDetailed: [
      {
        feature: {
          id: 'Mesin Intent & NLP',
          en: 'Intent & NLP Engine'
        },
        tech: 'Python NLP Utilities & Tokenizers',
        detail: {
          id: 'Memproses teks kueri masuk, mengekstrak token intent, dan memetakan ke respons terdekat.',
          en: 'Processes incoming text queries, extracts intent tokens, and maps to closest response patterns.'
        }
      },
      {
        feature: {
          id: 'API Layanan Chat',
          en: 'Chat Service API'
        },
        tech: 'Flask Web Framework',
        detail: {
          id: 'Menerima pesan POST, menjalankan pipeline intent, dan mengembalikan jawaban format JSON.',
          en: 'Receives POST messages, executes intent pipeline, and returns JSON formatted replies.'
        }
      },
      {
        feature: {
          id: 'Antarmuka Chat Klien',
          en: 'Chat Interface UI'
        },
        tech: 'JavaScript & CSS',
        detail: {
          id: 'Merender gelembung pesan percakapan dengan stempel waktu dan animasi mengetik.',
          en: 'Renders conversational message bubbles with timestamping and typing state indicator.'
        }
      }
    ],
    technologies: ['Python', 'Flask', 'NLP'],
    architectureSummary: {
      id: 'REST API Flask yang memproses pesan percakapan masuk melalui parser intent pencocokan pola.',
      en: 'Flask REST API processing inbound chat messages through a pattern-matching intent parser.'
    },
    previewType: 'terminal',
    status: {
      id: 'Konsep / Prototipe',
      en: 'Concept / Prototype'
    }
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'poliwangi',
    institution: 'Politeknik Negeri Banyuwangi',
    department: {
      id: 'Bisnis dan Informatika',
      en: 'Business and Informatics'
    },
    program: {
      id: 'Teknologi Rekayasa Komputer (TRK)',
      en: 'Computer Engineering Technology (TRK)'
    },
    status: {
      id: 'Mahasiswa Aktif',
      en: 'Active Student'
    },
    description: {
      id: 'Melanjutkan eksplorasi teknologi melalui Rekayasa Komputer—mendalami rekayasa perangkat lunak, arsitektur web modern, sistem komputer terapan, basis data relasional, jaringan tingkat lanjut, dan teknologi digital terapan.',
      en: 'Continuing my technology journey through Computer Engineering—delving deep into software engineering, web architectures, computer systems, databases, networking, and applied digital technologies.'
    },
    focusAreas: {
      id: [
        'Pemrograman & Rekayasa Perangkat Lunak',
        'Arsitektur Web & Full Stack Modern',
        'Basis Data Relasional & Pemodelan SQL',
        'Sistem Komputer & Logika Perangkat Keras',
        'Protokol Jaringan Lanjutan',
        'Desain UI/UX & Sistem Interaktif',
        'Pemecahan Masalah Algoritmik'
      ],
      en: [
        'Programming & Software Engineering',
        'Web & Full Stack Architecture',
        'Relational Databases & SQL Modeling',
        'Computer Systems & Hardware Logic',
        'Advanced Networking & Protocols',
        'UI/UX & Interactive Design Systems',
        'Algorithmic Problem Solving'
      ]
    },
    highlights: {
      id: [
        'Fokus pada pengembangan full stack dan arsitektur aplikasi web modern',
        'Menjembatani sistem komputer fisik dengan ekosistem perangkat lunak web',
        'Membangun berbagai proyek nyata di bidang frontend, backend, dan monitoring jaringan'
      ],
      en: [
        'Focusing on full stack development and modern application architecture',
        'Bridging physical computer systems with web software ecosystems',
        'Building hands-on projects across frontend, backend, and network monitoring'
      ]
    },
    type: 'higher_education'
  },
  {
    id: 'smkn1bwi',
    institution: 'SMK Negeri 1 Banyuwangi',
    department: {
      id: 'Teknik Komputer dan Informatika',
      en: 'Computer Engineering and Informatics'
    },
    program: {
      id: 'Teknik Jaringan Komputer dan Telekomunikasi (TJKT)',
      en: 'Computer Network and Telecommunication Engineering (TJKT)'
    },
    status: {
      id: 'Alumni / Lulusan',
      en: 'Alumni / Graduate'
    },
    description: {
      id: 'Membangun fondasi kuat dalam infrastruktur jaringan komputer, telekomunikasi, administrasi sistem Linux, dan konfigurasi perangkat keras TI.',
      en: 'Built a strong fundamental grounding in computer networking, telecommunications, Linux systems administration, and IT infrastructure configuration.'
    },
    focusAreas: {
      id: [
        'Fondasi Protokol Jaringan Komputer',
        'Konfigurasi MikroTik RouterOS',
        'Routing & Switching Cisco',
        'Administrasi Server Linux',
        'Protokol TCP/IP & Subnetting IPv4',
        'Troubleshooting Perangkat Keras & TI',
        'Infrastruktur Pengkabelan Jaringan'
      ],
      en: [
        'Computer Networking Fundamentals',
        'MikroTik RouterOS Configuration',
        'Cisco Networking & Routing',
        'Linux Server Administration',
        'TCP/IP Protocols & Subnetting',
        'Hardware & IT Troubleshooting',
        'Network Cable Infrastructure'
      ]
    },
    highlights: {
      id: [
        'Menguasai perhitungan subnetting (CIDR, VLSM) dan protokol routing',
        'Praktik lab langsung konfigurasi perangkat MikroTik dan switching Cisco',
        'Katalis awal yang menyalakan antusiasme terhadap kode dan sistem digital'
      ],
      en: [
        'Mastered subnetting (CIDR, VLSM) and routing protocols',
        'Hands-on lab experience with MikroTik and Cisco packet switching',
        'Foundational catalyst that sparked passion for code and digital systems'
      ]
    },
    type: 'vocational'
  }
];

export const SKILLS_DATA: SkillCategoryItem[] = [
  {
    id: 'frontend',
    title: {
      id: 'Pengembangan Frontend',
      en: 'Frontend Development'
    },
    description: {
      id: 'Merancang antarmuka pengguna yang responsif, terstruktur, dan berkinerja tinggi menggunakan ekosistem komponen modern.',
      en: 'Crafting responsive, accessible, and high-performance user interfaces with modern component ecosystems.'
    },
    skills: [
      { name: 'HTML5', focus: { id: 'Markup semantik, aksesibilitas, dan struktur SEO', en: 'Semantic markup, accessibility, SEO structure' } },
      { name: 'CSS3', focus: { id: 'Flexbox, Grid, custom properties, dan animasi fluid', en: 'Flexbox, Grid, custom properties, animations' } },
      { name: 'JavaScript (ES6+)', focus: { id: 'Async/await, API DOM modern, dan logika modular', en: 'Async/await, DOM APIs, modern syntax' } },
      { name: 'TypeScript', focus: { id: 'Static typing, interface, dan pengembangan type-safe', en: 'Static typing, interfaces, type-safe development' } },
      { name: 'React', focus: { id: 'Hooks, arsitektur komponen, dan manajemen state', en: 'Hooks, component architecture, state management' } },
      { name: 'Next.js', focus: { id: 'Server-side rendering, routing, dan React full-stack', en: 'Server-side rendering, routing, full-stack React' } },
      { name: 'Tailwind CSS', focus: { id: 'Utility-first styling, token desain, dan antarmuka responsif', en: 'Utility-first styling, design tokens, responsive UI' } }
    ]
  },
  {
    id: 'backend',
    title: {
      id: 'Pengembangan Backend',
      en: 'Backend Development'
    },
    description: {
      id: 'Membangun RESTful API, penanganan logika bisnis, routing server, dan layanan mikro yang aman.',
      en: 'Building RESTful APIs, business logic handlers, server routing, and microservices.'
    },
    skills: [
      { name: 'Node.js', focus: { id: 'Lingkungan runtime asinkron berbasis event', en: 'Event-driven asynchronous runtime environments' } },
      { name: 'Express', focus: { id: 'Routing REST API, middleware, dan payload JSON', en: 'REST API routing, middleware, JSON payloads' } },
      { name: 'PHP', focus: { id: 'Scripting server-side, pola MVC, dan manajemen sesi', en: 'Server-side web scripting, MVC patterns, sessions' } },
      { name: 'Laravel', focus: { id: 'Framework PHP modern, Eloquent ORM, dan Blade', en: 'Modern PHP framework, Eloquent ORM, Blade' } },
      { name: 'Python', focus: { id: 'Skrip otomasi, layanan backend, dan logika data', en: 'Automation scripts, backend services, data logic' } },
      { name: 'Flask', focus: { id: 'Micro-framework ringan untuk API dan utilitas', en: 'Lightweight micro-framework for APIs and tools' } }
    ]
  },
  {
    id: 'database',
    title: {
      id: 'Basis Data & Penyimpanan',
      en: 'Database & Storage'
    },
    description: {
      id: 'Merancang skema relasional, operasi CRUD terindeks, dan pengelolaan penyimpanan data cloud.',
      en: 'Designing relational schemas, performing CRUD operations, and managing cloud data stores.'
    },
    skills: [
      { name: 'MySQL', focus: { id: 'Desain skema relasional, kueri terstruktur, dan foreign keys', en: 'Relational schema design, queries, foreign keys' } },
      { name: 'PostgreSQL', focus: { id: 'Kueri relasional lanjutan, indexing, dan integritas data', en: 'Advanced relational queries, indexing, data integrity' } },
      { name: 'Supabase', focus: { id: 'PostgreSQL-as-a-service, langganan data real-time', en: 'PostgreSQL-as-a-service, real-time subscriptions' } },
      { name: 'Firebase', focus: { id: 'Firestore berbasis dokumen dan sinkronisasi real-time', en: 'Document-based Firestore, real-time sync' } }
    ]
  },
  {
    id: 'uiux',
    title: {
      id: 'Desain UI / UX',
      en: 'UI / UX Design'
    },
    description: {
      id: 'Merancang pengalaman pengguna yang intuitif, hierarki visual berkarakter, dan alur interaksi yang halus.',
      en: 'Designing intuitive user experiences, refined visual hierarchies, and polished interactive flows.'
    },
    skills: [
      { name: 'Figma', focus: { id: 'Wireframing, prototipe tata letak UI, dan sistem desain', en: 'Wireframing, UI layout prototypes, design systems' } },
      { name: 'Responsive Design', focus: { id: 'Tata letak grid fluid dan breakpoint multi-perangkat', en: 'Fluid grid layouts, multi-device breakpoints' } },
      { name: 'Modern UI Architecture', focus: { id: 'Tipografi proporsional, rasio kontras, dan tema gelap/terang', en: 'Clean typography, contrast math, dark/light themes' } },
      { name: 'Glass & Surface Design', focus: { id: 'Lapisan permukaan tembus pandang dan elevasi visual', en: 'Subtle translucent layers, layered elevation' } },
      { name: 'User Experience (UX)', focus: { id: 'Alur navigasi intuitif dan mikro-interaksi mikro', en: 'Intuitive navigation flow, micro-interactions' } }
    ]
  },
  {
    id: 'networking',
    title: {
      id: 'Jaringan & Infrastruktur',
      en: 'Networking & Infrastructure'
    },
    description: {
      id: 'Pemahaman mendalam tentang topologi jaringan, protokol routing, subnetting biner, dan administrasi Linux.',
      en: 'Deep grounding in network topologies, routing protocols, subnetting, and Linux administration.'
    },
    skills: [
      { name: 'MikroTik', focus: { id: 'Konfigurasi RouterOS, firewall NAT, dan antrean bandwidth', en: 'RouterOS configuration, firewall NAT, bandwidth queues' } },
      { name: 'Cisco', focus: { id: 'VLAN, protokol routing, dan konfigurasi switch', en: 'VLANs, routing protocols, switch configurations' } },
      { name: 'Linux', focus: { id: 'Administrasi CLI, bash scripting, dan utilitas server', en: 'CLI administration, bash scripting, server tools' } },
      { name: 'TCP/IP', focus: { id: 'Stack protokol, analisis paket, dan alur handshake', en: 'Protocol stack, packet analysis, handshake flow' } },
      { name: 'Subnetting & CIDR', focus: { id: 'Pengalamatan IP, VLSM, dan kalkulasi subnet biner 32-bit', en: 'IP addressing, VLSM, binary subnet calculation' } },
      { name: 'Network Configuration', focus: { id: 'Pengaturan DHCP, DNS, Gateway, dan routing tabel', en: 'DHCP, DNS, Gateway, routing table setups' } }
    ]
  }
];

export const COMPETITIVE_GAMES_DATA: CompetitiveGameItem[] = [
  {
    id: 'mlbb',
    gameName: 'Mobile Legends: Bang Bang',
    shortName: 'MLBB',
    rankTitle: 'IMMORTAL 100+ STARS',
    tierTag: 'Mythical Immortal (Top 0.1%)',
    themeColor: '#f59e0b',
    iconUrl: '/images/games/mlbb.png',
    description: {
      id: 'Mencapai peringkat prestisius Immortal (100+ Bintang) di Mobile Legends: Bang Bang. Menuntut penguasaan strategi makro mendalam, penentuan tempo objektif (Lord/Turtle), drafting counter-pick sinergis, dan eksekusi mikro berkecepatan tinggi.',
      en: 'Achieved the prestigious Immortal Rank (100+ Stars) in Mobile Legends: Bang Bang. Demands deep macro-strategy, objective tempo control, drafting synergy, and high-speed mechanical execution under pressure.'
    },
    strategicFocus: {
      id: 'Macro Map Rotation & Teamfight Shot-calling',
      en: 'Macro Map Rotation & Teamfight Shot-calling'
    },
    keyStats: {
      id: '100+ Stars • Top 0.1% Global Tier',
      en: '100+ Stars • Top 0.1% Global Tier'
    }
  },
  {
    id: 'freefire',
    gameName: 'Garena Free Fire',
    shortName: 'Free Fire',
    rankTitle: 'GRANDMASTER TIER',
    tierTag: 'Grandmaster (Puncak Kompetitif)',
    themeColor: '#ef4444',
    iconUrl: '/images/games/freefire.png',
    description: {
      id: 'Meraih tier tertinggi Grandmaster di Free Fire. Menguji reflek cepat, manajemen timing zona aman, penempatan posisi defensif/ofensif yang presisi, serta daya tahan clutch di situasi kritis.',
      en: 'Attained the pinnacle Grandmaster tier in Free Fire. Tests rapid reflexes, safe-zone rotation timing, offensive positioning precision, and high-stakes clutch survivability.'
    },
    strategicFocus: {
      id: 'Zone Pacing & High-Speed Reflex Positioning',
      en: 'Zone Pacing & High-Speed Reflex Positioning'
    },
    keyStats: {
      id: 'Grandmaster Badge • Peak Leaderboard Tier',
      en: 'Grandmaster Badge • Peak Leaderboard Tier'
    }
  },
  {
    id: 'pubgm',
    gameName: 'PUBG Mobile',
    shortName: 'PUBG Mobile',
    rankTitle: 'CONQUEROR TIER',
    tierTag: 'Conqueror (Top 500 Regional)',
    themeColor: '#eab308',
    iconUrl: '/images/games/pubgm.png',
    description: {
      id: 'Mencapai gelar legendaris Conqueror di PUBG Mobile (Top 500 pemain di server). Memerlukan kepekaan audio spasial tingkat tinggi, disiplin kontrol recoil, rotasi kendaraan lintas medan berat, dan pengambilan compound di late-circle.',
      en: 'Reached the legendary Conqueror title in PUBG Mobile (Top 500 players regional). Requires hyper-accurate spatial sound recognition, recoil discipline, vehicular terrain rotations, and late-circle compound fortifications.'
    },
    strategicFocus: {
      id: 'Spatial Awareness & Tactical Compound Control',
      en: 'Spatial Awareness & Tactical Compound Control'
    },
    keyStats: {
      id: 'Top 500 Server • Tactical Conqueror Frame',
      en: 'Top 500 Server • Tactical Conqueror Frame'
    }
  },
  {
    id: 'hok',
    gameName: 'Honor of Kings',
    shortName: 'Honor of Kings (HOK)',
    rankTitle: 'GRANDMASTER TIER',
    tierTag: 'Grandmaster Tier (Peringkat Elit)',
    themeColor: '#3b82f6',
    iconUrl: '/images/games/hok.png',
    description: {
      id: 'Meraih peringkat prestisius Grandmaster di Honor of Kings (HOK). Menekankan efisiensi alokasi gold/resource, penguasaan tempo lane, pemanfaatan skill timing mikroskopis, dan koordinasi teamfight skala besar.',
      en: 'Reached the elite Grandmaster rank in Honor of Kings (HOK). Emphasizes resource and gold scaling efficiency, lane tempo dominance, millisecond skill timing, and coordinated large-scale teamfights.'
    },
    strategicFocus: {
      id: 'Economy Scaling & Millisecond Skill Precision',
      en: 'Economy Scaling & Millisecond Skill Precision'
    },
    keyStats: {
      id: 'Grandmaster Tier • High APM Strategy',
      en: 'Grandmaster Tier • High APM Strategy'
    }
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'esports-strategic-mastery',
    title: 'COMPETITIVE STRATEGIC MASTERY',
    subTitle: 'MLBB Immortal • FF Grandmaster • PUBG Conqueror • HOK Grandmaster',
    category: {
      id: 'Milestone Kompetitif & Strategi Makro',
      en: 'Competitive & Macro Strategic Milestone'
    },
    description: {
      id: 'Penguasaan tingkat tinggi lintas 4 arena kompetitif utama (Mobile Legends: Bang Bang Immortal 100+ Stars, Garena Free Fire Grandmaster, PUBG Mobile Conqueror, dan Honor of Kings Grandmaster). Setiap game mengasah ketajaman analitis: alokasi sumber daya di bawah tekanan, spatial awareness, dan eksekusi konsisten tanpa panik.',
      en: 'Peak competitive mastery across 4 major esports titles (MLBB Immortal 100+ Stars, Free Fire Grandmaster, PUBG Mobile Conqueror, and Honor of Kings Grandmaster). Each title sharpens analytical rigor: resource allocation under pressure, spatial awareness, and panic-free execution.'
    },
    badge: '4x APEX COMPETITIVE RANKS',
    milestoneKey: {
      id: 'Penguasaan Multi-Game Elit',
      en: 'Multi-Game Elite Mastery'
    },
    keyTakeaways: {
      id: [
        'Pengambilan keputusan analitis di bawah tekanan tinggi dan pembacaan pola makro lawan secara real-time.',
        'Sinergi komunikasi tim, spesialisasi peran, dan adaptasi berkelanjutan terhadap perubahan dinamika sistem.',
        'Disiplin, konsistensi mental, dan fokus tinggi selama proses grinding panjang mencapai puncak rank leaderboard.'
      ],
      en: [
        'High-pressure analytical decision making and real-time macro pattern recognition.',
        'Team communication synergy, role specialization, and rapid adaptation to system dynamics.',
        'Mental discipline, consistency, and relentless focus during high-tier leaderboard climbs.'
      ]
    }
  }
];

export const TECH_STACK_GROUPS: TechStackGroup[] = [
  {
    category: {
      id: 'Bahasa Pemrograman',
      en: 'Development Languages'
    },
    description: {
      id: 'Bahasa pemrograman inti yang digunakan untuk antarmuka, backend, dan otomasi.',
      en: 'Core programming languages used across frontend, backend, and system scripts.'
    },
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'PHP', 'Python']
  },
  {
    category: {
      id: 'Framework & Pustaka Frontend',
      en: 'Frontend Frameworks & Libraries'
    },
    description: {
      id: 'Alat untuk membangun pohon komponen reaktif, penataan gaya, dan animasi.',
      en: 'Tools for building reactive component trees, styling, and animations.'
    },
    items: ['React', 'Next.js', 'Tailwind CSS', 'GSAP', 'Motion']
  },
  {
    category: {
      id: 'Backend & Framework Server',
      en: 'Backend & Server Frameworks'
    },
    description: {
      id: 'Platform server dan framework mikro untuk routing serta pemrosesan data.',
      en: 'Server platforms and micro-frameworks for routing and data processing.'
    },
    items: ['Node.js', 'Express', 'Laravel', 'Flask']
  },
  {
    category: {
      id: 'Basis Data & Penyimpanan Cloud',
      en: 'Databases & Cloud Storage'
    },
    description: {
      id: 'Penyimpanan data relasional, manajemen kueri, dan sistem dokumen cloud.',
      en: 'Relational data stores, query management, and cloud document systems.'
    },
    items: ['MySQL', 'PostgreSQL', 'Supabase', 'Firebase']
  },
  {
    category: {
      id: 'Alat Pengembang & Alur Kerja',
      en: 'Developer Tools & Workflow'
    },
    description: {
      id: 'Kontrol versi, lingkungan editor kode, dan ruang kerja desain UI.',
      en: 'Version control, editor environments, and UI design workspaces.'
    },
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vite', 'Postman']
  },
  {
    category: {
      id: 'Jaringan & Infrastruktur TI',
      en: 'Networking & Infrastructure'
    },
    description: {
      id: 'Perangkat keras jaringan, sistem operasi router, dan protokol komunikasi.',
      en: 'Hardware, routing operating systems, and network protocols.'
    },
    items: ['MikroTik RouterOS', 'Cisco Packet Tracer', 'Linux (Ubuntu/Debian)', 'TCP/IP', 'SNMP']
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    phase: '01',
    title: {
      id: 'Siswa TJKT — SMK Negeri 1 Banyuwangi',
      en: 'TJKT Student — SMK Negeri 1 Banyuwangi'
    },
    focus: {
      id: 'Fondasi Jaringan Komputer',
      en: 'Networking Foundation'
    },
    narrative: {
      id: 'Memulai perjalanan teknologi melalui kabel, router, switch, dan sistem operasi Linux. Mempelajari bagaimana internet bekerja dari subnetting biner hingga handshake paket TCP/IP.',
      en: 'Began exploring technology through cables, routers, switches, and Linux systems. Learned how the internet physically works from binary subnets to TCP/IP packet handshakes.'
    },
    technologies: ['MikroTik', 'Cisco', 'Linux', 'Subnetting', 'TCP/IP']
  },
  {
    phase: '02',
    title: {
      id: 'Rasa Ingin Tahu Menyalakan Kode',
      en: 'Curiosity Sparks Code'
    },
    focus: {
      id: 'Eksplorasi Web Awal',
      en: 'First Web Experiments'
    },
    narrative: {
      id: 'Menyadari bahwa jaringan fisik baru terasa hidup saat ada perangkat lunak di atasnya. Mulai menulis HTML, CSS, JavaScript, dan PHP untuk membangun perkakas web fungsional.',
      en: 'Discovered that networks are only half the equation—software brings them alive. Started writing HTML, CSS, JavaScript, and PHP to construct functional web tools and utilities.'
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']
  },
  {
    phase: '03',
    title: {
      id: 'Evolusi ke Rekayasa Full-Stack',
      en: 'Full Stack Exploration'
    },
    focus: {
      id: 'Web Modern & Sistem Terintegrasi',
      en: 'Modern Web & Systems'
    },
    narrative: {
      id: 'Berkembang dari sekadar skrip sederhana ke arsitektur full-stack. Mendalami React, Next.js, Node.js, dan basis data relasional seperti PostgreSQL untuk membangun dasbor interaktif.',
      en: 'Evolved from simple scripts to full-stack ecosystems. Dove into React, Next.js, Node.js, and relational databases like PostgreSQL, building interactive dashboards and tools.'
    },
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    phase: '04',
    title: {
      id: 'Mahasiswa Rekayasa Komputer — Poliwangi',
      en: 'Computer Engineering — Politeknik Negeri Banyuwangi'
    },
    focus: {
      id: 'Teknologi Rekayasa Komputer (TRK)',
      en: 'Teknologi Rekayasa Komputer'
    },
    narrative: {
      id: 'Meningkatkan kompetensi akademis di jenjang Sarjana Terapan TRK. Mengintegrasikan prinsip rekayasa komputer, sistem digital, basis data, dan pengembangan perangkat lunak terapan.',
      en: 'Currently leveling up as a university student in TRK. Combining rigorous engineering principles, computer systems, databases, and modern software development.'
    },
    technologies: ['Kurikulum TRK', 'Arsitektur Software', 'Basis Data', 'Sistem Terapan']
  },
  {
    phase: '05',
    title: {
      id: 'Membangun & Bereksplorasi Tanpa Henti',
      en: 'Continuously Building & Exploring'
    },
    focus: {
      id: 'Siklus Pembelajaran Berkelanjutan',
      en: 'The Never-Ending Loop'
    },
    narrative: {
      id: 'Kode, rasa penasaran, dan semangat membangun solusi nyata. Terus merilis perkakas pengembang, aplikasi digital, dan mengeksplorasi teknologi baru secara konsisten.',
      en: 'Code, curiosity, and a lot of things to build. Continuously shipping developer tools, digital platforms, and experimenting with new technologies every single week.'
    },
    technologies: ['Full Stack', 'Rekayasa Software', 'Continuous Learning']
  }
];
