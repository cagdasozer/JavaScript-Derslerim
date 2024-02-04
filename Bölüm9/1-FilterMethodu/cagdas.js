const points = [40, 50, 60, 70, 80, 90, 100];

const studentsPassed = points.filter(point => point > 60);
console.log(studentsPassed);


const students = [
    {name: 'Çağdaş', passed: true},
    {name: 'Ulaş', passed: false},
    {name: 'Fatma', passed: true},
    {name: 'Kemal', passed: false},
];

const passingStudent=students.filter(S => {
    return S.passed;
})
console.log(passingStudent);