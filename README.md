# 🚗 Vehicle Reservation App - Backend

An API backend for managing vehicle rental & reservations, built with Ruby on Rails.

## 🐳 Docker Backend Setup (Recommended)
1. **Clone the repo:**
    ```
     git clone git@github.com:bhushan354/Reservation-App-Backend.git
     
     cd Reservation-App-Backend
    ```

2. **Build and start backend service:**
   ```bash
   docker compose build
   
   docker compose up

   docker compose exec backend bash
   
   # Then inside the container app bash run following commands:

   rails db:drop
   rails db:create
   rails db:migrate
   rails db:seed
   ```

3. **Access API documentation:**

- http://127.0.0.1:3000/api-docs/index.html

- Now Headover To Frontend-Repo and follow Docker frontend setup to make sure your app is working fine with React as a frontend : https://github.com/bhushan354/Reservation-App-Backend


## 🛠 Local Setup Instructions 

## Prerequisites for Local Setup

*In order to run this project you need:*

- ✔ Ruby installed in your machine. you can download it from [here](https://www.ruby-lang.org/en/downloads/)
- ✔ IDE or a code editor installed in your machine.
- ✔ IRB.
- ✔ Get Postgresql up and running. you can download it from [here](https://www.postgresql.org/download/windows/).
- ✔ [Git](https://git-scm.com/downloads) installed in your machine.
- ✔ Sign in or sign up to your [Github](https://github.com/) account.
- ✔ A professional editer such as [VS Code](https://code.visualstudio.com/download).
- ✔ An Updated web browser such as Google Chrome, you can download it from [here](https://www.google.com/chrome/).


1. **Clone the repository:**
   ```bash
   git clone git@github.com:bhushan354/Reservation-App-Backend.git
   cd Reservation-App-Backend
   ```

2. **Update database configuration:**
   - Edit `config/database.yml` with your local PostgreSQL credentials.

3. **Ensure Ruby version compatibility:**
   - Match the Ruby version in your system with the one in the `Gemfile`.

4. **Install dependencies and set up the database:**
   ```bash
   bundle install
   rails db:drop
   rails db:create
   rails db:migrate
   rails db:seed
   ```

5. **Start the Rails server:**
   ```bash
   rails server
   ```

6. **Access API documentation:**
   - Open your browser and go to:
     ```
     http://127.0.0.1:3000/api-docs/index.html
     ```

## 📝 Contact Details

Bhushan Deshmukh: 
+91 8600118932 | deshmukhbhushan380@gmail.com | https://www.linkedin.com/in/bhushan-deshmukh-codes/
