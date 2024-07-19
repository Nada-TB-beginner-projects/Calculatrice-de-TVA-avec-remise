# Calculatrice de TVA avec remise (French)

A simple application that calculates the price with VAT (TVA) and includes an option to calculate the price after a discount. The interface features a form where the user can enter the price before tax (HTT), specify if a discount is applied, and see the final price after tax and discount. The program checks inputs and handles errors gracefully.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Challenges and Learnings](#challenges-and-learnings)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [License](#license)

## Introduction

This project is a web application designed to help users calculate the total price including VAT and optional discounts. The motivation for creating this project was to practice DOM manipulation, input validation, and user-friendly error handling in JavaScript.

## Demo

### Live Demo

Check out the live demo [here](https://nada-tb-beginner-projects.github.io/Calculatrice-de-TVA-avec-remise/).

## Requirements

- Modern web browser (e.g., Chrome, Firefox, Safari)
- Basic understanding of HTML, CSS, and JavaScript

## Installation

To run the project locally, follow these steps:

```bash
# Clone the repository
git clone https://nada-tb-beginner-projects.github.io/Calculatrice-de-TVA-avec-remise.git

# Navigate to the project directory
cd calculatrice-tva-remise
```

## Usage

To use the calculator:

```bash
# Open the index.html file in your web browser
index.html
```

Fill in the price before tax (HTT), select if you want to apply a discount, and enter the discount rate if applicable. Click "Calculer" to see the total price including VAT and any discount. Click "Effacer" to clear the form.

## Features

- Calculate price including VAT (TVA)
- Optional discount calculation
- User-friendly error messages
- Responsive design for various screen sizes

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

Outline of the project directory:

```plaintext
calculatrice-tva-remise/
├── index.html            # Main HTML file
├── style.css             # CSS styles
├── main.js               # JavaScript functionality
└── README.md             # Project documentation
```

## Challenges and Learnings

1. **Retrieving User Input Data**:
   - **Challenge**: Retrieving user input data using DOM methods.
   - **Solution**: Gained a strong understanding of the DOM structure and how to manipulate it using JavaScript.

2. **Ensuring Data Security and User-Friendly Experience**:
   - **Challenge**: Ensuring data security and implementing a user-friendly experience.
   - **Solution**: 
     - Input Validation: Implemented functions to check data integrity and security.
     - User-Friendly Error Handling: Displayed error messages that guide the user, following the "Don't Make Me Think" principle.

## Future Improvements

- Enhance UI/UX design with additional styling and animations
- Add more interactive features such as user authentication and dynamic content loading
- Implement a backend for managing user data and interactions
- Optimize the code for better performance and maintainability

## Contact

For any questions or feedback, you can reach me at:

- GitHub: [Nada-TB](https://github.com/Nada-TB)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
