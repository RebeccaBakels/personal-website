// Mobile navigation toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');

mobileNavToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileNavToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileNavToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileNavToggle.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Calculate the offset to account for the fixed navbar
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const offset = navbarHeight + 10; 
            
            // Calculate the position to scroll to
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            // Smooth scroll to the calculated position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking a link
            navLinks.classList.remove('active');
            mobileNavToggle.classList.remove('active');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Event card click handler
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const link = this.getAttribute('href');
        if (link) {
            window.open(link, '_blank');
            e.preventDefault();
        }
    });
});

// Speaking events click handler
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Only handle clicks if they're not on a link
        if (e.target.tagName !== 'A') {
            e.preventDefault();
            const talkId = this.getAttribute('href').substring(1);
            const talk = document.getElementById(talkId);
            if (talk) {
                talk.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});


