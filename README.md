# QR Code Generator

This is a simple Node.js application that generates QR codes from user-provided URLs.

## Description

This project uses the command line interface to prompt users for a URL, then generates a QR code image for that URL. It's built with Node.js and uses the `inquirer` package for user input and the `qr-image` package for QR code generation.

## Installation

To use this QR code generator, follow these steps:

1. Clone this repository: git clone https://github.com/yourusername/QRcode.git
2. Navigate to the project directory: 
cd QRcode
3. Install the required dependencies:
npm install
## Usage

To run the QR code generator:

1. In the project directory, run:
node index.js
2. When prompted, enter the URL for which you want to generate a QR code.

3. The application will generate a QR code image named `qr_img.png` in the same directory.

## Dependencies

This project relies on the following npm packages:

- [inquirer](https://www.npmjs.com/package/inquirer): For collecting user input
- [qr-image](https://www.npmjs.com/package/qr-image): For generating QR codes

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/yourusername/QRcode/issues) if you want to contribute.

## Author

- **Arya** - [Your GitHub Profile](https://github.com/AryaTopale)

## License

This project is licensed under the ISC License.
