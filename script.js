// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Here you would typically send the data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Volunteer button click handler
const volunteerBtn = document.querySelector('.volunteer-btn');
if (volunteerBtn) {
    volunteerBtn.addEventListener('click', function() {
        // Scroll to opportunities section
        document.querySelector('#opportunities').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Apply button click handlers
document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', function() {
        const opportunityTitle = this.closest('.opportunity-content').querySelector('h3').textContent;
        alert(`Thank you for your interest in "${opportunityTitle}"! We will contact you shortly with more details.`);
    });
});

// Animate stats when they come into view
const animateStats = () => {
    const stats = document.querySelectorAll('.stat span');
    stats.forEach(stat => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });
        observer.observe(stat);
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateStats();
});

// Add animation to news cards
const newsCards = document.querySelectorAll('.news-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

newsCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add hover effect to team cards
const teamCards = document.querySelectorAll('.team-card');
teamCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Add countdown timer to matches
function updateMatchTimes() {
    const matchTimes = document.querySelectorAll('.match-time');
    matchTimes.forEach(timeElement => {
        const timeText = timeElement.textContent;
        const matchTime = new Date(timeText);
        const now = new Date();
        
        if (matchTime > now) {
            const diff = matchTime - now;
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            
            timeElement.textContent = `Starts in ${hours}h ${minutes}m`;
        } else {
            timeElement.textContent = 'Match in progress';
        }
    });
}

// Update match times every minute
setInterval(updateMatchTimes, 60000);
updateMatchTimes(); // Initial update 