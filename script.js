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