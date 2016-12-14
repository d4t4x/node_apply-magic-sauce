    var probabilities = ["Religion_Lutheran", "Relationship_Yes", "Concentration_Engineering", "Religion_Jewish", "Gay", "Politics_Liberal", "Concentration_Psychology", "Concentration_Law", "Concentration_IT", "Lesbian", "Religion_Catholic", "Concentration_Nursing", "Concentration_Journalism", "Female", "Politics_Conservative", "Concentration_Biology", "Concentration_Art", "Politics_Libertanian", "Relationship_None", "Concentration_Finance", "Religion_Mormon", "Relationship_Married", "Religion_None", "Religion_Christian_Other", "Concentration_Education", "Concentration_History", "Concentration_Business", "Politics_Uninvolved"];

    var percentiles = ["BIG5_Extraversion", "BIG5_Agreeableness", "BIG5_Neuroticism", "BIG5_Conscientiousness", "BIG5_Openness", "Satisfaction_Life", "Intelligence"];

    function round3(v) {
        return Math.round(v * 1000) / 1000;
    }

    function percentileOrProbability(trait) {
        if (probabilities.indexOf(trait) != -1) {
            return "Prob";
        } else if (percentiles.indexOf(trait) != -1) {
            return "Perc";
        } else {
            return "Num";
        }
    }

    function interpretations(_interpretations) {
        for (var i = 0; i < _interpretations.length; i++) {
            var row = _interpretations[i];
            var trait = row.trait;
            var value = row.value;
            if (!isNaN(value)) {
                value = round3(value);
            }
            var div = '<tr><td>' + trait + '<span class="perc"> (Perc)</span></td><td>' + value + '</td></tr>';
            $("#interpretations").append(div);
        }
    }

    function predictions(_predictions, _contributors) {
        for (var i = 0; i < _predictions.length; i++) {
            // console.log(_predictions[i].trait, _contributors[i].trait);

            var row = _predictions[i];
            var trait = row.trait;
            var value = row.value;
            if (!isNaN(value)) {
                value = round3(value);
            }

            var pos = "";
            var neg = "";
            _.forEach(_contributors[i].positive, function(id) {
                pos += '<a target="_blank" href="http://facebook.com/' + id + '">' + id + '</a>  ';
            });
            _.forEach(_contributors[i].negative, function(id) {
                neg += '<a target="_blank" href="http://facebook.com/' + id + '">' + id + '</a>  ';
            })

            var type = percentileOrProbability(trait);

            var div = '<tr><td>' + trait + '<span class="' + type.toLowerCase() + '"> (' + type + ')</span></td><td>' + value + '</td><td class="">' + neg + '</td><td class="">' + pos + '</td></tr>';
            $("#predictions").append(div);
        }
    }

    $.getJSON("../prediction.json", function(data) {
        interpretations(_.sortBy(data.interpretations));
        predictions(_.sortBy(data.predictions, ["trait"]), _.sortBy(data.contributors, ["trait"]));
    });
