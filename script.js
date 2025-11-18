// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.padding = "1rem 0";
        if (document.body.getAttribute('data-theme') === 'dark') {
            navbar.style.background = "rgba(21, 18, 37, 0.95)";
        } else {
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
        }
    } else {
        navbar.style.padding = "1.5rem 0";
        if (document.body.getAttribute('data-theme') === 'dark') {
            navbar.style.background = "rgba(21, 18, 37, 0.9)";
        } else {
            navbar.style.background = "rgba(255, 255, 255, 0.9)";
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or respect OS preference
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
body.setAttribute('data-theme', savedTheme);
themeToggle.checked = savedTheme === 'light';

// Update theme when toggle is clicked
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    
    // Update navbar background based on scroll position
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        if (this.checked) {
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
        } else {
            navbar.style.background = "rgba(21, 18, 37, 0.95)";
        }
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe feature cards, workflow steps, and testimonials
document.querySelectorAll('.feature-card, .workflow-step, .testimonial-card').forEach(el => {
    observer.observe(el);
});

// Add animation classes to CSS
const style = document.createElement('style');
style.textContent = `
    .feature-card, .workflow-step, .testimonial-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .feature-card.animate-in, .workflow-step.animate-in, .testimonial-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .workflow-step:nth-child(2) {
        transition-delay: 0.1s;
    }
    
    .workflow-step:nth-child(3) {
        transition-delay: 0.2s;
    }
    
    .workflow-step:nth-child(4) {
        transition-delay: 0.3s;
    }
    
    .feature-card:nth-child(2) {
        transition-delay: 0.1s;
    }
    
    .feature-card:nth-child(3) {
        transition-delay: 0.2s;
    }
    
    .feature-card:nth-child(4) {
        transition-delay: 0.3s;
    }
    
    .feature-card:nth-child(5) {
        transition-delay: 0.4s;
    }
    
    .feature-card:nth-child(6) {
        transition-delay: 0.5s;
    }
`;
document.head.appendChild(style);

// Add interactive elements to dashboard preview
document.querySelectorAll('.task-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

// Simple typewriter effect for hero title (optional)
const typewriterText = "AI Intelligence";
const typewriterElement = document.querySelector('.gradient-text');
if (typewriterElement && typewriterElement.textContent === "AI Intelligence") {
    let i = 0;
    const typeWriter = () => {
        if (i < typewriterText.length) {
            typewriterElement.textContent += typewriterText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typewriter effect after a short delay
    setTimeout(() => {
        typewriterElement.textContent = "";
        typeWriter();
    }, 1000);
}

// Add hover effect to feature cards with slight color variation
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const iconBackground = this.querySelector('.icon-background');
        iconBackground.style.opacity = '0.2';
    });
    
    card.addEventListener('mouseleave', function() {
        const iconBackground = this.querySelector('.icon-background');
        iconBackground.style.opacity = '0.1';
    });
});