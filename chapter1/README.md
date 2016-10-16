En este capitulo se configuro mongodb, express y node js


Install mongodb
Prerequisites
To follow this tutorial, you will need:


URL
https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04

One Ubuntu 16.04 server set up by following this initial server setup tutorial, including a sudo non-root user
Step 1 — Adding the MongoDB Repository
MongoDB is already included in Ubuntu package repositories, but the official MongoDB repository provides most up-to-date version and is the recommended way of installing the software. In this step, we will add this official repository to our server.

Ubuntu ensures the authenticity of software packages by verifying that they are signed with GPG keys, so we first have to import they key for the official MongoDB repository.

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

After successfully importing the key, you will see:

Output
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)
Next, we have to add the MongoDB repository details so apt will know where to download the packages from.

Issue the following command to create a list file for MongoDB.

echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
After adding the repository details, we need to update the packages list.

sudo apt-get update

Step 2 — Installing and Verifying MongoDB
Now we can install the MongoDB package itself.

sudo apt-get install -y mongodb-org

This command will install several packages containing latest stable version of MongoDB along with helpful management tools for the MongoDB server.

In order to properly launch MongoDB as a service on Ubuntu 16.04, we additionally need to create a unit file describing the service. A unit file tells systemd how to manage a resource. The most common unit type is a service, which determines how to start or stop the service, when should it be automatically started at boot, and whether it is dependent on other software to run.

We'll create a unit file to manage the MongoDB service. Create a configuration file named mongodb.service in the /etc/systemd/system directory using nano or your favorite text editor.

sudo nano /etc/systemd/system/mongodb.service
Paste in the following contents, then save and close the file.

/etc/systemd/system/mongodb.service
[Unit]
Description=High-performance, schema-free document-oriented database
After=network.target

[Service]
User=mongodb
ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

[Install]
WantedBy=multi-user.target
This file has a simple structure:

The Unit section contains the overview (e.g. a human-readable description for MongoDB service) as well as dependencies that must be satisfied before the service is started. In our case, MongoDB depends on networking already being available, hence network.target here.

The Service section how the service should be started. The User directive specifies that the server will be run under the mongodb user, and the ExecStart directive defines the startup command for MongoDB server.

The last section, Install, tells systemd when the service should be automatically started. The multi-user.target is a standard system startup sequence, which means the server will be automatically started during boot.

Next, start the newly created service with systemctl.

sudo systemctl start mongodb
While there is no output to this command, you can also use systemctl to check that the service has started properly.

sudo systemctl status mongodb
Output
● mongodb.service - High-performance, schema-free document-oriented database
   Loaded: loaded (/etc/systemd/system/mongodb.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2016-04-25 14:57:20 EDT; 1min 30s ago
 Main PID: 4093 (mongod)
    Tasks: 16 (limit: 512)
   Memory: 47.1M
      CPU: 1.224s
   CGroup: /system.slice/mongodb.service
           └─4093 /usr/bin/mongod --quiet --config /etc/mongod.conf
The last step is to enable automatically starting MongoDB when the system starts.

sudo systemctl enable mongodb
The MongoDB server now configured and running, and you can manage the MongoDB service using the systemctl command (e.g. sudo systemctl mongodb stop, sudo systemctl mongodb start).
--------------------------------------------------------------------------
--------------------------------------------------------------------------
Instal NodeJS

How To Install the Distro-Stable Version
Ubuntu 14.04 contains a version of Node.js in its default repositories that can be used to easily provide a consistent experience across multiple servers. The version in the repositories is 0.10.25. This will not be the latest version, but it should be quite stable.

In order to get this version, we just have to use the apt package manager. We should refresh our local package index prior and then install from the repositories:

sudo apt-get update
sudo apt-get install nodejs

If the package in the repositories suits your needs, this is all that you need to do to get set up with Node.js. In most cases, you'll also want to also install npm, which is the Node.js package manager. You can do this by typing:


sudo apt-get install npm

------------------------------------------------------------------------------
------------------------------------------------------------------------------
INIT repository

type:

$ npm init

this command is usefull because it create an empty nodejs project

$ npm init
This utility will walk you through creating a package.json file.  
It only covers the most common items, and tries to guess sane defaults.

See `npm help json` for definitive documentation on these fields  
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and  
save it as a dependency in the package.json file.

Press ^C at any time to quit.  
name: (your-first-node-package)  
version: (0.0.0)  
description: My very first package  
entry point: (index.js)  
test command:  
git repository: (https://github.com/user/your-first-node-package.git)  
keywords:  
author: Elijah Insua <tmpvar@gmail.com> (http://tmpvar.com)  
license: (ISC)  
About to write to /Users/tmpvar/your-first-node-package/package.json:

{
  "name": "your-first-node-package",
  "version": "0.0.0",
  "description": "My very first package",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/user/your-first-node-package.git"
  },
  "author": "Elijah Insua <tmpvar@gmail.com> (http://tmpvar.com)",
  "license": "MIT"
}


Is this ok? (yes)  


---------------------------------------------------------------------------
--------------------------------------------------------------------------
Add express to our project

npm install express --save

Thats it for this chapter ;)
happy coding


-----------------------------------------------------------------------------
---------------------------------------------------------------------------
Aditionally it is a good point install

https://github.com/mongo-express/mongo-express
In order to interact with MongoDB using a browser!
