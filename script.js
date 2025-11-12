function generateQR() {
    const url = document.getElementById('urlInput').value;
    if(!url) return alert('Introduce una URL válida');

    const qr = new QRious({
        element: document.getElementById('qrcode'),
        value: url,
        size: 200
    });
}
