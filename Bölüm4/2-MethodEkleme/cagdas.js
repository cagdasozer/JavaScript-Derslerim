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
};

ogrenci.login();
ogrenci.logout();
