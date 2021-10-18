let openButtons = document.querySelectorAll('[data-quick-view]')
let closeButtons = document.querySelectorAll('[data-close]')

openButtons.forEach(button => {
    button.addEventListener('click', evt => {
        evt.target.parentElement.nextElementSibling.classList.remove('is-hidden');
        evt.target.parentElement.classList.add('is-selected')
    })
})

closeButtons.forEach(button => {
    button.addEventListener('click', evt => {
        evt.target.parentElement.classList.add('is-hidden');
        evt.target.parentElement.previousElementSibling.classList.remove('is-selected')
    })
})