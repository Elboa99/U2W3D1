class User {
  constructor(Firstname, Lastname, Age, Location) {
    this.Firstname = Firstname;
    this.Lastname = Lastname;
    this.Age = Age;
    this.Location = Location;
  }

  //metodo confronto età//

  compareAge(otherUser) {
    if (this.Age > otherUser.Age) {
      return this.Firstname + " " + " è più vecchio di" + " " + otherUser.Firstname;
    } else if (this.Age < otherUser.Age) {
      return this.Firstname + " " + "è più piccolo di" + " " + otherUser.Firstname;
    } else {
      return this.Firstname + "ha la stessa età di" + " " + otherUser.Firstname;
    }
  }
}

/* creazione oggetti a partire dalla classe User*/

const User1 = new User("Aldo", "Baglio", 65, "Palermo");
const User2 = new User("Giovanni", "Storti", 67, "Milano");
const User3 = new User("Giacomo", "Poretti", 68, "Villa Cortese");

/*Confronto età*/

console.log(User1.compareAge(User2));
console.log(User2.compareAge(User1));
console.log(User3.compareAge(User1));
