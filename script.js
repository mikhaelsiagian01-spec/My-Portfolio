/* ===========================================
   Portfolio JavaScript
   Handles: Theme Toggle, Language Switcher, 
   Scroll Animations, Mobile Menu
   =========================================== */

// ===========================================
// Language Translations
// ===========================================
const translations = {
    id: {
        // Navigation
        'Beranda': 'Beranda',
        'Tentang': 'Tentang',
        'Keahlian': 'Keahlian',
        'Sertifikasi': 'Sertifikasi',
        'Proyek': 'Proyek',
        
        // Hero Section
        'Tersedia untuk PKL': 'Tersedia untuk PKL',
        'Halo, Saya': 'Halo, Saya',
        'Mahasiswa Teknik Informatika BINUS University dengan passion dalam Software Engineering dan pengembangan solusi teknologi inovatif.': 'Mahasiswa Teknik Informatika BINUS University dengan passion dalam Software Engineering dan pengembangan solusi teknologi inovatif.',
        'Lihat Proyek Saya': 'Lihat Proyek Saya',
        'Tentang Saya': 'Tentang Saya',
        'Tahun Lulus': 'Tahun Lulus',
        'Jurusan': 'Jurusan',
        'Peminatan': 'Peminatan',
        
        // About Section
        'Perkenalan': 'Perkenalan',
        'Saya adalah mahasiswa Computer Science dengan peminatan Software Engineering di BINUS University, angkatan 2026. Saya memiliki antusiasme tinggi dalam mengembangkan aplikasi berbasis web dan mobile yang memberikan dampak positif bagi pengguna.': 'Saya adalah mahasiswa Computer Science dengan peminatan Software Engineering di BINUS University, angkatan 2026. Saya memiliki antusiasme tinggi dalam mengembangkan aplikasi berbasis web dan mobile yang memberikan dampak positif bagi pengguna.',
        'Latar Belakang Pendidikan': 'Latar Belakang Pendidikan',
        'Computer Science - Software Engineering': 'Computer Science - Software Engineering',
        'Tujuan & Motivasi PKL': 'Tujuan & Motivasi PKL',
        'Melalui program PKL, saya ingin mengaplikasikan pengetahuan teoritis yang telah saya pelajari ke dalam pengalaman praktis di industri. Saya bersemangat untuk berkontribusi dalam tim profesional, mempelajari best practices dalam software development, dan mengembangkan kemampuan problem-solving saya melalui proyek-proyek nyata yang menantang.': 'Melalui program PKL, saya ingin mengaplikasikan pengetahuan teoritis yang telah saya pelajari ke dalam pengalaman praktis di industri. Saya bersemangat untuk berkontribusi dalam tim profesional, mempelajari best practices dalam software development, dan mengembangkan kemampuan problem-solving saya melalui proyek-proyek nyata yang menantang.',
        'Mahasiswa Computer Science': 'Mahasiswa Computer Science',
        
        // Skills Section
        'Keahlian Saya': 'Keahlian Saya',
        'Keahlian Teknis': 'Keahlian Teknis',
        'Soft Skills': 'Soft Skills',
        'Kerja Tim': 'Kerja Tim',
        'Problem Solving': 'Problem Solving',
        'Komunikasi': 'Komunikasi',
        'Adaptabilitas': 'Adaptabilitas',
        
        // Certifications Section
        'Sertifikasi & Pelatihan': 'Sertifikasi & Pelatihan',
        'Full Stack Web Development': 'Full Stack Web Development',
        'Dicoding Indonesia': 'Dicoding Indonesia',
        'Python Programming Fundamentals': 'Python Programming Fundamentals',
        'Database Design & Management': 'Database Design & Management',
        'UI/UX Design Principles': 'UI/UX Design Principles',
        'Cloud Computing Basics': 'Cloud Computing Basics',
        'Agile & Scrum Methodology': 'Agile & Scrum Methodology',
        
        // Projects Section
        'Proyek & Karya': 'Proyek & Karya',
        'Lihat Detail': 'Lihat Detail',
        'E-Commerce Platform': 'E-Commerce Platform',
        'Platform e-commerce full-stack dengan fitur keranjang belanja, pembayaran, dan manajemen produk.': 'Platform e-commerce full-stack dengan fitur keranjang belanja, pembayaran, dan manajemen produk.',
        'Task Management App': 'Task Management App',
        'Aplikasi manajemen tugas berbasis web dengan fitur kolaborasi tim dan notifikasi real-time.': 'Aplikasi manajemen tugas berbasis web dengan fitur kolaborasi tim dan notifikasi real-time.',
        'Game Portal Website': 'Game Portal Website',
        'Portal game online dengan sistem rating, review, dan rekomendasi game berbasis AI.': 'Portal game online dengan sistem rating, review, dan rekomendasi game berbasis AI.',
        'Healthcare Appointment System': 'Healthcare Appointment System',
        'Sistem appointment rumah sakit dengan jadwal dokter dan riwayat medis pasien.': 'Sistem appointment rumah sakit dengan jadwal dokter dan riwayat medis pasien.',
        
        // Footer
        'Mahasiswa Computer Science - Software Engineering': 'Mahasiswa Computer Science - Software Engineering',
        '© 2026 Mikhael Victor Siagian. Semua hak dilindungi.': '© 2026 Mikhael Victor Siagian. Semua hak dilindungi.'
    },
    en: {
        // Navigation
        'Beranda': 'Home',
        'Tentang': 'About',
        'Keahlian': 'Skills',
        'Sertifikasi': 'Certifications',
        'Proyek': 'Projects',
        
        // Hero Section
        'Tersedia untuk PKL': 'Available for Internship',
        'Halo, Saya': 'Hello, I\'m',
        'Mahasiswa Teknik Informatika BINUS University dengan passion dalam Software Engineering dan pengembangan solusi teknologi inovatif.': 'Computer Science student at BINUS University with a passion for Software Engineering and developing innovative technology solutions.',
        'Lihat Proyek Saya': 'View My Projects',
        'Tentang Saya': 'About Me',
        'Tahun Lulus': 'Graduation Year',
        'Jurusan': 'Major',
        'Peminatan': 'Specialization',
        
        // About Section
        'Perkenalan': 'Introduction',
        'Saya adalah mahasiswa Computer Science dengan peminatan Software Engineering di BINUS University, angkatan 2026. Saya memiliki antusiasme tinggi dalam mengembangkan aplikasi berbasis web dan mobile yang memberikan dampak positif bagi pengguna.': 'I am a Computer Science student specializing in Software Engineering at BINUS University, class of 2026. I have a strong enthusiasm for developing web and mobile applications that make a positive impact on users.',
        'Latar Belakang Pendidikan': 'Educational Background',
        'Computer Science - Software Engineering': 'Computer Science - Software Engineering',
        'Tujuan & Motivasi PKL': 'Internship Goals & Motivation',
        'Melalui program PKL, saya ingin mengaplikasikan pengetahuan teoritis yang telah saya pelajari ke dalam pengalaman praktis di industri. Saya bersemangat untuk berkontribusi dalam tim profesional, mempelajari best practices dalam software development, dan mengembangkan kemampuan problem-solving saya melalui proyek-proyek nyata yang menantang.': 'Through the internship program, I aim to apply the theoretical knowledge I\'ve learned into practical industry experience. I\'m eager to contribute to professional teams, learn best practices in software development, and enhance my problem-solving abilities through challenging real-world projects.',
        'Mahasiswa Computer Science': 'Computer Science Student',
        
        // Skills Section
        'Keahlian Saya': 'My Skills',
        'Keahlian Teknis': 'Technical Skills',
        'Soft Skills': 'Soft Skills',
        'Kerja Tim': 'Teamwork',
        'Problem Solving': 'Problem Solving',
        'Komunikasi': 'Communication',
        'Adaptabilitas': 'Adaptability',
        
        // Certifications Section
        'Sertifikasi & Pelatihan': 'Certifications & Training',
        'Full Stack Web Development': 'Full Stack Web Development',
        'Dicoding Indonesia': 'Dicoding Indonesia',
        'Python Programming Fundamentals': 'Python Programming Fundamentals',
        'Database Design & Management': 'Database Design & Management',
        'UI/UX Design Principles': 'UI/UX Design Principles',
        'Cloud Computing Basics': 'Cloud Computing Basics',
        'Agile & Scrum Methodology': 'Agile & Scrum Methodology',
        
        // Projects Section
        'Proyek & Karya': 'Projects & Works',
        'Lihat Detail': 'View Details',
        'E-Commerce Platform': 'E-Commerce Platform',
        'Platform e-commerce full-stack dengan fitur keranjang belanja, pembayaran, dan manajemen produk.': 'Full-stack e-commerce platform with shopping cart, payment, and product management features.',
        'Task Management App': 'Task Management App',
        'Aplikasi manajemen tugas berbasis web dengan fitur kolaborasi tim dan notifikasi real-time.': 'Web-based task management app with team collaboration and real-time notifications.',
        'Game Portal Website': 'Game Portal Website',
        'Portal game online dengan sistem rating, review, dan rekomendasi game berbasis AI.': 'Online game portal with rating system, reviews, and AI-based game recommendations.',
        'Healthcare Appointment System': 'Healthcare Appointment System',
        'Sistem appointment rumah sakit dengan jadwal dokter dan riwayat medis pasien.': 'Hospital appointment system with doctor schedules and patient medical records.',
        
        // Footer
        'Mahasiswa Computer Science - Software Engineering': 'Computer Science Student - Software Engineering',
        '© 2026 Mikhael Victor Siagian. Semua hak dilindungi.': '© 2026 Mikhael Victor Siagian. All rights reserved.'
    }
};

