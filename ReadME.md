M-a document based open source database
E- a web application framework for Node.js
R- A js front-end library for building user interfaces
N-js runtime environment that executed JS outside of a a-browser  
Mongoose-Simple,schema based solution to model application
## Project
1. require express and set const app to express to use express libraries on app.
2. app.get res for ->index, about, signup,login
3. add middleware in about req,res,next()
4. In DB folder create conn(connection) file.
- require mongoose
- mongoose.connect(DB,) DB="string from cluster connect of Atlas"
- use promises, then and catch err
5. Auntenticity- dotenv
- create config.env 
- define the port and DB(to secure the passwords of DB)
- dotenv.config in App (once)
6. userSchema 
- require mongoose
- new mongoose.Schema//create a new instance
- create Schema using objects define type:,
- create a model of the user Schema mongoose.model('USER', userSchema)->(name, schemaname)
7. Router in Backend
- Express Router Middleware Setup and Getting Data Back From POSTMAN to Our MERN Application
8. Save data in Atlas
- All fields are required, Check if email matches, if not create new user.
9. SignIn page 
- enter email password, check if matches with DB, if null then user does not exist
10. Secure password
- npm i bcryptjs
- before save data, call the bcryptsjs in userSchema.pre and hash the password.
- to check email and password : for email: .finOne, for password: bcrypt.compare 
11. Cookies and Tokens
- The user submits login credentials to the backend server. Upon the request, the server verifies the credentials before generating an encrypted JWT with a secret key and sends it back to the client. On the client-side, the browser stores the token locally using the local storage, session storage, or cookie storage
- npm i jsonwebtoken User Authentication Using JWT & Stored Token In MongoDB Atlas
- Generate JWT Token and stored it in DB.
- How to store the token in Cookies
- get the token from cookie and verify the User

