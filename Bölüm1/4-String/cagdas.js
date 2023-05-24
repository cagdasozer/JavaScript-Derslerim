console.log("Merhaba Dünya");

let email = "cagdasozer12@gmail.com";
console.log(email);


//BİRLEŞTİRME
let name = "Çağdaş";
let surname = "ÖZER";
let fullName = name + " " + surname;
console.log(fullName);


//Karakterleri Çekme 
console.log(fullName[0]);
console.log(fullName[7]);


//Kaç Karakter
console.log(fullName.length)
// if (fullName.length>0) {
//   console.log(fullName)
// }


//Methodlar
console.log(fullName.toUpperCase())
console.log(fullName.toLocaleLowerCase())
console.log(fullName)

let index = fullName.indexOf("Ö");
console.log("Ö'nün bulunduğu index: " + index)