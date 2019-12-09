var cp = require('child_process');
var progs = {
    list: 'ls',
    copy: 'cp',
    folder: 'mkdir'
}

var path = require('path');
const name = ['aba', 'csd', 'oefa', 'fef'];

//var child2 = cp.spawn(progs.list);
//const spawn = require('child_process').spawn;

const spawn = require('child_process').spawn;
const child = spawn('node', ['childPro2.js'], {
    stdio : ['pipe', 'pipe', 'pipe', 'ipc']
});
//var child2 = spawn('childPro2.js');
//var child = cp.spawn(progs.list, ["-a"]); 
//var child = cp.spawn(progs.list, ["-a"], {cwd:".."}); 




//var child = cp.fork('childPro.js', name);


child.on('message', (data) => {
    console.log("FORK => message =>");
    console.log(`parent => ${data}`);
    if(typeof data === "string") {
        if(data === "Message from child : workerStart") {
            // prometheus.cronReqCounters('dp_closure');
            console.log('dp_closure');
        }
        else if(data === "Server Error form worker") {
            // prometheus.errorLogger('dp_closure', 'Server Error');
            console.log('erver Error 0-0-0--0')
        }
    }
    else {
        // prometheus.errorLogger(data.function ,data.message);
        console.log(`data ${data.method} and this ${data.message}`);
    }
});

child.on('exit', () => {
    console.log(`exit`);
});

// child2.on('exit', () => {
//     console.log('exit');
// })