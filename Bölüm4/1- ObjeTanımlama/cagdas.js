let ogrenci = {
  ad: "Çağdaş",
  soyad: "Özer",
  yas: 26,
  email: "cagdas@cagdas.com",
  dersler: ["mat", "fizik", "kimya"],
};

console.log(ogrenci);
console.log(ogrenci.yas);

ogrenci.yas = 24;
console.log(ogrenci);
console.log(ogrenci.yas);
console.log(ogrenci["ad"]);

ogrenci["ad"] = "Ulaş";
console.log(ogrenci["ad"]);

console.log(typeof ogrenci);
