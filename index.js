document.addEventListener('DOMContentLoaded', e => {

    let cardsContainer = document.querySelector('.header')

    if (cardsContainer.offsetWidth >= 768) {
        let cards = cardsContainer.querySelectorAll('.card3d')
        cards.forEach(card => {
            let plane = card.querySelector('.card3d-plane')
            let glare = card.querySelector('.card3d-glare')

            cardsContainer.addEventListener('mousemove', e => {
                let {
                    left,
                    right,
                    top,
                    bottom,
                    height,
                    width
                } = plane.getBoundingClientRect()
                let centerX = right - width / 2
                let centerY = bottom - height / 2
                plane.style.transform = `
            rotateX(${-15 * (e.pageY - centerY) / cardsContainer.offsetHeight}deg)
            rotateY(${25 * (e.pageX - centerX) / cardsContainer.offsetWidth}deg)`
                glare.style.transform = `
            translateX(${-130 * e.pageX / cardsContainer.offsetWidth}px)
            translateY(${-250 * e.pageY / cardsContainer.offsetHeight}px)`
            })

            let id
            let tran = 50
            cardsContainer.addEventListener('mouseenter', e => {
                id = setInterval(() => {
                    if (tran <= 50) {
                        clearInterval(id)
                    } else {
                        tran -= 6
                        plane.style.transition = `transform ${tran}ms`
                    }
                }, 16)
            })

            cardsContainer.addEventListener('mouseleave', e => {
                if (id) clearInterval(id)
                tran = 500
                plane.style.transition = `transform ${tran}ms`
                plane.style.transform = ''
            })
        })
    }

    let slidesContainers = document.querySelectorAll('.slides a')
    Array.from(slidesContainers).map(loadSlides)

    function loadSlides(slidesContainer, index) {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', slidesContainer.href, true)
        xhr.responseType = 'document'
        xhr.onload = function () {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    showSlides(slidesContainer, index, xhr.responseXML)
                }
            }
        }
        xhr.send(null)
    }

    function showSlides(slidesContainer, index, dom) {
        let slides = Array.from(dom.images).map(i => {
            let img = document.createElement('img')
            img.className = "slide"
            img.src = i.src
            slidesContainer.appendChild(img)
            return img
        })

        let next = 0
        slides[next].classList.toggle("visible-slide")

        setTimeout(showNextSlide, index * 2500 + 5000)

        function showNextSlide() {
            let prev = slides[next]
            setTimeout(() => {
                prev.classList.toggle("visible-slide")
            }, 2000)
            next++
            if (next == slides.length) next = 0
            slides[next].classList.toggle("visible-slide")
            setTimeout(showNextSlide, 5000)
        }
    }
})