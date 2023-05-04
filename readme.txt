
CRUD API :
C -->> CREATE
R -->> READ
U -->>UPDATE 
D ->>DELETE


CREATING A BASIC BLOG APPLICATION


API to create a blog :
    URL -> /blogs
    METHOD -> POST
    # Data is to be send inside request body or body params in the form of a json
        eg: {
                title=" ";
                description=" ";
            }



API to read all the blogs
    URL -> /blogs
    METHOD -> GET



API to read a specific blog having a unique ID
    URL -> /blogs/:ID
    METHOD -> GET
    #Data is to be send inside request/url param
        eg: /blogs/17



API to delete a specific blog having a unique ID
    URL -> /blogs/:ID
    METHOD -> DELETE
    # Data is to be send inside request/url param
        eg: /blogs/17



API to update a specific blog having a unique ID
    URL -> /blogs/:ID
    METHOD -> PUT / PATCH
    # Data is to be send inside body param in the form of a json
        eg: {
                title=" ";
                description=" ";
            }


npm init
npm install express
npm install dotenv
npm install nodemon
npm install body-parser
npm install winston
npm install http-status-codes


when you make any change to server code base, the server needs to be restarted again.
In order to restart it automatically ,there is a third party package nodemon npm
    npm install nodemon
npx can execute your npm package binaries
    npx nodemon filename.js  ->>>in order to start the server
or  
you can write a script in package.json 
    eg : "start" : "npx nodemon index.js"
    now just do npm run start to start the server



In order to access the body of a request received to the server we need to install a package called body parser
so that it parses the req body in the form of json
npm install
npm install body-parser
we need middlewares to configure the bodyParser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

middleware->layers of logic where you can check the correctness of data,modify the data before the request hits the actual api
