var data = process.argv.slice(2);
// console.log(data);


function fun1(data) {
    data.forEach(element => {
        process.send(`Greeting ${element}`);
    });
} 

fun1(data);