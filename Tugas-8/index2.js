var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise

var time = 10000
var i = 0


const runReadBooks = (time) => {
    readBooksPromise(time, books[i])
    .then((timebaru) => {
        if(timebaru !== 1000){
            i++;
            runReadBooks(timebaru);
        }  
    })
};


runReadBooks(time);