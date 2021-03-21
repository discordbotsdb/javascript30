document.querySelectorAll('.input, .highlight').forEach((input) => {
  input.addEventListener('change', () => {
    document.documentElement.style.setProperty(`--${input.name}`, `${input.value}${input.dataset.sizing || ''}`)
  })
})

document.querySelector('.highlight').addEventListener('mousemove', () => {
  const color = document.querySelector('.highlight')
  document.documentElement.style.setProperty(`--${color.name}`, `${color.value}${color.dataset.sizing || ''}`)
})

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.input, .highlight').forEach((input) => {
    document.documentElement.style.setProperty(`--${input.name}`, `${input.value}${input.dataset.sizing || ''}`)
  })
})
