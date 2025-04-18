# Temperature Converter

A simple web-based temperature converter that allows conversion between Celsius, Fahrenheit, and Kelvin units.

![Temperature Converter Screenshot](temperature-converter.png)

## Features

- Convert between Celsius (°C), Fahrenheit (°F), and Kelvin (K)
- Swap units with a single click
- Responsive design that works on mobile and desktop
- Precise calculations with decimal support
- Clean, user-friendly interface

## How to Use

1. Enter a temperature value in the input field
2. Select the unit you're converting from in the "From Unit" dropdown
3. Select the unit you want to convert to in the "To Unit" dropdown
4. Click "Convert" to see the result
5. Use the "⇄" button to quickly swap between "From" and "To" units

## Supported Conversions

- Celsius ↔ Fahrenheit
- Celsius ↔ Kelvin
- Fahrenheit ↔ Kelvin
- Any unit to itself (returns same value)

## Technical Details

### Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

### Conversion Formulas

The converter uses the following scientific formulas:

- **Celsius to Fahrenheit**: `(°C × 9/5) + 32`
- **Fahrenheit to Celsius**: `(°F − 32) × 5/9`
- **Celsius to Kelvin**: `°C + 273.15`
- **Kelvin to Celsius**: `K − 273.15`
- **Fahrenheit to Kelvin**: `(°F − 32) × 5/9 + 273.15`
- **Kelvin to Fahrenheit**: `(K − 273.15) × 9/5 + 32`

### Absolute Zero Handling

The converter includes checks to prevent temperatures below absolute zero:

- -273.15°C (0K)
- -459.67°F (0K)

## Installation

No installation required - just open `index.html` in any modern web browser.

Alternatively, you can host it on any web server.

## Future Improvements

- Add more temperature units (Rankine, Réaumur)
- Implement temperature scale visualization
- Add historical conversion tracking
- Create mobile app versions
- Add theme customization options

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Developed by Arpi saha❤️
