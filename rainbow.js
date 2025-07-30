function saveImage() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const text = document.getElementById('text-input').value;
  const canvasWidthInput = document.getElementById('canvas-width-input'); // Get the new input element

  // Get the selected background option
  const transparentBgRadio = document.getElementById('transparent-bg');
  const whiteBgRadio = document.getElementById('white-bg');
  let backgroundColor = 'transparent'; // Default is transparent background

  if (whiteBgRadio.checked) {
    backgroundColor = 'white';
  }

  // Set canvas width based on user input, default to 1200 if invalid or empty
  canvas.width = parseInt(canvasWidthInput.value) || 1200; 

  // Background drawing
  if (backgroundColor === 'white') {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    // Initialize with transparent background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Create gradient (horizontal)
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, "red");
  gradient.addColorStop(0.17, "orange");
  gradient.addColorStop(0.34, "yellow");
  gradient.addColorStop(0.51, "green");
  gradient.addColorStop(0.68, "blue");
  gradient.addColorStop(0.85, "indigo");
  gradient.addColorStop(1, "violet");

  // Font settings (can change to preferred font name)
  ctx.font = "bold 100px sans-serif"; // This line is effectively unnecessary as it's overwritten below, but kept for reference.
  ctx.fillStyle = gradient;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Draw text (centered)
  ctx.font = "bold 100px 'Hiragino Mincho ProN', 'MS 明朝', serif";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  // Save as PNG
  const link = document.createElement('a');
  link.download = 'rainbow-text.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}
