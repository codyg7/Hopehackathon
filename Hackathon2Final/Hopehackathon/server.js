
var button = document.querySelector('.button')
// First Day  
var date= document.querySelector('.date')

var types = document.querySelector('.types')
var inSeason = document.querySelector('.inSeason')
var typesGrass = document.querySelector('.typesGrass')
var grassCategory =document.querySelector('.grassCategory')

var types2 = document.querySelector('.types2')
var inSeason2 = document.querySelector('.inSeason2')
var typesTrees = document.querySelector('.typeTrees')
var treeCategory =document.querySelector('.treeCategory')

var types3 = document.querySelector('.types3')
var inSeason3 = document.querySelector('.inSeason3')
var typesWeeds = document.querySelector('.typeWeeds')
var weedCategory =document.querySelector('.weedCategory')

// Second Day  
var date2= document.querySelector('.date2')

var types4 = document.querySelector('.types4')
var inSeason4 = document.querySelector('.inSeason4')
var typesGrass4 = document.querySelector('.typesGrass4')
var grassCategory4 =document.querySelector('.grassCategory4')

var types5 = document.querySelector('.types5')
var inSeason5 = document.querySelector('.inSeason5')
var typesTrees5 = document.querySelector('.typeTrees5')
var treeCategory5 =document.querySelector('.treeCategory5')

var types6 = document.querySelector('.types6')
var inSeason6 = document.querySelector('.inSeason6')
var typesWeeds6 = document.querySelector('.typeWeeds6')
var weedCategory6 =document.querySelector('.weedCategory6')

// Third Day 
var date3= document.querySelector('.date3')

var types7 = document.querySelector('.types7')
var inSeason7 = document.querySelector('.inSeason7')
var typesGrass7 = document.querySelector('.typesGrass7')
var grassCategory7 =document.querySelector('.grassCategory7')

var types8 = document.querySelector('.types8')
var inSeason8 = document.querySelector('.inSeason8')
var typesTrees8 = document.querySelector('.typeTrees8')
var treeCategory8 =document.querySelector('.treeCategory8')

var types9 = document.querySelector('.types9')
var inSeason9 = document.querySelector('.inSeason9')
var typesWeeds9 = document.querySelector('.typeWeeds9')
var weedCategory9 =document.querySelector('.weedCategory9')



