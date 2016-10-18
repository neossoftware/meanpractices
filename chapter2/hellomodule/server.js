var hello = require('./hello');
fs = require('fs');

//this function is part of hello module (hello.js)
hello.sayHello();


fs.readFile('/etc/hosts', 'utf8', function(err, data) {
  console.log('Testing FS library');
    if (err) {
        return console.log(err);
    }
    console.log(data);
});


fs.readFile('/etc/shadow', 'utf8', function(err, data) {
  console.log('Testing Err');
    if (err) {
        return console.log(err);
    }
    console.log(data);
});

//invoke node server.js
