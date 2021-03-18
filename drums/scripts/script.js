window.addEventListener('keydown', (ev) => {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${ev.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');

  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    key.classList.remove('playing');
  }, (audio.duration * 100));
});