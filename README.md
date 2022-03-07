
## Ionic-Angular POC

this is ionic-angular POC integrated with google firebase for user authentication with email and password, as well as new user registration.
## Features

- Register new user
- Login/Logout


## Project Setup

#### Firebase Setup

Create a Firebase account, then create a project in Firebase dashboard.

![Logo](https://www.positronx.io/wp-content/uploads/2019/11/ionic-firebase-7650-01.png)

Enter the project name, then click continue.

![Logo](https://www.positronx.io/wp-content/uploads/2019/11/ionic-firebase-7650-02.png)

Once your project is created, then you will be redirected to the Firebase dashboard. click on the marked red icon.

![Logo](https://www.positronx.io/wp-content/uploads/2019/11/ionic-firebase-7650-03.png)

then enter app name

![Logo](https://www.positronx.io/wp-content/uploads/2019/11/ionic-firebase-7650-04.png)

you will see fireBaseConfig, copy the code to be used in application

![Logo](https://www.positronx.io/wp-content/uploads/2019/11/ionic-firebase-7650-05.png)

#### Enable Firebase Authentication

This will enable Firebase email and password Authentication, go to Authentication menu on the left side, the go to sign-in method and enable the Email/Password provider.

![Logo](https://www.positronx.io/wp-content/uploads/2020/01/ionic-firebase-auth-8455-02.jpg)

#### Code Setup

You can use the default fireBaseConfig Or paste the fireBaseConfig you created to the src/environment/environment.ts to replace the default fireBaseConfig.
## Running the App

To running this project run

Install package dependency :
```bash
  npm install
```

Run Ionic : 

```bash
  ionic serve -l
```

