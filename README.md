# react-firebase

## getting started
There seems to be a problem with node 23 installed via homebrew, check what you are running with node -v. Then to change - nvm list and then nvm install 20 etc. 

in the project directory :

### React app
- npx create-react-app my-app
- cd my-app
- npm start

(if it fails with dependency problems :

`npm error Could not resolve dependency:
npm error peer react@"^18.0.0" from @testing-library/react@13.4.0`

on the testing, just take that script out of package.json in the react file)

### Firebase pre requisites
now cd into the my-app directory
- npm i firebase
- npm i firebase-tools
- npm i web-vitals --save-dev

### quick test 
npm start - runs development server

### to deploy
before you deploy run the build : 
npm run build

### firebase config
firebase login (if you havent already)
firebase init to setup the firebase stuff for this problem (do this in the app directory)
set the public folder to build and yes to single page apps
firebase emulators:start
firebase deploy