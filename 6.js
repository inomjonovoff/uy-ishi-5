class Student {
  constructor(name, points) {
    this.name = name;
    this.points = points;
  }

  passed() {
    if (this.points >= 60) {
      return true;
    } else {
      return false;
    }
  }
}

const student = new Student(66);
const student1 = new Student("Alisher", 75);
const student2 = new Student("Vali", 50);
const student3 = new Student("Jasur", 80);
const student4 = new Student("Muslima", 80);
const student5 = new Student("Madina", 45);
const student6 = new Student("Ozod", 34);
const student7 = new Student("Behruz", 86);
const student8 = new Student("Jane", 100);

console.log(student.passed());
console.log(student1.passed());
console.log(student2.passed());
console.log(student3.passed());
console.log(student4.passed());
console.log(student5.passed());
console.log(student6.passed());
console.log(student7.passed());
console.log(student8.passed());
