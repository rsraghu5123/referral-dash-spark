✨ Intern Dashboard Project

A simple and clean dashboard application to track intern referral codes, donations, and rewards. This project includes a dummy login, a functional dashboard, and a mock backend API.

## 🚀 Features

###  Frontend (HTML/CSS/JS or React)
* *Dummy Login/Signup Page:* A static page for user authentication simulation (no backend authentication logic required).
* *Dashboard View:* After "logging in," users are directed to a dashboard that displays:
    * Intern's Name
    * A dummy referral code (e.g., yourname2025)
    * Total donations raised (a static number from the backend)
* *Rewards Section:* A static section to display potential rewards or unlockables.

### 🔙 Backend (Any Language/Framework)
* *Simple REST API:* A minimal API setup.
    * Returns mock data for the user's name, referral code, and total amount raised.
    * Can be easily mocked using Postman or a static JSON file.

### 🏆 Bonus Features (Optional)
* *Leaderboard Page:* A static page to display a list of top performers.
* *Data Persistence:* Option to store data in a non-dynamic way using Firebase, JSON files, or MongoDB.

## 🛠 Tech Stack

This project is flexible, but here is a recommended stack:

* *Frontend:* React, Vite, Tailwind CSS
* *Backend:* Node.js with Express.js
* *Database (Optional):* Firebase or MongoDB for the bonus feature.

## ⚙ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your machine.

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/get-npm)

### Installation

1.  *Clone the repository:*
    sh
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    
2.  *Navigate to the project directory:*
    sh
    cd your-repository-name
    
3.  *Install frontend dependencies:*
    sh
    # Navigate to the frontend folder (if you have a separate one)
    cd frontend
    npm install
    
4.  *Install backend dependencies:*
    sh
    # Navigate to the backend folder
    cd ../backend
    npm install
    

### Running the Application

1.  *Start the backend server:*
    sh
    # From the /backend directory
    npm start
    
    The server will typically run on http://localhost:5000.

2.  *Start the frontend development server:*
    sh
    # From the /frontend directory
    npm run dev
    
    The application will be available at http://localhost:3000 or a similar address.

## <caption> API Endpoints

The backend exposes the following endpoint to get user data.

### Get User Data

* *Endpoint:* /api/user
* *Method:* GET
* *Description:* Retrieves mock data for the logged-in intern.
* *Success Response:*
    * *Code:* 200 OK
    * *Content:*
        json
        {
          "userName": "Alex Doe",
          "referralCode": "alexdoe2025",
          "totalDonations": 1575
        }

