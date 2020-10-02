// Soal Pertama

function halo(){
    return "Halo Sanbers!";
}

console.log(halo());

// Soal Kedua

function kalikan(a,b){
    return a*b;
}

var num1 = 12;
var num2 = 4;
 
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// Soal Ketiga

function introduce(name, age, address, hobby){
    var intro = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
    return intro;
}


var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

// Soal Keempat

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var arrayObj = {
    nama : "Asep",
    "jenis kelamin" : "laki-laki",
    hobi : "baca buku",
    "tahun lahir" : 1992
}

console.log(arrayObj);


// Soal Kelima

var buah = [
    { 
        nama : "strawberry", warna : "merah", 
        "ada bijinya" : "tidak", harga : 9000
    },
    { 
        nama : "jeruk", warna : "oranye", 
        "ada bijinya" : "ada", harga : 8000
    },
    { 
        nama : "Semangka", warna : "Hijau & Merah", 
        "ada bijinya" : "ada", harga : 10000
    },
    { 
        nama : "Pisang", warna : "Kuning", 
        "ada bijinya" : "tidak", harga : 5000
    }
]

console.log(buah[0]);

// Soal Keenam

var dataFilm = [];

function tambahdatafilm(nama, durasi, genre,tahun){
    dataFilm.push({nama : "Terminator", durasi : "125 menit", genre : "fiksi ilmiah", tahun : "2019"});
    dataFilm.push({nama : "Avengers", durasi : "200 menit", genre : "fiksi ilmiah", tahun : "2019"});
}

tambahdatafilm("nama", "durasi", "genre","tahun");
console.log(dataFilm);