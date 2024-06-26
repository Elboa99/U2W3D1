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

/* creare classe pet*/

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  sameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const form = document.querySelector("form");
const petList = document.createElement("ul");
document.body.appendChild(petList);

form.onsubmit = function (e) {
  e.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  const petItem = document.createElement("li");
  petItem.textContent =
    "Name: " +
    newPet.petName +
    ", Owner: " +
    newPet.ownerName +
    ", Species: " +
    newPet.species +
    ", Breed: " +
    newPet.breed;
  petList.appendChild(petItem);
  form.reset();
};
