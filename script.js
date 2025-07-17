// script.js - Add interactivity here if needed in the future 

// إغلاق القائمة عند الضغط خارجها أو عند النزول بالصفحة
window.addEventListener('DOMContentLoaded', function() {
  const navbarCollapse = document.getElementById('mainNavbar');
  const navbarToggler = document.querySelector('.navbar-toggler');

  function closeNavbar() {
    if (navbarCollapse.classList.contains('show')) {
      // استخدم Bootstrap Collapse API
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
      bsCollapse.hide();
    }
  }

  // إغلاق عند الضغط خارج القائمة
  document.addEventListener('click', function(event) {
    if (
      navbarCollapse.classList.contains('show') &&
      !navbarCollapse.contains(event.target) &&
      !navbarToggler.contains(event.target)
    ) {
      closeNavbar();
    }
  });

  // إغلاق عند النزول بالصفحة
  window.addEventListener('scroll', function() {
    closeNavbar();
  });
}); 

// Smooth Scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, setting up smooth scroll...');
  
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  console.log('Found nav links:', navLinks.length);
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Link clicked:', this.getAttribute('href'));
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        console.log('Target section found, scrolling...');
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update active state
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
      } else {
        console.log('Target section not found:', targetId);
      }
    });
  });
  
  // Update active link on scroll
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.spa-section');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
  
  // Test if sections exist
  const sections = document.querySelectorAll('.spa-section');
  console.log('Found sections:', sections.length);
  sections.forEach(section => {
    console.log('Section ID:', section.getAttribute('id'));
  });
}); 