Multivision demo app
====================

Running the application
----------------------

To run this application, start your mongo server & do the following from the command line:

```bash
$ bower install
$ npm install
$ nodemon server.js
```

Running MongoDB
---------------
You can use docker, for starting your mongo server :
```bash
$ docker run --name multivision-mongo -p 27017:27017 -d mongo
```

Testing : gulp test