# WeddingBingo

## Project Overview

**WeddingBingo** is a Python-based web application built using the Flask framework. The app generates randomized bingo cards with a fixed center square ("Someone yells BINGO"). It was deployed on Azure using the App Service Plan in the Free Tier, demonstrating my ability to utilize cloud computing platforms for hosting and managing web applications. 

## Skills Demonstrated

- **Python Development**: 
  - Utilized the Flask framework to develop a dynamic web application.
  - Demonstrated proficiency in creating RESTful routes and handling HTTP requests.
  - Implemented logic for shuffling bingo squares and ensuring a unique "free" center square.

- **Web Development**: 
  - Created interactive and responsive web pages using HTML and CSS.
  - Styled the bingo board with custom CSS to ensure a consistent and visually appealing design across devices.
  - Adjusted font sizes and layout dynamically to fit different screen sizes, ensuring readability on mobile devices.
  - Integrated JavaScript for interactive features like marking bingo squares.

- **Cloud Computing (Azure)**: 
  - Deployed the Flask application on Azure App Service.
  - Managed deployment pipelines using Azure’s Git integration.
  - Utilized Azure CLI commands for creating and managing resources such as resource groups and service plans.
  - Monitored and managed the application using Azure's portal and logs.

- **Version Control (Git/GitHub)**:
  - Managed the project's source code using Git for version control.
  - Pushed the project to a GitHub repository, demonstrating the ability to use GitHub for code hosting and collaboration.
  - Documented deployment commands in a `.txt` file for future reference and replication.

## Project Structure

The project is organized into the following directories and files:

- **`app.py`**: The main Python file that defines the Flask application. It contains the routes and logic for generating and displaying the bingo cards.

- **`requirements.txt`**: Lists all the dependencies required to run the application. This file is essential for replicating the environment on other systems or during deployment on cloud platforms like Azure.

- **`static/`**: 
  - **`styles.css`**: The CSS file that defines the styling for the bingo board and other elements of the web app.
  - **`scripts.js`**: Contains the JavaScript that enables interaction, such as marking bingo squares.

- **`templates/`**: 
  - **`bingo.html`**: The HTML file that is rendered by Flask. It defines the structure of the bingo board and is dynamically populated with data from the server.

- **`.gitignore`**: A file that tells Git which files (like environment configurations or local caches) should not be tracked in version control.

- **`Summary of Deploy Commands.txt`**: A text file documenting all the commands used to deploy the application to Azure, providing a clear record for future reference.

## Deployment

This application was successfully deployed on Azure and could be accessed via the following URL (when active):
[https://WeddingBingo.azurewebsites.net](https://WeddingBingo.azurewebsites.net)

## Notes

The Azure deployment has been removed to avoid accidental costs, but the deployment process is documented in the project for future reference and potential re-deployment.
