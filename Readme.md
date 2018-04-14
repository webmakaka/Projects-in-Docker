# Projects in Docker [Video]

<br/>

## Docker Simple

<br/>

### Create Images


    $ cd mydb
    $ docker build -t mydb .

    $ cd myapp/
    $ docker build -t myapp .

    $ cd mywebserver/
    $ docker build -t mywebserver --build-arg PASSWORD=pass123 .


<br/>

### Run containers

    $ docker container run --rm --name db01 -d -p 27017:27017 -v db_data:/data/db mydb

    $ docker volume inspect db_data

    $ docker container run --rm --name app01 -d -p 3000:3000 myapp

    $ docker container run --rm --name web01 -d -p 8080:80 mywebserver

    $ docker container ls
    CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
    113919b6b87b        mywebserver         "nginx -g 'daemon of…"   6 seconds ago       Up 5 seconds        0.0.0.0:8080->80/tcp       web01
    9a5f7ee59325        myapp               "npm start"              23 seconds ago      Up 23 seconds       0.0.0.0:3000->3000/tcp     app01
    0e1e94cbef45        mydb                "docker-entrypoint.s…"   50 seconds ago      Up 49 seconds       0.0.0.0:27017->27017/tcp   db01



http://localhost:8080/

<br/>

![Application](/img/pic1.png?raw=true)

<br/>

http://localhost:8080/create.html

    username: user
    password: pass123

<br/>

![Application](/img/pic2.png?raw=true)


<br/>

![Application](/img/pic3.png?raw=true)


http://localhost:8080/api/posts  
http://localhost:3000/api/posts  




___

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
