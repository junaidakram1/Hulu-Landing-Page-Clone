/* Footer Responsive Dropdown for Mobile Versions */

const footerTitleEl = document.querySelectorAll('.foot-head')

const toggleExpandSection = element => () =>
    element.classList.toggle('is-expanded')

footerTitleEl.forEach(el => {
    el.addEventListener('click', toggleExpandSection(el.parentElement))
})

/* Login Form */

const modal = document.querySelector('.modal')
const btnlogin = document.querySelector('.login-btn')
const btnclose = document.querySelector('.close')

btnlogin.addEventListener('click', openModal)
btnclose.addEventListener('click', closeModal)
window.addEventListener('click', outsideModal)

function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

function outsideModal(e) {
    if (e.target == modal) {
        closeModal()
    }
}

