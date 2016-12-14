var filesystem = require('fs');
var data = [];

function randomNumbers() {
    for (var i = 0; i < 200; i++) {
        data.push({num: Math.random() * 10000})
    }
    saveData();
}

function saveData() {
    filesystem.writeFile("./test_fs.json", JSON.stringify(data, null, 2), function(){
        console.log("data saved");
    });
}

randomNumbers();
