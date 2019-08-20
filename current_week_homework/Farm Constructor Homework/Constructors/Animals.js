export default class FarmAnimal{
  constructor(name, image, talk){
    this.name = name;
    this.image = image;
    this.talk = function() {
			alert(talk);
		};
  }
}

export class Kitten extends FarmAnimal{
  constructor(name, image, talk){
    super(name, image, talk)
  }
}

export class Tabby extends Kitten{
  constructor(name, image, talk){
    super(name, image, talk)
  }
}

export class Calico extends Kitten{
  constructor(name, image, talk){
    super(name, image, talk)
  }
}

export class Pig extends FarmAnimal{
  constructor(name, image, talk){
    super(name, image, talk)

  }
}

export class Cow extends FarmAnimal{
  constructor(name, image, talk){
    super(name, image, talk)
  }
}

export class Dog extends FarmAnimal{
  constructor(name, image, talk){
    super(name, image, talk)
  }
}
