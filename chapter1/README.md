En este capitulo se configuro mongodb, express y node js



Create a list file for MongoDB.

Create the /etc/apt/sources.list.d/mongodb-org-3.2.list list file using the command appropriate for your version of Ubuntu:

Ubuntu 12.04

echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
Ubuntu 14.04

echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
Ubuntu 16.04

echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
3
Reload local package database.

Issue the following command to reload the local package database:

sudo apt-get update
4
Install the MongoDB packages.

You can install either the latest stable version of MongoDB or a specific version of MongoDB.

Install the latest stable version of MongoDB.

Issue the following command:

sudo apt-get install -y mongodb-org
Install a specific release of MongoDB.

To install a specific release, you must specify each component package individually along with the version number, as in the following example:

sudo apt-get install -y mongodb-org=3.2.10 mongodb-org-server=3.2.10 mongodb-org-shell=3.2.10 mongodb-org-mongos=3.2.10 mongodb-org-tools=3.2.10
If you only install mongodb-org=3.2.10 and do not include the component packages, the latest version of each MongoDB package will be installed regardless of what version you specified.

Pin a specific version of MongoDB.

Although you can specify any available version of MongoDB, apt-get will upgrade the packages when a newer version becomes available. To prevent unintended upgrades, pin the package. To pin the version of MongoDB at the currently installed version, issue the following command sequence:

echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-org-shell hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
5
(Ubuntu 16.04-only) Create systemd service file

NOTE
Follow this step ONLY if you are running Ubuntu 16.04.
Create a new file at /lib/systemd/system/mongod.service with the following contents:

[Unit]
Description=High-performance, schema-free document-oriented database
After=network.target
Documentation=https://docs.mongodb.org/manual

[Service]
User=mongodb
Group=mongodb
ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

[Install]
WantedBy=multi-user.target



1
Start MongoDB.

Issue the following command to start mongod:

sudo service mongod start
2
Verify that MongoDB has started successfully

Verify that the mongod process has started successfully by checking the contents of the log file at /var/log/mongodb/mongod.log for a line reading

[initandlisten] waiting for connections on port <port>
where <port> is the port configured in /etc/mongod.conf, 27017 by default.

3
Stop MongoDB.

As needed, you can stop the mongod process by issuing the following command:

sudo service mongod stop
4
Restart MongoDB.

Issue the following command to restart mongod:

sudo service mongod restart
5
Begin using MongoDB.

To help you start using MongoDB, MongoDB provides Getting Started Guides in various driver editions. See Getting Started for the available editions.

Before deploying MongoDB in a production environment, consider the Production Notes document.

Later, to stop MongoDB, press Control+C in the terminal where the mongod instance is running.
