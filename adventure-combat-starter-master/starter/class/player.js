const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');
 
class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    const item = this.currentRoom.getItemByName(itemName);

    if (item) {
      this.items.push(item);
      this.currentRoom.items = this.currentRoom.items.filter(item => item.name !== itemName);
    }
  }

  dropItem(itemName) {
    const item = this.getItemByName(itemName);

    if (item) {
      this.items = this.items.filter(item => item.name !== itemName);
      this.currentRoom.items.push(item);
    }
  }

  eatItem(itemName) {
    const item = this.getItemByName(itemName);

    if (item && item.isFood) {
      this.items = this.items.filter(item => item.name !== itemName);
    }
  }

  getItemByName(name) {
    return this.items.find(item => item.name === name);
  }

  hit(name) {
    this.enemies = this.currentRoom.getEnemies();
    const enemy = this.enemies.find(enemy => enemy.name === name);
    enemy.attackTarget = this;
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
