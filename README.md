# personal-website
My personal website v2


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the `frontend` directory, you can run:

### `npm run compile`

Re-generates the graphql client. You will need to first write your query in the src code and then run this command for it to update the client.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Interactive content

This site uses the [Multi-language classifier backend](https://github.com/zachtjones/Multi-Language-Classifier), which is another project of mine.

This is hosted on https://api.zach-jones.com/graphql in the cloud.

If you are running that backend locally, it will call http://localhost:8080/graphql 
when the URL has `localBackend=true` in the query string.
