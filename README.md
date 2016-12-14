# Using Node and Apply Magic Sauce API

Research Paper: http://www.pnas.org/content/110/15/5802.full.pdf?with-ds=yes

API documentation: https://applymagicsauce.com/documentation.html

Predicted Traits from Like IDs: https://applymagicsauce.com/documentation_traits.html

See what Facebook tells you it knows about you: https://www.facebook.com/ads/preferences/


##Instructions for setup

- get customer ID and API key at https://applymagicsauce.com/research.html
- open terminal
- type ```cd path/to/downloaded/folder``` and enter (learn more about terminal [here](http://mac.appstorm.net/how-to/utilities-how-to/how-to-use-terminal-the-basics/))
- in the terminal window type ```npm install```
- go to the downloaded folder and rename the file ```secrets_example.json``` to ```secrets.json```
- open the ```secrets.json``` file and paste in your Apply Magic Sauce ```customer_id``` and ```api_key```
    - leave the ```token``` for now
- in the terminal window type ```node app.js```

##Example Facebook Like IDs

18807449704 - Mashable

115384328477363 - The Creators Project

7976226799 - The Daily Show

10429446003 - The xx

5878552155 - Ludovico Einaudi

6815841748 - Barack Obama

35481394342 - The Godfather

9328458887 - adidas Originals

12463674069 - Curly Fries

124955570892789 - Bernie Sanders

102099916530784 - Humans of New York

https://developers.facebook.com/tools/explorer/

##View predictions in HTML format

This page will automatically grab the ```predictions.json``` file from the folder to display the data in a more readable format. It also adds links to the corresponding Facebook pages. So, e.g. Mashable can be accesed via http://facebook.com/18807449704.

- if you are not in the directory of the main folder, type ```cd path/to/downloaded/folder``` and enter
- type ```python -m SimpleHTTPServer``` and enter
- open browser at localhost:8000/public

