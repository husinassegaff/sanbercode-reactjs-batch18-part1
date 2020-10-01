// Soal Pertama

var flag = 2;

console.log('LOOPING PERTAMA');
while (flag <= 20){
    console.log(flag + ' - I love coding');
    flag = flag + 2;
}

flag= flag - 2;
console.log('LOOPING KEDUA');
while (flag >= 2){
    console.log(flag + ' - I will become a frontend developer');
    flag = flag - 2;
}

// Soal Kedua

for(var angka = 1; angka <= 20; angka++){
    if(angka%2 == 1 && angka%3 != 0){
        console.log(angka + ' - Santai');
    }

    else if(angka%2 == 0){
        console.log(angka + ' - Berkualitas');
    }

    else if(angka%2 == 1 && angka%3 == 0){
        console.log(angka + ' - I Love Coding');
    }
}

// Soal Ketiga

for(var i = 1; i <= 7; i++){
        console.log('#'.repeat(i));
}

// Soal Keempat

var kalimat="saya sangat senang belajar javascript";
var arr = kalimat.split(' ');

console.log(arr);

// Soal Kelima

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var i = 1;

while(i <= 5){
    switch(i){
        case 1: {console.log(daftarBuah[4]); break;}
        case 2: {console.log(daftarBuah[0]); break;}
        case 3: {console.log(daftarBuah[2]); break;}
        case 4: {console.log(daftarBuah[3]); break;}
        case 5: {console.log(daftarBuah[1]); break;}
    }
    i++;
}