// ===========================================
// State Management
// ===========================================
let currentLang = localStorage.getItem('language') || 'id';
let currentTheme = localStorage.getItem('theme') || 'light';

// Typing animation state
let typingTimeout;
const nameToType = "Mikhael Victor Siagian";

// ===========================================
// Initialize on Page Load
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Initialize language
    initLanguage();
    
    // Start typing animation
    startTypingAnimation();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Add event listeners
    addEventListeners();
});

// ===========================================
// Typing Animation
// ===========================================
function startTypingAnimation() {
    const typedTextElement = document.querySelector('.typed-text');
    const cursorElement = document.querySelector('.typing-cursor');
    
    if (!typedTextElement) return;
    
    let charIndex = 0;
    const typingSpeed = 100; // milliseconds per character
    const startDelay = 500; // delay before starting to type
    
    // Clear any existing content
    typedTextElement.textContent = '';
    
    function typeCharacter() {
        if (charIndex < nameToType.length) {
            typedTextElement.textContent += nameToType.charAt(charIndex);
            charIndex++;
            typingTimeout = setTimeout(typeCharacter, typingSpeed);
        } else {
            // Typing complete - keep cursor blinking
            cursorElement.style.display = 'inline-block';
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeCharacter, startDelay);
}

// Function to restart typing animation (useful for language changes)
function restartTypingAnimation() {
    clearTimeout(typingTimeout);
    const typedTextElement = document.querySelector('.typed-text');
    if (typedTextElement) {
        typedTextElement.textContent = '';
        startTypingAnimation();
    }
}

// ===========================================
// Theme Management
// ===========================================
function initTheme() {
    document.body.setAttribute('data-theme', currentTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    // Add animation effect
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}

// ===========================================
// Language Management
// ===========================================
function initLanguage() {
    updateLanguage(currentLang);
}

function toggleLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    updateLanguage(currentLang);
    localStorage.setItem('language', currentLang);
    
    // Restart typing animation with smooth transition
    restartTypingAnimation();
}

function updateLanguage(lang) {
    // Update all elements with data-lang attributes
    const elements = document.querySelectorAll('[data-lang-id]');
    
    elements.forEach(element => {
        const idText = element.getAttribute('data-lang-id');
        const enText = element.getAttribute('data-lang-en');
        
        if (lang === 'id') {
            element.textContent = idText;
        } else {
            element.textContent = enText;
        }
    });
    
    // Update language toggle button
    const langToggle = document.getElementById('langToggle');
    const flagIcon = langToggle.querySelector('.flag-icon');
    const langText = langToggle.querySelector('.lang-text');
    
    if (lang === 'id') {
        flagIcon.textContent = '🇮🇩';
        langText.textContent = 'ID';
    } else {
        flagIcon.textContent = '🇬🇧';
        langText.textContent = 'EN';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// ===========================================
// Scroll Animations
// ===========================================
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.about-section, .skills-section, .certifications-section, .projects-section');
    
    revealElements.forEach(element => {
        element.classList.add('reveal');
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
    
    // Animate skill bars when visible
    const skillBars = document.querySelectorAll('.soft-skill-fill');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.width;
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// ===========================================
// Smooth Scroll
// ===========================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.nav-menu');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
}

// ===========================================
// Mobile Menu
// ===========================================
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 968) {
        navMenu.style.display = 'none';
    }
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    
    if (navMenu.style.display === 'none' || navMenu.style.display === '') {
        navMenu.style.display = 'flex';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'var(--bg-secondary)';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = '2rem';
        navMenu.style.boxShadow = 'var(--shadow-lg)';
        navMenu.style.borderRadius = '0 0 16px 16px';
        navMenu.classList.add('active');
        mobileMenuToggle.classList.add('active');
    } else {
        navMenu.style.display = 'none';
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
}

// ===========================================
// Navbar Scroll Effect
// ===========================================
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
        navbar.style.background = 'var(--bg-secondary)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }
}

// ===========================================
// Event Listeners
// ===========================================
function addEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
    
    // Language toggle
    const langToggle = document.getElementById('langToggle');
    langToggle.addEventListener('click', toggleLanguage);
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Scroll event for navbar
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Window resize event
    window.addEventListener('resize', function() {
        if (window.innerWidth > 968) {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.style.display = 'flex';
            navMenu.style.position = 'static';
            navMenu.style.flexDirection = 'row';
            navMenu.style.padding = '0';
            navMenu.style.boxShadow = 'none';
            navMenu.style.background = 'transparent';
        } else {
            const navMenu = document.querySelector('.nav-menu');
            if (!navMenu.classList.contains('active')) {
                navMenu.style.display = 'none';
            }
        }
    });
}

// ===========================================
// Typing Effect for Hero Title
// ===========================================
function typewriterEffect() {
    const nameElement = document.querySelector('.gradient-text');
    
    // Get the text based on current language
    const getCurrentNameText = () => {
        return currentLang === 'id' ? 'Mikhael Victor Siagian' : 'Mikhael Victor Siagian';
    };
    
    const originalText = getCurrentNameText();
    nameElement.textContent = '';
    nameElement.style.borderRight = '2px solid var(--accent-primary)';
    
    let i = 0;
    const speed = 100;
    
    function type() {
        if (i < originalText.length) {
            nameElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                nameElement.style.borderRight = 'none';
            }, 500);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 800);
}

// Enable typewriter effect on page load
window.addEventListener('load', typewriterEffect);

// Restart typing animation (for language changes)
function restartTypingAnimation() {
    const nameElement = document.querySelector('.gradient-text');
    if (nameElement) {
        // Simply show the full name instantly when language changes
        // to avoid repetitive typing animation
        nameElement.style.borderRight = 'none';
        nameElement.textContent = 'Mikhael Victor Siagian';
    }
}

// ===========================================
// Project Card Hover Effect Enhancement
// ===========================================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===========================================
// Certification Card Animation
// ===========================================
document.querySelectorAll('.cert-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ===========================================
// Console Welcome Message
// ===========================================
console.log('%c👋 Welcome to Mikhael Victor Siagian\'s Portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #0ea5e9; font-size: 14px;');
console.log('%cInterested in collaboration? Let\'s connect!', 'color: #1c2127; font-size: 14px;');