// Enhanced Navigation and Smooth Scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    // Enhanced navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile navbar if open
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
            
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
    
    // Close navbar when clicking outside
    document.addEventListener('click', function(e) {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        }
    });
    
    // Close navbar on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
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
    var contactBtn = document.getElementById('contactBtn');
    var downloadBtn = document.getElementById('downloadBtn');
    var contactInfo = document.getElementById('contactInfo');
    var contactList = document.getElementById('contactList');
    
    // Contact Me button functionality
    if(contactBtn && contactInfo) {
        contactBtn.addEventListener('click', function() {
            contactBtn.style.display = 'none';
            contactInfo.style.display = 'block';
        });
    }
    
    // Download CV button functionality
    if(downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Create a temporary link to download CV
            const link = document.createElement('a');
            link.href = 'Abdallah_Khader_CV.pdf';
            link.download = 'Abdallah_Khader_CV.pdf';
            link.target = '_blank';
            
            // Add click event to trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Optional: Show a success message
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Downloaded!';
            downloadBtn.classList.remove('btn-primary');
            downloadBtn.classList.add('btn-success');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                downloadBtn.innerHTML = originalText;
                downloadBtn.classList.remove('btn-success');
                downloadBtn.classList.add('btn-primary');
            }, 3000);
        });
    }
}); 