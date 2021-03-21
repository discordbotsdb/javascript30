document.querySelectorAll('.input').forEach((input) => {
  input.addEventListener('change', () => {
    document.documentElement.style.setProperty(`--${input.name}`, `${input.value}${input.dataset.sizing || ''}`)
  })
  input.addEventListener('mousemove', () => {
    document.documentElement.style.setProperty(`--${input.name}`, `${input.value}${input.dataset.sizing || ''}`)
  })
})
