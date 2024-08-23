# WeddingBingo

## Project Overview

**WeddingBingo** is a Python-based web application built using the Flask framework. The app generates randomized bingo cards with a fixed center square ("Corey"). It is deployed on Azure using the App Service Plan in the Free Tier, demonstrating my ability to utilize cloud computing platforms for hosting and managing web applications.

## Skills Demonstrated

- **Python Development**: 
  - Utilized the Flask framework to develop a dynamic web application.
  - Demonstrated proficiency in creating RESTful routes and handling HTTP requests.

- **Web Development**: 
  - Created interactive and responsive web pages using HTML and CSS.
  - Used Flask's templating engine (Jinja2) to generate dynamic content.

- **Cloud Computing (Azure)**: 
  - Deployed the Flask application on Azure App Service.
  - Managed deployment pipelines using Azure’s Git integration.
  - Monitored and managed the application using Azure's portal and logs.

- **Version Control (Git/GitHub)**:
  - Managed the project's source code using Git for version control.
  - Pushed the project to a GitHub repository, demonstrating the ability to use GitHub for code hosting and collaboration.

## Project Structure

The project is organized into the following directories and files:

- **`app.py`**: The main Python file that defines the Flask application. It contains the routes and logic for generating and displaying the bingo cards.

- **`requirements.txt`**: Lists all the dependencies required to run the application. This file is essential for replicating the environment on other systems or during deployment on cloud platforms like Azure.

- **`static/`**: 
  - **`styles.css`**: The CSS file that defines the styling for the bingo board and other elements of the web app.
  - **`scripts.js`**: (If used) Contains any JavaScript required for the app's interactivity.

- **`templates/`**: 
  - **`bingo.html`**: The HTML file that is rendered by Flask. It defines the structure of the bingo board and is dynamically populated with data from the server.

- **`.gitignore`**: A file that tells Git which files (like environment configurations or local caches) should not be tracked in version control.

Deployment
This application is currently deployed on Azure. You can access it live at:
https://WeddingBingo.azurewebsites.net
