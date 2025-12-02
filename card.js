document.addEventListener('DOMContentLoaded', e => {
  let container = document.querySelector('header')

  if (container.offsetWidth >= 768) {
    let cards = container.querySelectorAll('.card3d')
    cards.forEach(card => {
      let img = card.querySelector('.card3d-image')
      let glare = card.querySelector('.card3d-glare')

      container.addEventListener('mousemove', e => {
        let { left, right, top, bottom, height, width } = img.getBoundingClientRect()
        let centerX = right - width / 2
        let centerY = bottom - height / 2
        img.style.transform = `
            rotateX(${-15 * (e.pageY - centerY) / container.offsetHeight}deg)
            rotateY(${25 * (e.pageX - centerX) / container.offsetWidth}deg)`
            glare.style.transform = `
        translateX(${-130 * e.pageX / container.offsetWidth}px)
        translateY(${-250 * e.pageY / container.offsetHeight}px)`
      })

      let id
      let tran = 50
      container.addEventListener('mouseenter', e => {
        id = setInterval(() => {
          if (tran <= 50) {
            clearInterval(id)
          } else {
            tran -= 6
            img.style.transition = `transform ${tran}ms`
          }
        }, 16)
      })

      container.addEventListener('mouseleave', e => {
        if (id) clearInterval(id)
        tran = 500
        img.style.transition = `transform ${tran}ms`
        img.style.transform = ''
      })
    })
  }
})
