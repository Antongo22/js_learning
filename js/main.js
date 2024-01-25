document.addEventListener('DOMContentLoaded', function() {
  const changeColorButton = document.getElementById('changeColorButton');
  const colorCodeSpan = document.getElementById('colorCodeSpan');

  changeColorButton.addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorCodeSpan.textContent = randomColor;
  });

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});