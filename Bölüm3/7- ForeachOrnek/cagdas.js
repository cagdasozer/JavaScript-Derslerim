const ulum = document.querySelector(".main");

let ogrencilerim = ["cagdas", "ulas", "mihriban"];

let html = ``;

ogrencilerim.forEach((ogrenci) => {
  html += `<li>${ogrenci}</li>`;
});

console.log(html);

ulum.innerHTML = html;