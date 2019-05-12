class Character {
  constructor(name) {
    this.name = name;
    this.alive = true;
  }
  changeName(newName) {
    this.name = newName;
  }
  die() {
    this.alive = false;
  }
  about() {
    console.log(`I am ${this.name} and I am ${this.alive ? "alive" : "dead"}.`);
  }
}

var jon = new Character("Jon Snow");

var eddard = new Character("Eddard Stark");

var arya = new Character("Arya Stark");

var sam = new Character("Samwell Tarly");

///We use the class function to create new objects. We can see the objects calling them

//We can invoke methods created in the class upon the characters:

eddard.about(); // eddard is alive

eddard.die(); // eddard dies

eddard.about(); // eddard is dead

arya.about();

arya.changeName("the girl has no name");

arya.name;

class Hero extends Character {
  constructor(name, sidekick, weapon) {
    super(name);
    this.sidekick = sidekick;
    this.weapon = weapon;
    this.saved = [];
  }
  save(person) {
    this.saved.push(person);
  }
  about() {
    console.log(
      `I am ${this.name} and I have ${this.weapon} and I am loyal to ${
        this.sidekick
      }.`
    );
  }
}

///The CONSTRUCTOR identifies which properties to build in the derived class Hero
///The SUPER refers back to the base class (character) and signals that the derived class (Hero) should take its name argument from the base class. 'name' will be inherited from Character, while 'sidekick' and 'weapon' will have to be explicitly bound within Hero to the new arguments given in the constructor

//Q: Why don't we need to write 'saved' in the constructor or the super?
//ANSWER: Because we are not binding it to an argument that we will pass in; we are binding it to an empty array

jon.about(); // John is still a character

jon = new Hero("Jon Snow", "Samwell Tarly", "Longclaw"); // Jon becomes a Hero

jon.about(); // Jon is a Hero and the Hero about method overwrites the Character about method

jon.changeName("Spoiler"); // Jon can still change his name (from the Character changeName method)

jon.about(); // Jon the Hero has a new name

jon.save("Free Folk"); //Jon saves the free folk

jon.saved;
