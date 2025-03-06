const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    loseFocusMenu();
    fillSkills();
    slider();
});

function toggleMenu() {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

function loseFocusMenu() {
    document.addEventListener('click', (event) => {
        let navTarget = navLinks.contains(event.target);
        let hamTarget = hamburger.contains(event.target);
        if (!navTarget && !hamTarget) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    window.onscroll = function() {
        if (window.scrollY > 0) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
      };
}


function fillSkills() {
    const grid = document.getElementById("grid");

    languages.forEach(lang => {
        const card = document.createElement("div");
        card.classList.add("card");

        const progressWidth = (lang.grade / 5) * 100;

        card.innerHTML = `<img src="https://cdn.jsdelivr.net/npm/devicon/icons/${lang.logo}/${lang.logo}-original.svg" alt="${lang.name} Logo">
                <h3>${lang.name}</h3>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${progressWidth}%; background: ${colors[lang.grade]};"></div>
                </div>
                <p class="grade">${text_grades[lang.grade]}</p>`;

        grid.appendChild(card);
    });
}

function slider() {
    const swiperWrapper = document.getElementById("swiper-wrapper");

    projects.forEach(project => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.innerHTML =`
      <img src="${project.img}" alt="${project.title}">
      <div class="slide-content">
        <h3 class="proj-title">${project.title}</h3>
        <p class="proj-desc">${project.description}</p>
        <a href="${project.link}" target="_blank" class="proj-link">View Project <i class="fas fa-external-link-alt"></i></a>
      </div>
    `;

        swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper
    new Swiper(".swiper", {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
}