# Restaurant Decision Maker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Point of this application

This application assists a user finding a restaurant that fits their budget and location requirements.

This application should do the following:

1. Ask for user information.
2. Pull the API information.
3. Based upon steps 1 and 2, will randomly choose a restaurant within the ranges provided
4. If user does not like the option, they may choose to ignore and retry.
   This will remove the option from the possible options and go back to step 3.

- User Information:
  - Location
  - Distance willing to drive
  - Price Range willing to pay
  - Takeout/Dine-in option?

- API Information:
  - Restaurant Name
  - Pricing (1-5)
  - Location/Distance from user

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
