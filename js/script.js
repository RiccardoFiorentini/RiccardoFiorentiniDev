if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "auto"})
  })
}
if(document.getElementById('my-work-experiences-link')){
  document.getElementById('my-work-experiences-link').addEventListener('click', () => {
    document.getElementById('my-work-experiences-section').scrollIntoView({behavior: "auto"})
  })
}