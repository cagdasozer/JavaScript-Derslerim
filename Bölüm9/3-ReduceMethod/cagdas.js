const points = [40, 50, 60, 70, 80, 90];

const result = points.reduce((value, point) => {
  if (point > 50) {
    value++;
  }
  return value;
}, 0);

console.log(result);

const students = [
  { name: "Çağdaş", point: 90 },
  { name: "Ulaş", point: 40 },
  { name: "Fatma", point: 85 },
  { name: "Kemal", point: 10 },
  { name: "Çağdaş", point: 50 },
  { name: "Ulaş", point: 70 },
  { name: "Fatma", point: 25 },
  { name: "Kemal", point: 95 },
];

const cagdasTotal = students.reduce((value, student) => {
  if (student.name == "Çağdaş") {
    value += student.point;
  }
  return value;
}, 0);

console.log(cagdasTotal);
