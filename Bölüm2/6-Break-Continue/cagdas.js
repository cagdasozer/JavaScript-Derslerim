const notlar = [15, 45, 75, 20, 100, 90, 46];

for (let i = 0; i < notlar.length; i++) {
  if (notlar[i] === 75) {
    continue;
  }

  console.log(notlar[i]);

  if (notlar[i] === 100) {
    console.log("Bravo en yüksek notu sen aldın!");
    break;
  }
}
