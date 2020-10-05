// Soal kesatu

const luaslingkaran = (jarijari) =>{
    let phi = 3.14;
    
    return phi * jarijari*jarijari;
}

const kelilinglingkaran = (jarijari) =>{
    let phi = 3.14;
    
    return 2 * phi * jarijari;
}

console.log("Luas lingkaran dengan jari-jari 5 adalah " + luaslingkaran(5));
console.log("Keliling lingkaran dengan jari-jari 5 adalah " + kelilinglingkaran(5));


// Soal kedua

let kalimat = "";

const tambahkata = (kata)=>{
    kalimat += kata;
}

tambahkata("saya ");
tambahkata("adalah ");
tambahkata("seorang ");
tambahkata("frontend ");
tambahkata("developer ");

console.log(kalimat)


// Soal ketiga

const newFunction = function literal(firstName, lastName){
    return {
      firstName,
      lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 

//   Soal keempat

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

  // Driver code

const {firstName, lastName, destination, occupation, spell} = newObject

console.log(newObject)

// Soal kelima

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]

//Driver Code
console.log(combined)