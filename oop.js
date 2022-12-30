class Animal_Kingdom {
  constructor(backBone, withOutBackBone, coldBlooded, warmBlooded) {
    this.backBone;
    this.withOutBackBone;
    this.coldBlooded;
    this.warmBlooded;
  }

  getBackBone() {
    return this.backBone;
  }
  setBackBone(backBone) {
    this.backBone = backBone;
  }
  getWithOutBackBone() {
    return this.withOutBackBone;
  }
  setWithOutBackBone(withOutBackBone) {
    this.withOutBackBone = withOutBackBone;
  }
  getColdBlooded() {
    return this.coldBlooded;
  }
  setColdBlooded(coldBlooded) {
    this.coldBlooded = coldBlooded;
  }
  getWarmBlooded() {
    return this.warmBlooded;
  }
  setWarmBlooded(warmBlooded) {
    this.warmBlooded = warmBlooded;
  }
  alive = "we are all living things";
  breathing = "we all need oxygen to survive";
  static summary = "all other classes below are under the kingdom class";
}
let all = new Animal_Kingdom();
console.log(all);
all.setBackBone("they have back bone");
all.setWarmBlooded("they are warm-blooded in mature");
all.setColdBlooded("they are cold-blooded in nature");
all.setWithOutBackBone("they do not have back bone");
console.log(all.getBackBone());
class Mammals extends Animal_Kingdom {
  constructor(backBone, warmBlooded) {
    super(backBone, warmBlooded);
    this.warmBlooded = warmBlooded;
    let hasHair;
  }

  getHasHair() {
    return this.hasHair;
  }
  setHasHair(hasHair) {
    this.hasHair = hasHair;
  }
  getBackBone() {
    return all.getBackBone();
  }

  getWarmBlooded() {
    return all.getWarmBlooded();
  }
  warmBlooded = all.setBackBone();
  leg = "2 or 4 legs";
  eyes = "2 eyes";
}

let mammal = new Mammals();
mammal.setHasHair(true);
mammal.setBackBone(true);
mammal.setWarmBlooded("they are warm blooded in nature");
console.log(mammal);

class Fish extends Animal_Kingdom {
  constructor(
    backBone,

    coldBlooded
  ) {
    super(backBone, coldBlooded);

    this.backBone = backBone;

    this.coldBlooded = coldBlooded;
  }
  leg = "none";
  eyes = 2;
  fin = true;
}
let fish = new Fish("has back bone", "is cold blooded in nature");
console.log(fish);

class Aves extends Animal_Kingdom {
  constructor(warmBlooded, backBone) {
    super(warmBlooded, backBone);
    this.warmBlooded = warmBlooded;
    this.backBone = backBone;
    let eyes;
    let leg;
    let hasFeathers;
  }

  getEyes() {
    return this.eyes;
  }
  setEyes(eyes) {
    this.eyes = eyes;
  }

  getLeg() {
    return this.leg;
  }
  setLeg(leg) {
    this.leg = leg;
  }

  getHasFeathers() {
    return this.hasFeathers;
  }
  setHasFeathers(hasFeathers) {
    this.hasFeathers = hasFeathers;
  }
}

let pegion = new Aves("is warm blooded in nature", "has back bone");
console.log(pegion);
pegion.setEyes("has 2 eyes");
pegion.setHasFeathers(true);
console.log(pegion.getEyes());
console.log(pegion.getHasFeathers());

class Arthropoda extends Animal_Kingdom {
  constructor(coldBlooded, withOutBackBone) {
    super(coldBlooded, withOutBackBone);
  }
  getWithOutBackBone() {
    return this.backBone;
  }
  setWithOutBackBone(withOutBackBone) {
    this.withOutBackBone = withOutBackBone;
  }
  getColdBlooded() {
    return this.backBone;
  }
  setColdBlooded(coldBlooded) {
    this.coldBlooded = coldBlooded;
  }
  eyes = "mostly 2";
  leg = "more than 4 legs";
}
let ant = new Arthropoda();
ant.setWithOutBackBone("does not have a back bone");
ant.setColdBlooded("they are cold-blooded in nature");
console.log(ant);
class Amphibians extends Animal_Kingdom {
  constructor(coldBlooded, backBone) {
    super(coldBlooded, backBone);
    this.coldBlooded = coldBlooded;
    this.backBone = backBone;
  }
  eyes = 2;
  leg = "usually 4 legs";
}
let frog = new Amphibians("is cold-blooded in nature", true);
console.log(frog);

class Reptilia extends Animal_Kingdom {
  constructor(warmBlooded, backBone, leg) {
    super(warmBlooded, backBone);
    this.leg = leg;
  }
  getLeg() {
    return this.leg;
  }
  setLeg(leg) {
    this.leg = leg;
  }
  hasBacckBone() {
    console.log("it has");
  }
}

let lizard = new Reptilia();
lizard.setLeg("0-4 legs");
lizard.setBackBone(true);
lizard.setWarmBlooded("they are warm blooded in nature");

console.log(lizard);
