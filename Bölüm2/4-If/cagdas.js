const yas = 26;
if (yas > 18) {
  console.log("18 yaşından büyüktür.");
}

console.log("---------")

const adSoyad = ["çağdaş", "ulaş", "Mihriban"];
if (adSoyad.length > 2) {
  console.log("İsimler.");
}

console.log("---------")

const sifre = "asd";
if (sifre.length >= 8) {
  console.log("Şifre yeterince uzun");
} else {
  console.log("Şifreyi yeniden giriniz");
}

console.log("---------")

const yeniSifre = "asdasdasdasdasd";
if (yeniSifre.length >= 12) {
  console.log("Şifre güçlü");
} else if (yeniSifre.length >= 8) {
  console.log("Şifreyi yeterli");
}
else{
    console.log("Şifreyi yeniden giriniz");
}
