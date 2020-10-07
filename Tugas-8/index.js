var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini

var time = 10000
var i = 0

function execute(time){
    readBooks(time,books[i],function(timebaru){
        if(timebaru > 0){
            execute(timebaru, i+= 1)
        }
    });
}

execute(10000, 0)