button.addEventListener('click',function(){
    fetch('https://api.breezometer.com/pollen/v2/forecast/daily?lat=35.13385&lon=-81.01888&key=e561179c01f44c33a3ca65bb96eb383f&days=3&features=types_information,plants_information')
    .then(response=>response.json())
     .then(metadata => 
      {
// First Day        
        var dateValue = metadata['data'][0]['date'];
        
        var typesValue = metadata ['data'][0]['types']["grass"]['display_name'];
        var inSeasonValue = metadata ['data'][0]['types']["grass"]['in_season'];
        var typesGrassValue = metadata ['data'][0]['types']["grass"]['index']['value']
        var grassCategoryValue = metadata ['data'][0]['types']["grass"]['index']['category']
        
        var types2Value = metadata ['data'][0]['types']["tree"]['display_name'];
        var inSeason2Value = metadata ['data'][0]['types']["tree"]['in_season'];
        var typesTreeValue = metadata ['data'][0]['types']["tree"]['index']['value']
        var treeCategoryValue = metadata ['data'][0]['types']["tree"]['index']['category']

        var types3Value = metadata ['data'][0]['types']["weed"]['display_name'];
        var inSeason3Value = metadata ['data'][0]['types']["weed"]['in_season'];
        var typesWeedValue = metadata ['data'][0]['types']["weed"]['index']['value']
        var weedCategoryValue = metadata ['data'][0]['types']["weed"]['index']['category']

// Second Day
        var date2Value = metadata['data'][1]['date'];

        var types4Value = metadata ['data'][1]['types']["grass"]['display_name'];
        var inSeason4Value = metadata ['data'][1]['types']["grass"]['in_season'];
        var typesGrass4Value = metadata ['data'][1]['types']["grass"]['index']['value']
        var grassCategory4Value = metadata ['data'][1]['types']["grass"]['index']['category']

        var types5Value = metadata ['data'][1]['types']["tree"]['display_name'];
        var inSeason5Value = metadata ['data'][1]['types']["tree"]['in_season'];
        var typesTree5Value = metadata ['data'][1]['types']["tree"]['index']['value']
        var treeCategory5Value = metadata ['data'][1]['types']["tree"]['index']['category']

        var types6Value = metadata ['data'][1]['types']["weed"]['display_name'];
        var inSeason6Value = metadata ['data'][1]['types']["weed"]['in_season'];
        var typesWeed6Value = metadata ['data'][1]['types']["weed"]['index']['value']
        var weedCategory6Value = metadata ['data'][1]['types']["weed"]['index']['category']

// Third Day
        var date3Value = metadata['data'][2]['date'];

        var types7Value = metadata ['data'][2]['types']["grass"]['display_name'];
        var inSeason7Value = metadata ['data'][2]['types']["grass"]['in_season'];
        var typesGrass7Value = metadata ['data'][2]['types']["grass"]['index']['value']
        var grassCategory7Value = metadata ['data'][2]['types']["grass"]['index']['category']

        var types8Value = metadata ['data'][2]['types']["tree"]['display_name'];
        var inSeason8Value = metadata ['data'][2]['types']["tree"]['in_season'];
        var typesTree8Value = metadata ['data'][2]['types']["tree"]['index']['value']
        var treeCategory8Value = metadata ['data'][2]['types']["tree"]['index']['category']

        var types9Value = metadata ['data'][2]['types']["weed"]['display_name'];
        var inSeason9Value = metadata ['data'][2]['types']["weed"]['in_season'];
        var typesWeed9Value = metadata ['data'][2]['types']["weed"]['index']['value']
        var weedCategory9Value = metadata ['data'][2]['types']["weed"]['index']['category']  

// First Day  
        date.innerHTML = 'Date: ' + dateValue;
        types.innerHTML = 'Pollen Type '+typesValue;
        inSeason.innerHTML= 'In Season: '+inSeasonValue;
        typesGrass.innerHTML = 'Forecast Level 1-5: ' + typesGrassValue;
        grassCategory.innerHTML='Severeness: '+grassCategoryValue;

        types2.innerHTML = 'Pollen Type '+ types2Value;
        inSeason2.innerHTML= 'In Season: '+inSeason2Value;
        typesTrees.innerHTML = 'Forecast Level 1-5:' +typesTreeValue;
        treeCategory.innerHTML= 'Severeness: '+ treeCategoryValue;

        types3.innerHTML = 'Pollen Type '+types3Value;
        inSeason3.innerHTML= 'In Season: '+inSeason3Value;
        typesWeeds.innerHTML = 'Forecast Level 1-5: '+ typesWeedValue
        weedCategory.innerHTML= 'Severeness: '+ weedCategoryValue;

// Second Day
        date2.innerHTML = 'Date: ' + date2Value;
        types4.innerHTML = 'Pollen Type '+types4Value;
        inSeason4.innerHTML= 'In Season: '+inSeason4Value;
        typesGrass4.innerHTML = 'Forecast Level 1-5: ' + typesGrass4Value;
        grassCategory4.innerHTML='Severeness: '+grassCategory4Value;

        types5.innerHTML = 'Pollen Type '+ types5Value;
        inSeason5.innerHTML= 'In Season: '+inSeason5Value;
        typesTrees5.innerHTML = 'Forecast Level 1-5:' +typesTree5Value;
        treeCategory5.innerHTML= 'Severeness: '+ treeCategory5Value;

        types6.innerHTML = 'Pollen Type '+types6Value;
        inSeason6.innerHTML= 'In Season: '+inSeason6Value;
        typesWeeds6.innerHTML = 'Forecast Level 1-5: '+ typesWeed6Value;
        weedCategory6.innerHTML= 'Severeness: '+ weedCategory6Value;

// Third Day
        date3.innerHTML = 'Date: ' + date3Value;
        types7.innerHTML = 'Pollen Type '+types7Value;
        inSeason7.innerHTML= 'In Season: '+inSeason7Value;
        typesGrass7.innerHTML = 'Forecast Level 1-5: ' + typesGrass7Value;
        grassCategory7.innerHTML='Severeness: '+grassCategory7Value;

        types8.innerHTML = 'Pollen Type '+ types8Value;
        inSeason8.innerHTML= 'In Season: '+inSeason8Value;
        typesTrees8.innerHTML = 'Forecast Level 1-5:' +typesTree8Value;
        treeCategory8.innerHTML= 'Severeness: '+ treeCategory8Value;

        types9.innerHTML = 'Pollen Type '+types9Value;
        inSeason9.innerHTML= 'In Season: '+inSeason9Value;
        typesWeeds9.innerHTML = 'Forecast Level 1-5: '+ typesWeed9Value;
        weedCategory9.innerHTML= 'Severeness: '+ weedCategory9Value;
    })    

})
// function Reco() {
//   var x = document.getElementsByClassName('ProductContainer');
//   if (x.style.display === 'none') {
//     x.style.display = 'block';
//   } else {
//     x.style.display = 'none';
//   }
// }



// const express = require("express");
// const request = require("request");
// const bodyParser = require('body-parser')
// const fetchUrl = require("fetch").fetchUrl;
// const app = express();

// const apiKey = "e561179c01f44c33a3ca65bb96eb383f";
// const lat = 35.13385;
// const long = -81.01888;
// const days = 1;
// let url ='https://api.breezometer.com/pollen/v2/forecast/daily?lat=35.13385&lon=-81.01888&key=e561179c01f44c33a3ca65bb96eb383f&days=1&features=types_information,plants_information';
// let url = `https://api.breezometer.com/pollen/v2/forecast/daily?lat=${lat}&lon=${long}&key=${apiKey}&days=${days}&features=types_information,plants_information`;


// fetchUrl(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => console.log(err))



// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.post('/', (req, res) => {
//     request(url, (err, response, body) => {

//     })
// })

// request(url, (err, response, body) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log("body", body);
//   }
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`This server is running on ${port}`);
// });
