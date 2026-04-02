/**
 * ClawCommerce - Main JavaScript
 * Professional SaaS Platform
 */

'use strict';

// ===================================
// Language System
// ===================================
const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.features': 'المميزات',
    'nav.agents': 'وكلاء الذكاء الاصطناعي',
    'nav.pricing': 'الأسعار',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.login': 'تسجيل الدخول',
    'nav.signup': 'ابدأ مجاناً',
    
    // Hero
    'hero.badge': 'منصة SaaS الأكثر تطوراً',
    'hero.title': 'أدر متجرك الإلكتروني',
    'hero.title.highlight': 'بذكاء اصطناعي متقدم',
    'hero.description': 'ClawCommerce يوفر لك وكلاء ذكاء اصطناعي متخصصين لإدارة كل جانب من جوانب متجرك الإلكتروني - من المخزون والتسعير إلى خدمة العملاء والتسويق.',
    'hero.cta.primary': 'ابدأ تجربتك المجانية',
    'hero.cta.secondary': 'شاهد العرض التوضيحي',
    'hero.stat.stores': 'متجر نشط',
    'hero.stat.revenue': 'إيرادات محققة',
    'hero.stat.agents': 'وكيل ذكي',
    'hero.stat.uptime': 'وقت التشغيل',
    
    // Features
    'features.badge': 'المميزات',
    'features.title': 'كل ما تحتاجه لنجاح متجرك',
    'features.subtitle': 'منصة متكاملة تجمع أحدث تقنيات الذكاء الاصطناعي مع أدوات إدارة التجارة الإلكترونية',
    
    // Pricing
    'pricing.badge': 'الأسعار',
    'pricing.title': 'خطط مرنة لكل الأحجام',
    'pricing.subtitle': 'اختر الخطة المناسبة لحجم أعمالك مع إمكانية الترقية في أي وقت',
    'pricing.monthly': 'شهري',
    'pricing.yearly': 'سنوي',
    'pricing.save': 'وفر 20%',
    'pricing.cta': 'ابدأ الآن',
    'pricing.popular': 'الأكثر شيوعاً',
    
    // Testimonials
    'testimonials.badge': 'آراء العملاء',
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'آلاف التجار يثقون في ClawCommerce لإدارة متاجرهم',
    
    // FAQ
    'faq.badge': 'الأسئلة الشائعة',
    'faq.title': 'هل لديك أسئلة؟',
    'faq.subtitle': 'نجيب على أكثر الأسئلة شيوعاً حول منصتنا',
    
    // CTA
    'cta.title': 'جاهز لتحويل متجرك؟',
    'cta.subtitle': 'انضم إلى آلاف التجار الذين يستخدمون ClawCommerce لتنمية أعمالهم',
    'cta.primary': 'ابدأ مجاناً لمدة 14 يوم',
    'cta.secondary': 'تحدث مع فريق المبيعات',
    
    // Footer
    'footer.description': 'منصة SaaS متكاملة لإدارة المتاجر الإلكترونية باستخدام وكلاء الذكاء الاصطناعي المتخصصين.',
    'footer.product': 'المنتج',
    'footer.company': 'الشركة',
    'footer.support': 'الدعم',
    'footer.copyright': '© 2024 ClawCommerce. جميع الحقوق محفوظة.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.agents': 'AI Agents',
    'nav.pricing': 'Pricing',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.signup': 'Start Free',
    
    // Hero
    'hero.badge': 'Most Advanced SaaS Platform',
    'hero.title': 'Manage Your E-Commerce Store',
    'hero.title.highlight': 'With Advanced AI',
    'hero.description': 'ClawCommerce provides specialized AI agents to manage every aspect of your online store - from inventory and pricing to customer service and marketing.',
    'hero.cta.primary': 'Start Free Trial',
    'hero.cta.secondary': 'Watch Demo',
    'hero.stat.stores': 'Active Stores',
    'hero.stat.revenue': 'Revenue Generated',
    'hero.stat.agents': 'AI Agents',
    'hero.stat.uptime': 'Uptime',
    
    // Features
    'features.badge': 'Features',
    'features.title': 'Everything You Need to Succeed',
    'features.subtitle': 'An integrated platform combining the latest AI technologies with e-commerce management tools',
    
    // Pricing
    'pricing.badge': 'Pricing',
    'pricing.title': 'Flexible Plans for Every Size',
    'pricing.subtitle': 'Choose the right plan for your business size with the ability to upgrade anytime',
    'pricing.monthly': 'Monthly',
    'pricing.yearly': 'Yearly',
    'pricing.save': 'Save 20%',
    'pricing.cta': 'Get Started',
    'pricing.popular': 'Most Popular',
    
    // Testimonials
    'testimonials.badge': 'Testimonials',
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Thousands of merchants trust ClawCommerce to manage their stores',
    
    // FAQ
    'faq.badge': 'FAQ',
    'faq.title': 'Have Questions?',
    'faq.subtitle': 'We answer the most common questions about our platform',
    
    // CTA
    'cta.title': 'Ready to Transform Your Store?',
    'cta.subtitle': 'Join thousands of merchants using ClawCommerce to grow their business',
    'cta.primary': 'Start Free for 14 Days',
    'cta.secondary': 'Talk to Sales',
    
    // Footer
    'footer.description': 'An integrated SaaS platform for managing online stores using specialized AI agents.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.copyright': '© 2024 ClawCommerce. All rights reserved.',
  }
};

