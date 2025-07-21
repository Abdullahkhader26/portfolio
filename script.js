// Enhanced Navigation and Smooth Scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Enhanced navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Smooth scroll to target (even if already at top)
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            } else {
                // حتى لو لم يوجد القسم، فعّل الزر
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Active navigation based on scroll position
    function updateActiveNav() {
        const sections = document.querySelectorAll('.spa-section');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        const navbar = document.querySelector('.navbar');
        let navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
        let current = '';
        const scrollPosition = window.scrollY + navbarHeight + 10; // 10px هامش صغير
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        // لا تفعّل أي زر إذا لم يكن هناك قسم ظاهر
    }
    
    // Throttled scroll event for better performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateActiveNav);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', function() {
        ticking = false;
        requestTick();
    });
    
    // Don't initialize active nav on page load - let user scroll to activate
    // updateActiveNav();
    
    // Enhanced section animations with Intersection Observer
    const sections = document.querySelectorAll('.spa-section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.setProperty('--section-index', index);
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(section => {
        section.style.animationPlayState = 'paused';
        sectionObserver.observe(section);
    });
    
    // Enhanced hover effects for better performance
    const hoverElements = document.querySelectorAll('.spa-section .col-md-6');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Smooth navbar background on scroll
    // const navbar = document.querySelector('.navbar');
    // let lastScrollTop = 0;
    // window.addEventListener('scroll', function() {
    //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     if (scrollTop > 100) {
    //         navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    //         navbar.style.backdropFilter = 'blur(10px)';
    //     } else {
    //         navbar.style.background = '#000';
    //         navbar.style.backdropFilter = 'none';
    //     }
    //     lastScrollTop = scrollTop;
    // });
    
    // Enhanced mobile menu interactions
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }
});

// Performance optimization: Debounced scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll-based animations and effects
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler); 

// Typewriter effect for welcome message
window.addEventListener('DOMContentLoaded', function() {
    const text1 = "Hello, I'm Abdallah";
    const text2 = ".NET Developer";
    const el1 = document.getElementById('typewriter');
    const el2 = document.getElementById('netdev');
    let i = 0, j = 0;
    function typeWriter1() {
        if (i < text1.length) {
            el1.textContent += text1.charAt(i);
            i++;
            setTimeout(typeWriter1, 55);
        } else {
            if (el2) {
                el2.textContent = '';
                el2.style.display = 'block';
                typeWriter2();
            }
        }
    }
    function typeWriter2() {
        if (j < text2.length) {
            el2.textContent += text2.charAt(j);
            j++;
            setTimeout(typeWriter2, 55);
        }
    }
    if (el1) {
        el1.textContent = '';
        if (el2) el2.style.display = 'none';
        typeWriter1();
    }
}); 

// Contact Me button toggle
window.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('contactBtn');
    var list = document.getElementById('contactList');
    if(btn && list) {
        btn.addEventListener('click', function() {
            btn.style.display = 'none';
            list.style.display = 'block';
        });
    }
}); 