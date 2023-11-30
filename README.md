# Simple QR Node

Simple QR Node is a simple and lightweight server-side QR code generation library that uses JavaScript. It provides flexible configurations, including logo, color.

## Installation
```
npm install simple-qr-node
```

## Load
```javascript
 const QRCode = require('simple-qr-node');
```

## Usage
```javascript
 await generateQR({
    text: 'www.google.com',
    color: '#000000',
    background: '#ffffff',
});
```

### Options
| Option     | Required | Type   | Default | Infos                                                     |
|------------|----------|--------|---------|-----------------------------------------------------------|
| text       | Yes      | String | ---     | The value encoded in the QR code                          |
| color      | No       | String | #000000 | The color of the dots                                     |
| background | No       | String | #ffffff | The background color                                      |