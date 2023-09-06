let keys = document.querySelectorAll('.key-container');

window.addEventListener('keydown', (e) => {
  //   console.log(e.keyCode);
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //   console.log(audio);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('active-sound');
  console.log(key);
});

console.log(keys);
keys.forEach((key) => {
  key.addEventListener('transitionend', () => {
    key.classList.remove('active-sound');
  });
});

keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    let dataKey = key.getAttribute('data-key');

    let audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active-sound');
  });
});
