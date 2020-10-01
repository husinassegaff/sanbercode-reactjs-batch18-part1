// Soal pertama

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var edit1 = kataKedua.charAt(0);
var edit2 = kataKedua.substr(1,6);
var edit3 = kataKeempat.toUpperCase();
 
edit1 = edit1.toUpperCase();
kataKedua = edit1.concat(edit2);
kataKeempat = edit3;

var gabung1 = kataPertama.concat(" ",kataKedua);
var gabung2 = kataKetiga.concat(" ",kataKeempat);
var total1 = gabung1.concat(" ",gabung2);

console.log(total1);

// Soal kedua

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var total2 = Number(kataPertama) + Number(kataKedua) + Number(kataKetiga) + Number(kataKeempat);
console.log(total2);

//Soal ketiga

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(3,14);
var kataKetiga = kalimat.substring(14,18);
var kataKeempat = kalimat.substring(18,24); 
var kataKelima = kalimat.substring(24,31);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

//Soal keempat

var nilai = 75;

if(nilai >= 80) console.log("A");

else if(nilai >= 70 && nilai < 80) console.log("B");

else if(nilai >= 60 && nilai < 70) console.log("c");

else if(nilai >= 50 && nilai< 60) console.log("D");

else if(nilai < 50) console.log("E");

//Soal kelima

var tanggal = 15;
var bulan = 2;
var tahun = 2001;

switch(bulan){
    case 1: {bulan = "Januari"; break;}
    case 2: {bulan = "Februari"; break;}
    case 3: {bulan = "Maret"; break;}
    case 4: {bulan = "April"; break;}
    case 5: {bulan = "Mei"; break;}
    case 6: {bulan = "Juni"; break;}
    case 7: {bulan = "Juli"; break;}
    case 8: {bulan = "Agustus"; break;}
    case 9: {bulan = "September"; break;}
    case 10: {bulan = "Oktober"; break;}
    case 11: {bulan = "November"; break;}
    case 12: {bulan = "Desember"; break;}
}

console.log(tanggal + " " + bulan + " " + tahun);