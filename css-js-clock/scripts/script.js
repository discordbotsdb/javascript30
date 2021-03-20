const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')

setInterval(() => {
  const time = new Date()

  seconds.style.transform = `rotate(${((time.getSeconds() / 60) * 360) + 90}deg)`

  minutes.style.transform = `rotate(${((time.getMinutes() / 60) * 360) + ((seconds / 60) * 6) + 90}deg)`

  hours.style.transform = `rotate(${((time.getHours() / 12) * 360) + ((time.getMinutes() / 60) * 30) + 90}deg)`
}, 1000)
