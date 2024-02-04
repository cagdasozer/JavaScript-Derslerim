const points = [40, 50, 60, 70, 80, 90];

const newPoints = points.map(P => {
    return P + 10 ;
});
console.log(newPoints);

const students = [
    {name: 'Çağdaş', point: 90},
    {name: 'Ulaş', point: 40},
    {name: 'Fatma', point: 85},
    {name: 'Kemal', point: 10},
];

const newStudentsPoint = students.map(S => {
    if (S.point<50) {
        S.point += +10;
        return S;
        // return {name:S.name , point:S.point + 10}
    }
    else{
        return S
    }
});

console.log(newStudentsPoint)