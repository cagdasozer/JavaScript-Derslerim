let ogrenci = {
  ad: "Çağdaş",
  soyad: "Özer",
  yas: 26,
  email: "cagdas@cagdas.com",
  dersler: ["mat", "fizik", "kimya"],
  login() {
    console.log("Öğrenci Giriş Yaptı.");
  },
  logout() {
    console.log("Öğrenci Çıkış Yaptı.");
  },
  printLessons() {
    console.log(this.dersler);
    //console.log(this);
    this.dersler.forEach((ders) => {
      console.log(ders);
    });
  },
};

//console.log(this)
ogrenci.printLessons();
