const yeniSifre = "asdasdasasda!.d";
if (yeniSifre.length >= 12 && yeniSifre.includes("!")) {
  console.log("Şifre çok güçlü");
} else if (yeniSifre.length >= 8) {
  console.log("Şifreyi yeterli");
} else {
  console.log("Şifreyi yeniden giriniz");
}


const control = false;
if (!control) {
  console.log("Kontrol başarılı");
}
