document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('textInput');
  const coloredText = document.getElementById('coloredText');

  textInput.addEventListener('input', function() {
    const text = textInput.value;
    const words = text.split(' ');
    const coloredWords = words.map(word => {
      const randomColor = getRandomColor();
      return `<span style="color: ${randomColor};">${word}</span>`;
    });
    coloredText.innerHTML = coloredWords.join(' ');
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