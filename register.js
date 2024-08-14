

const scriptURL = 'https://script.google.com/macros/s/AKfycbyp-Z8Oz6E0I129uvz6MNX9Aj31gty2R9Mg-TLjEtwPkKdvNWDHvdvGlVaV0pHddwQNOQ/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})
// https://script.google.com/macros/s/AKfycbyp-Z8Oz6E0I129uvz6MNX9Aj31gty2R9Mg-TLjEtwPkKdvNWDHvdvGlVaV0pHddwQNOQ/exec
