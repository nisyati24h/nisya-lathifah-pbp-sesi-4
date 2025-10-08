let studentsScore = [
    { name: 'Andi', score: 90 },
    { name: 'Rudi', score: 80 },
    { name: 'Dira', score: 100 }
]

let maxStudent = studentsScore[0]; 
for (let i = 1; i < studentsScore.length; i++) {
    if (studentsScore[i].score > maxStudent.score) {
        maxStudent = studentsScore[i];
    }
}

console.log("Siswa dengan nilai tertinggi:");
console.log("Nama:", maxStudent.name);
console.log("Nilai:", maxStudent.score);
