# nodejs-demo-app
This Project is all about implementing Github CICD for Node.js based application

# Overview:
Automate the deployment of a Node.js web app using GitHub Actions for continuous integration and deployment (CI/CD).

Tech Stack & Tools:
Node.js – Web application 

Docker – Containerize the application

GitHub Actions – CI/CD pipeline

GitHub Self-hosted Runner – Run the pipeline on EC2 instance

Steps Performed:
Created Node.js web app

Created a simple app in index.js with express to return Hello from Node.js!.

Used package.json to define dependencies.

Dockerized the Application

Created a Dockerfile to containerize the app

Exposed port 3000

Created GitHub Workflow (CI/CD)

Created .github/workflows/main.yml

# Workflow steps:

1. Checkout code

2. Set up Node.js environment

3. Install dependencies

4. Build and run Docker container and push to docker hub

After developing and dockerizing the Node.js application, I initially tested the CI/CD pipeline using a GitHub hosted runner. The workflow executed successfully, verifying the build process and Docker container run through the GitHub Actions tab. Once confirmed I proceeded to configure a self-hosted runner on my local machine. I registered the runner with the repository via the GitHub settings and reran the workflow, which again executed successfully on the self hosted runner.

<img width="940" height="385" alt="image" src="https://github.com/user-attachments/assets/05d6f1ed-65c6-42ee-b0ad-e380d6b50e74" />


To securely manage sensitive information, I stored necessary credentials and configuration values in GitHub → Actions → New Repository Secrets under Secrets and variables. These were then accessed within the workflow using the secrets context. 

Finally, I verified that the Docker container was running as expected and confirmed the application was accessible at http://<EC2-publicip>:3000.



📂 Files Included:
index.js – Node.js app

package.json – Node.js dependencies

Dockerfile – For Docker build

.github/workflows/deploy.yml – GitHub Actions workflow

Readme.md --about workflow

<img width="940" height="425" alt="image" src="https://github.com/user-attachments/assets/7b935761-4be2-4594-b743-f5c91a0605f9" />

<img width="940" height="419" alt="image" src="https://github.com/user-attachments/assets/d4e7aba8-ec49-4c9c-9ec3-fbc195135b5b" />

<img width="940" height="413" alt="image" src="https://github.com/user-attachments/assets/a14108cd-2081-45bc-acd1-adde0db0b762" />

<img width="940" height="421" alt="image" src="https://github.com/user-attachments/assets/2f300e09-95dd-4e94-9d7b-871b8b20aee2" />

<img width="1912" height="931" alt="image" src="https://github.com/user-attachments/assets/27ed8bbb-14f5-4a90-8f3a-8d8f292ab6b3" />

