// const dersler = [
//   { isim: "matematik", puan: 90 },
//   { isim: "fizik", puan: 100 },
//   { isim: "kimya", puan: 75 },
// ];

let ogrenci = {
  ad: "Çağdaş",
  soyad: "Özer",
  yas: 26,
  email: "cagdas@cagdas.com",
  dersler: [
    { isim: "matematik", puan: 90 },
    { isim: "fizik", puan: 100 },
    { isim: "kimya", puan: 75 },
  ],
  login() {
    console.log("Öğrenci Giriş Yaptı.");
  },
  logout() {
    console.log("Öğrenci Çıkış Yaptı.");
  },
  printLessons() {
    this.dersler.forEach((ders) => {
      console.log(ders.isim,ders.puan);
    });
  },
};

ogrenci.printLessons();
