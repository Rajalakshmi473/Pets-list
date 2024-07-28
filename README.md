# Pet Listing Website

This project is a simple Pet Listing website built using React.js and json-server for a mock backend. It demonstrates fetching data from a JSON server, displaying a list of pets, and detailed views of each pet.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pet-listing-website.git
   cd pet-listing-website
Install the dependencies:
bash
Copy code
npm install
Running the Project
Start the JSON server:
    npm run json-server
In another terminal, start the React application: 
    npm start
Open your browser and navigate to http://localhost:3000.

Project Structure:

pet-listing-website/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.js
│   │   ├── PetDetails.js
│   │   ├── PetList.js
│   │   ├── SearchForm.js
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── PetPage.js
│   │   └── ...
│   │
│   ├── services/
│   │   ├── api.js
│   │   └── ...
│   │
│   ├── utils/
│   │   ├── fetchPets.js
│   │   ├── fetchPetById.js
│   │   ├── fetchBreeds.js
│   │   └── ...
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── db.json
├── package.json
└── README.md
