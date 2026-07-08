const items = Array.from(document.querySelectorAll('.item'));
const dots = Array.from(document.querySelectorAll('.dot'));
const numbers = document.querySelector('.numbers');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
let autoSlide;

function updateSlider(index) {
    currentIndex = (index + items.length) % items.length;

    items.forEach((item, i) => {
        item.classList.remove('enter-left', 'enter-right');
        item.classList.add(i % 2 === 1 ? 'enter-left' : 'enter-right');
        item.classList.toggle('active', i === currentIndex);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });

    const numberText = String(currentIndex + 1).padStart(2, '0');
    if (numbers) {
        numbers.textContent = numberText;
    }
}

function startAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        updateSlider(currentIndex + 1);
    }, 3000);
}

prevBtn?.addEventListener('click', () => {
    updateSlider(currentIndex - 1);
    startAutoSlide();
});

nextBtn?.addEventListener('click', () => {
    updateSlider(currentIndex + 1);
    startAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateSlider(index);
        startAutoSlide();
    });
});

updateSlider(0);
startAutoSlide();
