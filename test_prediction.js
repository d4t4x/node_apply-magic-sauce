var filesystem = require('fs');
var Client = require('node-rest-client').Client;
var client = new Client();
// secrets format: { "customer_id": 1111, "api_key": "string", "token": "" }
var secrets = require('./secrets.json');
var trait = "BIG5,Satisfaction_Life,Intelligence,Age,Female,Gay,Lesbian,Concentration,Politics,Religion,Relationship";
var uid = 1111111111; //e.g. 4 is Mark Zuckerberg's unique Facebook ID
var likes = [
    // contributors
    "18807449704", // Mashable
    "115384328477363", // The Creators Project
    "7976226799", // The Daily Show
    "10429446003", // The xx
    "5878552155", // Ludovico Einaudi
    "6815841748", // Barack Obama
    "35481394342", // The Godfather
    "9328458887", // adidas Originals
    "12463674069", // Curly Fries
    // not contributors s. result in prediction.json
    "124955570892789", // Bernie Sanders
    "102099916530784", // Humans of New York
];

function getPrediction() {
    // https://applymagicsauce.com/documentation_technical.html
    var args = {
        data: likes,
        headers: {
            "X-Auth-Token": secrets.token,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };
    client.post("http://api-v2.applymagicsauce.com/like_ids?interpretations=true&contributors=true&traits=" + trait + "&uid=" + uid,
        args,
        function(data, response) {
            console.log(response.statusCode);
            console.log(data);
        });
}

getPrediction(secrets.token);