let currentLang = localStorage.getItem('clawcommerce-lang') || 'ar';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('clawcommerce-lang', lang);
  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-en', lang === 'en');
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// ===================================
// Navigation
// ===================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  
  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });
  
  // Mobile menu
  mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  
  mobileMenuClose?.addEventListener('click', () => {
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });
  
  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
  
  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
      
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        navLink?.classList.add('active');
      }
    });
  });
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// ===================================
// Counter Animation
// ===================================
function animateCounter(el, target, duration = 2000, suffix = '') {
  const start = 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * eased);
    
    el.textContent = current.toLocaleString('ar') + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString('ar') + suffix;
    }
  }
  
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const target = parseInt(entry.target.dataset.counter);
        const suffix = entry.target.dataset.suffix || '';
        animateCounter(entry.target, target, 2000, suffix);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

// ===================================
// Pricing Toggle
// ===================================
function initPricingToggle() {
  const toggle = document.getElementById('pricing-toggle');
  const prices = document.querySelectorAll('[data-monthly][data-yearly]');
  
  toggle?.addEventListener('change', () => {
    const isYearly = toggle.checked;
    prices.forEach(price => {
      const monthly = price.dataset.monthly;
      const yearly = price.dataset.yearly;
      price.textContent = isYearly ? yearly : monthly;
    });
    
    // Update period labels
    document.querySelectorAll('.pricing-period').forEach(period => {
      period.textContent = isYearly ? 
        (currentLang === 'ar' ? '/سنة' : '/year') : 
        (currentLang === 'ar' ? '/شهر' : '/month');
    });
  });
}

// ===================================
// FAQ Accordion
// ===================================
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      
      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ===================================
// Testimonials Slider
// ===================================
function initTestimonialsSlider() {
  const track = document.querySelector('.testimonials-track');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  
  if (!track) return;
  
  let currentIndex = 0;
  const cards = track.querySelectorAll('.testimonial-card');
  const totalSlides = Math.ceil(cards.length / getVisibleCards());
  
  function getVisibleCards() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 992) return 2;
    return 3;
  }
  
  function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
    const cardWidth = cards[0]?.offsetWidth + 24;
    track.style.transform = `translateX(${currentIndex * cardWidth * getVisibleCards() * (currentLang === 'ar' ? 1 : -1)}px)`;
    
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
  }
  
  prevBtn?.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn?.addEventListener('click', () => goToSlide(currentIndex + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));
  
  // Auto slide
  let autoSlide = setInterval(() => goToSlide((currentIndex + 1) % totalSlides), 5000);
  
  track.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => goToSlide((currentIndex + 1) % totalSlides), 5000);
  });
}

// ===================================
// Toast Notifications
// ===================================
function showToast(message, type = 'info', duration = 4000) {
  const container = document.querySelector('.toast-container') || createToastContainer();
  
  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    warning: '⚠️'
  };
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <span class="toast-message">${message}</span>
    <span class="toast-close" onclick="this.parentElement.remove()">✕</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slide-in-top 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

// ===================================
// Modal System
// ===================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal?.classList.remove('open');
  document.body.style.overflow = '';
}

function initModals() {
  // Close on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Close buttons
  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      modal?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
  
  // Open buttons
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(btn.dataset.modalOpen);
    });
  });
  
  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(modal => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  });
}

// ===================================
// Scroll to Top
// ===================================
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn?.classList.add('visible');
    } else {
      btn?.classList.remove('visible');
    }
  });
  
  btn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===================================
// Parallax Effect
// ===================================
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.5;
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const offset = (window.innerHeight / 2 - centerY) * speed;
      
      el.style.transform = `translateY(${offset}px)`;
    });
  });
}

// ===================================
// Chart Animation
// ===================================
function initCharts() {
  const chartBars = document.querySelectorAll('.chart-bar');
  const heights = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100];
  
  chartBars.forEach((bar, i) => {
    const height = heights[i % heights.length];
    bar.style.setProperty('--bar-height', `${height}%`);
    bar.style.height = `${height}%`;
  });
}

// ===================================
// Form Validation
// ===================================
function validateForm(form) {
  let isValid = true;
  
  form.querySelectorAll('[required]').forEach(field => {
    const value = field.value.trim();
    const errorEl = field.parentElement.querySelector('.form-error');
    
    if (!value) {
      isValid = false;
      field.style.borderColor = 'var(--secondary)';
      if (errorEl) errorEl.style.display = 'flex';
    } else {
      field.style.borderColor = '';
      if (errorEl) errorEl.style.display = 'none';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        field.style.borderColor = 'var(--secondary)';
      }
    }
  });
  
  return isValid;
}

