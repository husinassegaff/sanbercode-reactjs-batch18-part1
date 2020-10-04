// Soal kesatu

var daftarNama = [];

function tambahdaftarnama(nama, jenisKelamin, panggilan){
    daftarNama.push({nama : "Asep", jenisKelamin : "Pria", panggilan : "Bapak"});
    daftarNama.push({nama : "Siti", jenisKelamin : "Wanita", panggilan : "Ibu"});
    daftarNama.push({nama : "Yeni", jenisKelamin : "Wanita", panggilan : "Ibu"});
    daftarNama.push({nama : "Rudi", jenisKelamin : "Pria", panggilan : "Bapak"});
    daftarNama.push({nama : "Adit", jenisKelamin : "Pria", panggilan : "Bapak"});
}

tambahdaftarnama("nama", "jenisKelamin", "panggilan");

for(var i = 0; i<5; i++){
    i = i + 1;
    console.log(i + ". " + daftarNama[i-1].panggilan + " " + daftarNama[i-1].nama)
    --i;
}

// soal kedua "buatlah daftar alat tulis dengan menggunakan perulangan WHILE"

var daftarAlatTulis = ["2 = Pensil", "5 = Penghapus", "3 = Bulpoin", "4 = Spidol", "1 = Pengggaris"];
var i = 1;

while(i <= 5){
    switch(i){
        case 1: {console.log("Daftar Alat tulis ke-"+ daftarAlatTulis[4]); break;}
        case 2: {console.log("Daftar Alat tulis ke-"+ daftarAlatTulis[0]); break;}
        case 3: {console.log("Daftar Alat tulis ke-"+ daftarAlatTulis[2]); break;}
        case 4: {console.log("Daftar Alat tulis ke-"+ daftarAlatTulis[3]); break;}
        case 5: {console.log("Daftar Alat tulis ke-"+ daftarAlatTulis[1]); break;}
    }
    i++;
}

// Soal ketiga "buatlah function perhitungan luas lingkaran, luas segitiga dan luas persegi. sesuaikan parameternya dan tampilkan panggil functionnya dengan console.log lengkap dengan mengisi parameternya"

function luaslingkaran(jarijari){
    return 3.14 * jarijari;
}

function luassegitiga(alas,tinggi){
    return alas * tinggi / 2;
}

function luaspersegi(sisi){
    return sisi * sisi;
}

var sisi = 4;
var alas = 5;
var tinggi = 8;
var jarijari = 10;

console.log("Luas segitiga = " + luassegitiga(alas,tinggi));
console.log("Luas persegi = " + luaspersegi(sisi));
console.log("Luas lingkaran = " + luaslingkaran(jarijari));

// Soal keempat

var pesertaLomba = [];

function tambahpesertaLomba(nama, jenisKelamin, tinggi){
    pesertaLomba.push({nama : "Budi", jenisKelamin : "Pria", tinggi : "172 cm"});
    pesertaLomba.push({nama : "Susi", jenisKelamin : "Wanita", tinggi : "162 cm"});
    pesertaLomba.push({nama : "Agung", jenisKelamin : "Pria", tinggi : "175 cm"});
}

tambahpesertaLomba("nama", "jenisKelamin", "tinggi");
console.log(pesertaLomba);