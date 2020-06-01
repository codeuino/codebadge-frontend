# Codebadge Frontend
This is the frontend repository of codebadge project. For backend section please install backend repository for the proper working of this project.
## Setup
1. Install modules 
```npm i```

2. setup locally
Create a **.env.local** file in root dicrectory.
```
clientID_Production = <Id for production mode to be set>
clientID_Development = <Client id from github oauth app>
``` 

3. Create a oauth app
Application Name=> Codebadge-local-login

Homepage URL=> http://localhost:3000/

Authorization callbackURL=> http://localhost:3001/github/auth

4. Run app

```npm start```
