# Mini Message Board

---

## Overview

Welcome to the **Mini Message Board**, a simple web application that lets users post and view messages. This project is a basic demonstration of a full-stack web app, built with **Node.js** and **Express** for the backend, **EJS** for templating, and **CSS** for styling. It's designed to be straightforward, showing core web development concepts without getting too complex.

## Features

* **View Messages:** See a list of all posted messages, including the message text, sender's name, and the date it was sent.
* **Create New Messages:** A simple form allows users to submit new messages.
* **Timestamping:** Each message is automatically timestamped when it's created.
* **Basic Styling:** Clean and minimal CSS ensures a presentable user interface.

## Technologies Used

* **Node.js:** JavaScript runtime environment for the backend.
* **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
* **EJS (Embedded JavaScript):** A templating engine to generate HTML using plain JavaScript.
* **CSS:** For styling the application.

## Getting Started

Follow these steps to get the Mini Message Board up and running on your local machine.

---

### Prerequisites

Make sure you have **Node.js** installed. You can download it from [nodejs.org](https://nodejs.org/).

---

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/InnovatorCodes/mini-message-board.git](https://github.com/InnovatorCodes/mini-message-board.git)
    ```

2.  **Navigate into the project directory:**

    ```bash
    cd mini-message-board
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

---

### Running the Application

1.  **Start the server:**

    ```bash
    node --watch app.js
    ```

2.  **Open your browser:**

    Visit `http://localhost:8080` to access the Mini Message Board.

---

## Project Structure

mini-message-board/
├── public/                 # Static assets (CSS, images, client-side JS)
│   └── stylesheets/
│       └── style.css
├── routes/                 # Express route definitions
│   ├── index.js            # Main routes for messages
├── views/                  # EJS templates
│   ├── form.ejs            # Template for new message form
│   └── index.ejs           # Template for displaying messages
├── app.js                  # Main application file (Express setup, middleware)
├── package.json            # Project metadata and dependencies
└── README.md


## Contributing

Feel free to fork this repository, open issues, or submit pull requests. Contributions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).