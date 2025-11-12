// usa la librería QRCode (qrcode.min.js) compatible con este ejemplo
const input = document.getElementById('url');
const btnGen = document.getElementById('generate');
const btnDown = document.getElementById('download');
const container = document.getElementById('qrcode');

let lastCanvas = null;

function clearQRCode() {
  container.innerHTML = '';
  lastCanvas = null;
  btnDown.disabled = true;
}

function generateQR(text) {
  clearQRCode();
  const qrDiv = document.createElement('div');
  container.appendChild(qrDiv);
  // QRCode librería crea un <canvas> o <img>
  const qr = new QRCode(qrDiv, {
    text: text,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
  // hay un pequeño retardo hasta que se renderice el canvas
  setTimeout(() => {
    const canvas = qrDiv.querySelector('canvas');
    if (canvas) {
      lastCanvas = canvas;
      btnDown.disabled = false;
    }
  }, 100);
}

btnGen.addEventListener('click', () => {
  const url = input.value.trim();
  if (!url) return alert('Introduce una URL válida');
  generateQR(url);
});

btnDown.addEventListener('click', () => {
  if (!lastCanvas) return;
  const a = document.createElement('a');
  a.href = lastCanvas.toDataURL('image/png');
  a.download = 'qrcode.png';
  a.click();
});
