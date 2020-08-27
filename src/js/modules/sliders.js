function sliders({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
        const slides = document.querySelectorAll(slide),
              slider = document.querySelector(container),
              prev = document.querySelector(prevArrow),
              next = document.querySelector(nextArrow),
              current = document.querySelector(currentCounter),
              total = document.querySelector(totalCounter),
              slidesWrapper = document.querySelector(wrapper),
              slidesFiled = document.querySelector(field),
              width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {       // если наших блоков со слайдами меньше 10 то прибавляем 0 к началу строки
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesFiled.style.width = 100 * slides.length + '%';
    slidesFiled.style.display = 'flex';
    slidesFiled.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];


    function styleAndVarification () {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    function regExp (str) {
        return +str.replace(/\D/g, "");
    }


    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        indicators.append(dot);

        if (i === 0) {
            dot.style.opacity = 1;
        }

        dots.push(dot);
    }


    next.addEventListener('click', () => {
        if (offset == regExp(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += regExp(width);
        }

        slidesFiled.style.transform = `translateX(-${offset}px)`;

        if (slideIndex === slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        styleAndVarification();
    });

    
    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = regExp(width) * (slides.length - 1);
        } else {
            offset -= regExp(width);
        }

        slidesFiled.style.transform = `translateX(-${offset}px)`;

        if (slideIndex === 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        styleAndVarification();

    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = +e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = regExp(width) * (slideTo - 1);
            slidesFiled.style.transform = `translateX(-${offset}px)`;

            styleAndVarification();
        });
    });
}

export default sliders;