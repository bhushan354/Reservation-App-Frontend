<a name="readme-top"></a>


<div align="center">

  <h3><b>Vehicle Reservation App</b></h3>

</div>


Vehicle Reservation App is a web application designed to streamline the process of renting cars. Users can log in securely using their username and access various features through a navigation panel. The system allows users to browse available cars, make reservations, manage bookings, add new cars to the inventory, and delete them. The application is responsive, providing both mobile and desktop versions for a user-friendly experience.

## 🛠 Built With <a name="built-with"></a>
- ✅ Ruby on Rails - Backend
- ✅ React - Frontend
- ✅ Postgresql - Database
- ✅ Docker

## 🐳 Docker Setup (Recommended)

1. **Clone the repo:**
    ```
     git clone git@github.com:bhushan354/Reservation-App-Frontend.git

     cd Reservation-App-Frontend
    ```

2. **Build and start frontend service:**
   ```bash
   docker compose build
   
   docker compose up
   ```
3. **Access frontend:**

- Make sure you have setup backend if not, Headover To Backend-Repo and follow Docker backend setup to make sure your app is working fine with rails as a backend : https://github.com/bhushan354/Reservation-App-Backend

- Access application here : http://172.20.0.2:3000


### Key Features <a name="key-features"></a>

- 🔰 *User Authentication:* secure login using email and password.
- 🔰 *Navigation Panel:* has links to browse and reserve cars. "My Reservations" page for booking management, and "Add Car" and "Delete Car" links for administrators.
- 🔰 *Main Page:* Displays a list of available cars. Clicking on a specific car provides access to its details page.
- 🔰 *Details Page:* Shows comprehensive details of the selected car and a "Reserve" button for making a reservation.
- 🔰 *Reserve Form:* Allows users to reserve a car by selecting a date and city.
- 🔰 *Delete car:* Accessible only by administrators, displays a list of all cars with a "Delete" button. Deleted cars are marked as removed and do not appear on the main list.
- 🔰 *Responsive design:* Both mobile and desktop versions for optimal user experience.
- 🔰 *My Reservations:* Users can view a list of their reservations, including car name, date, and city.
- 🔰 *Autofill for Reservations:* Reservations autofill username and selected car details. Additional inputs for date and city based on the "Book a Car" design.

# Local Setup

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

### Local Setup

- Clone this [repository](git@github.com:bhushan354/Full-Stack-Capstone-Frontend.git) to your desired folder:

- Run this command in your command line interface:

```sh
  cd [YOUR FOLDER]
  git clone git@github.com:bhushan354/Full-Stack-Capstone-Frontend.git
  cd Full-Stack-Capstone-Frontend
```

- Open the project in your favourite code editor, Add this piece of code into the dependencies of package.json file:

```sh
      "react-elastic-carousel": "^0.11.5",
```


```sh
   npm install --force
   PORT=3001 npm start
```

- Now Headover To Backend-Repo and follow local setup to make sure your app is working fine with rails as a backend : https://github.com/bhushan354/Reservation-App-Backend



## 📝 Contact Details

Bhushan Deshmukh: 
+91 8600118932 | deshmukhbhushan380@gmail.com | https://www.linkedin.com/in/bhushan-deshmukh-codes/
