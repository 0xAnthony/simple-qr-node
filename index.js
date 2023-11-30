const QRCode = require('qrcode')
const sharp = require('sharp');

module.export = async function generateQR(options) {
    try {
        const qrCodeImageSkin = await QRCode.toString(options.text, {type: 'svg'})
        const qrCodeImagePath = qrCodeImageSkin
            .replace('#ffffff', options.background ?? '#ffffff')
            .replace('#000000', options.color ?? "#000000");

        const logo = await sharp('./logo.png')
            .resize(100, 100)
            .toBuffer();

        const qrWithLogo = await sharp(Buffer.from(qrCodeImagePath))
            .resize(500, 500)
            .extract({ left: 44, top: 44, width: 412, height: 412 })
            .composite([{ input: logo, gravity: 'center' }])
            .toBuffer();

        await sharp(qrWithLogo).toFile(options.output ?? 'qr.png');
    } catch (err) {
        console.error(err)
    }
}

