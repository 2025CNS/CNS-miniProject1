// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-item');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');

    searchInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.05)';
        searchIcon.style.color = '#4285f4';
    });

    searchInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
        searchIcon.style.color = '#999';
    });

    const titleLetters = document.querySelectorAll('.title-letter');
    const titleWords = document.querySelectorAll('.title-word');

    setTimeout(() => {
        titleLetters.forEach((letter, index) => {
            letter.style.opacity = '0';
            letter.style.transform = 'translateY(50px)';
            letter.style.transition = 'all 0.8s ease';
            setTimeout(() => {
                letter.style.opacity = '1';
                letter.style.transform = 'translateY(0)';
            }, index * 200);
        });

        titleWords.forEach((word, index) => {
            word.style.opacity = '0';
            word.style.transform = 'translateX(30px)';
            word.style.transition = 'all 0.8s ease';
            setTimeout(() => {
                word.style.opacity = '1';
                word.style.transform = 'translateX(0)';
            }, (index + 1) * 400);
        });
    }, 500);

    const heroSubtitles = document.querySelectorAll('.hero-subtitle');
    setTimeout(() => {
        heroSubtitles.forEach((subtitle, index) => {
            subtitle.style.opacity = '0';
            subtitle.style.transform = 'translateY(20px)';
            subtitle.style.transition = 'all 0.6s ease';
            setTimeout(() => {
                subtitle.style.opacity = '1';
                subtitle.style.transform = 'translateY(0)';
            }, 1500 + (index * 200));
        });
    }, 100);

    const aboutSection = document.querySelector('.about');
    const aboutTitle = document.querySelector('.about-title');
    const aboutDescription = document.querySelector('.about-description');

    const observerOptions = { threshold: 0.3, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutTitle.style.opacity = '0';
                aboutTitle.style.transform = 'translateY(30px)';
                aboutTitle.style.transition = 'all 0.8s ease';
                aboutDescription.style.opacity = '0';
                aboutDescription.style.transform = 'translateY(30px)';
                aboutDescription.style.transition = 'all 0.8s ease';
                setTimeout(() => {
                    aboutTitle.style.opacity = '1';
                    aboutTitle.style.transform = 'translateY(0)';
                }, 200);
                setTimeout(() => {
                    aboutDescription.style.opacity = '1';
                    aboutDescription.style.transform = 'translateY(0)';
                }, 600);
            }
        });
    }, observerOptions);
    observer.observe(aboutSection);

    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#ffffff';
            header.style.backdropFilter = 'none';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.3s ease';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'all 0.3s ease';
    });
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    const skillsContainer = document.querySelector('.skills-container');
    const skillCards = document.querySelectorAll('.skill-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');

    let currentSlide = 0;
    const totalSlides = skillCards.length;

    function updateCarousel() {
        skillCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        skillCards[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        skillsContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });
    setInterval(nextSlide, 5000);
    updateCarousel();

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// 로그인/회원가입 스크립트 (DB 연동)
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const goToSignupLink = document.getElementById('go-to-signup');
const goToLoginLink = document.getElementById('go-to-login');
const navLinks = document.querySelectorAll('.nav-link');

function showLoginForm() {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    document.title = 'CNS - 로그인';
    updateNavigation('로그인');
}

function showSignupForm() {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    document.title = 'CNS - 회원가입';
    updateNavigation('로그인');
}

function updateNavigation(activeText) {
    navLinks.forEach(link => {
        if (link.textContent === activeText) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

goToSignupLink.addEventListener('click', function(e) {
    e.preventDefault();
    showSignupForm();
});

goToLoginLink.addEventListener('click', function(e) {
    e.preventDefault();
    showLoginForm();
});

function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('.input-field');
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ff4757';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    return isValid;
}

function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        background-color: ${type === 'success' ? '#2ed573' : type === 'error' ? '#ff4757' : '#6B73FF'};
        color: white;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    document.body.appendChild(messageDiv);
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(0)';
    }, 100);
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 3000);
}

// 회원가입 - DB 연동
signupForm.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm(this)) {
        const id = document.getElementById('signup-id').value;
        const password = document.getElementById('signup-password').value;
        const email = document.getElementById('signup-email').value;
        fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ username: id, password: password, email: email })
        })
            .then(res => res.text())
            .then(msg => showMessage(msg, 'success'))
            .catch(err => showMessage('회원가입 실패: ' + err, 'error'));
    } else {
        showMessage('모든 필드를 입력해주세요.', 'error');
    }
});

loginForm.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm(this)) {
        const id = document.getElementById('login-id').value;
        const password = document.getElementById('login-password').value;
        fetch('/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ username: id, password: password })
        })
            .then(res => res.text())
            .then(msg => {
                showMessage(msg, 'success');
                // 성공 메시지에 "로그인 성공" 같은 문구가 포함됐다고 가정
                if (msg.includes('로그인 성공')) {
                    setTimeout(() => {
                        window.location.href = '/'; // 원하는 메인 페이지 경로로 변경하세요
                    }, 1000);
                }
            })
            .catch(err => showMessage('로그인 실패: ' + err, 'error'));
    } else {
        showMessage('모든 필드를 입력해주세요.', 'error');
    }
});


document.querySelectorAll('.input-field').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#6B73FF';
    });
    input.addEventListener('input', function() {
        this.style.borderColor = '#ddd';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    showLoginForm();
    document.documentElement.style.scrollBehavior = 'smooth';
});

window.addEventListener('popstate', function() {
    showLoginForm();
});

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.target.classList.contains('input-field')) {
        const form = e.target.closest('form');
        if (form) {
            e.preventDefault();
            form.querySelector('.submit-btn').click();
        }
    }
});
