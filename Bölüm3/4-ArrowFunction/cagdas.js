// const kareAlani = function (kenar) {

//   return kenar**2
// };

const kareAlani = (kenar) => kenar ** 2;
const sonuc = kareAlani(6);

console.log(sonuc);

const ozeerc = () => "Çağdaş";

const sonuc1 = ozeerc();
console.log(sonuc1);

// const fatura = function (urunler, vergi) {
//   let toplam = 0;
//   for (let i = 0; i < urunler.length; i++) {
//     toplam += urunler[i] + urunler[i] * vergi;
//   }
//   return toplam;
// };

const fatura = (urunler, vergi) => {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};

console.log(fatura([10, 20, 30], 0.25));
