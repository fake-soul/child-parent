var fs = require("fs");

var data = "New File Contents";

process.send("Server Error form worker");



process.send({
  'method': 'dp_closure',
  'message': 'Releasing Lock'
});

fs.writeFile("temp.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.22222");
});