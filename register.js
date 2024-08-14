

const scriptURL = 'https://script.google.com/macros/s/AKfycbyXjbXSTNf77yZbHWL7Ug2QteMGivnRLx8eF08Tyu8sPHg7qHdSgDLuZ4YJX6M6lodpwg/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})
