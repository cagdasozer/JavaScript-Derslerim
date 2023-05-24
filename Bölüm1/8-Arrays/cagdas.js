let isimler = ["Çağdaş", "Ulaş", "Mihriban"];
// console.log(isimler[0]);
// console.log(isimler[1]);

// isimler[1] = "Şehriban";

// console.log(isimler[1])

let yaslar = [3, 5, 7, 9];
// console.log(yaslar[3]);

let rastgele = ["çağdaş", "Özer", 14, 12];
// console.log(rastgele);

// console.log(rastgele.length)

let tireli = isimler.join("-");
console.log(tireli);

let virgullu = isimler.join(",");
console.log(virgullu);

let sıra = isimler.indexOf("Mihriban");
console.log(sıra);

let ekle = isimler.concat(["Şehriban", "Sibel"]);
console.log(ekle);

let elemanekle = isimler.push("Kemal");
console.log(isimler);

isimler.pop();
console.log(isimler);
