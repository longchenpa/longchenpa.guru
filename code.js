let header = document.querySelector('header')

if (header.offsetWidth >= 768) {
  let card = document.querySelector('.card3d')
  let img = card.querySelector('.card3d-image')
  let glare = card.querySelector('.card3d-glare')

  header.addEventListener('mousemove', e => {
    let {
      left,
      right,
      top,
      bottom,
      height,
      width
    } = img.getBoundingClientRect()
    let centerX = right - width / 2
    let centerY = bottom - height / 2
    img.style.transform = `
            rotateX(${-15 * (e.pageY - centerY) / header.offsetHeight}deg)
            rotateY(${25 * (e.pageX - centerX) / header.offsetWidth}deg)`
    glare.style.transform = `
        translateX(${-130 * e.pageX / header.offsetWidth}px)
            translateY(${-250 * e.pageY / header.offsetHeight}px)`
  })

  let id
  let tran = 50
  header.addEventListener('mouseenter', e => {
    id = setInterval(() => {
      if (tran <= 50) {
        clearInterval(id)
      } else {
        tran -= 6
        img.style.transition = `transform ${tran}ms`
      }
    }, 16)
  })

  header.addEventListener('mouseleave', e => {
    if (id) clearInterval(id)
    tran = 500
    img.style.transition = `transform ${tran}ms`
    img.style.transform = ''
  })
}
