class Score {
  constructor(name) {
    this.name = name;
    this.points = 0;
  }

  add(points) {
    this.points = this.points + points;
  }
}
const score1 = new Score("Lisbon");
const score2 = new Score("michael");

score1.add(12);
score1.add(32);
score2.add(43);
score2.add(2);

console.log(score1.points);
console.log(score2.points);