// ===================================
// Savings Calculator
// ===================================
function initCalculator() {
  const calculator = document.getElementById('savings-calculator');
  if (!calculator) return;
  
  const ordersInput = calculator.querySelector('#calc-orders');
  const revenueInput = calculator.querySelector('#calc-revenue');
  const resultEl = calculator.querySelector('#calc-result');
  
  function calculate() {
    const orders = parseInt(ordersInput?.value) || 0;
    const revenue = parseInt(revenueInput?.value) || 0;
    
    const timeSaved = orders * 0.5; // 30 min per order
    const revenueSaved = revenue * 0.15; // 15% increase
    const costSaved = orders * 2; // $2 per order in manual work
    
    if (resultEl) {
      resultEl.innerHTML = `
        <div class="calc-result-item">
          <span class="calc-result-label">${currentLang === 'ar' ? 'وقت موفر' : 'Time Saved'}</span>
          <span class="calc-result-value">${timeSaved.toFixed(0)} ${currentLang === 'ar' ? 'ساعة/شهر' : 'hrs/month'}</span>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">${currentLang === 'ar' ? 'زيادة الإيرادات' : 'Revenue Increase'}</span>
          <span class="calc-result-value">+${revenueSaved.toLocaleString()} ${currentLang === 'ar' ? 'ريال' : 'SAR'}</span>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">${currentLang === 'ar' ? 'توفير التكاليف' : 'Cost Savings'}</span>
          <span class="calc-result-value">${costSaved.toLocaleString()} ${currentLang === 'ar' ? 'ريال' : 'SAR'}</span>
        </div>
      `;
    }
  }
  
  ordersInput?.addEventListener('input', calculate);
  revenueInput?.addEventListener('input', calculate);
  calculate();
}

// ===================================
// Lazy Loading Images
// ===================================
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => observer.observe(img));
}

// ===================================
// Smooth Scroll
// ===================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ===================================
// Promo Modal
// ===================================
function initPromoModal() {
  const shown = sessionStorage.getItem('promo-shown');
  if (shown) return;
  
  setTimeout(() => {
    const modal = document.getElementById('promo-modal');
    if (modal) {
      modal.classList.add('open');
      sessionStorage.setItem('promo-shown', 'true');
    }
  }, 5000);
}

// ===================================
// Agent Tabs
// ===================================
function initAgentTabs() {
  const agentItems = document.querySelectorAll('.agent-item');
  const agentPreviews = document.querySelectorAll('.agent-preview-content');
  
  agentItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      agentItems.forEach(i => i.classList.remove('active'));
      agentPreviews.forEach(p => p.classList.remove('active'));
      
      item.classList.add('active');
      agentPreviews[index]?.classList.add('active');
    });
  });
  
  // Set first as active
  agentItems[0]?.classList.add('active');
  agentPreviews[0]?.classList.add('active');
}

// ===================================
// Typing Effect
// ===================================
function initTypingEffect() {
  const elements = document.querySelectorAll('[data-typing]');
  
  elements.forEach(el => {
    const texts = el.dataset.typing.split('|');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        el.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }
      
      let delay = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === currentText.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = 500;
      }
      
      setTimeout(type, delay);
    }
    
    type();
  });
}

// ===================================
// Cookie Consent
// ===================================
function initCookieConsent() {
  const accepted = localStorage.getItem('cookies-accepted');
  if (accepted) return;
  
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  
  setTimeout(() => {
    banner.style.display = 'flex';
    banner.style.animation = 'slide-in-top 0.3s ease';
  }, 2000);
  
  document.getElementById('accept-cookies')?.addEventListener('click', () => {
    localStorage.setItem('cookies-accepted', 'true');
    banner.style.display = 'none';
  });
  
  document.getElementById('decline-cookies')?.addEventListener('click', () => {
    banner.style.display = 'none';
  });
}

// ===================================
// Initialize Everything
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language
  setLanguage(currentLang);
  
  // Language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  
  // Initialize all modules
  initNavbar();
  initScrollAnimations();
  initCounters();
  initPricingToggle();
  initFAQ();
  initTestimonialsSlider();
  initModals();
  initScrollTop();
  initParallax();
  initCharts();
  initCalculator();
  initLazyLoading();
  initSmoothScroll();
  initPromoModal();
  initAgentTabs();
  initTypingEffect();
  initCookieConsent();
  
  // Show welcome toast
  setTimeout(() => {
    showToast(
      currentLang === 'ar' ? '🎉 مرحباً بك في ClawCommerce!' : '🎉 Welcome to ClawCommerce!',
      'success',
      3000
    );
  }, 1000);
});

// Export for use in other files
window.ClawCommerce = {
  showToast,
  openModal,
  closeModal,
  setLanguage,
  validateForm,
  currentLang: () => currentLang
};
