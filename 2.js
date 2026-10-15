class Profile {
  constructor(name, nick) {
    this.name = name;
    this.nick = nick;
  }

  info() {
    return this.name + " — @" + this.nick;
  }
}
const profile1 = new Profile("patrick Jane", "mrjane");
const profile2 = new Profile("Jane Doe", "jdoe");
const profile3 = new Profile("John Smith", "jsmith");
const profile4 = new Profile("Alice Johnson", "ajohnson");
const profile5 = new Profile("Bob Williams", "bwilliams");
const profile6 = new Profile("Charlie Brown", "cbrown");
const profile7 = new Profile("cristiano Ronaldo", "cr7");
console.log(profile1.info());
console.log(profile2.info());
console.log(profile3.info());
console.log(profile4.info());
console.log(profile5.info());
console.log(profile6.info());
console.log(profile7.info());
