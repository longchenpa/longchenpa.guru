document.addEventListener('DOMContentLoaded', e => {
    let tds = document.getElementsByTagName('td')
    for (var i = 0; i < tds.length; i++) {
        tds[i].style.whiteSpace = 'normal'
    }

    navcontainer.style.border = 'initial'
    navcontainer.style.margin = 'initial'
})