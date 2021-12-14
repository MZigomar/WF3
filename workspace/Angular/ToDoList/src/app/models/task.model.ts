export class Task {
  public name: string = '';
  public description: string = '';

constructor(name: string, description: string){
    this.name = name;
    this.description = description;
}

  setName(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  setDescription(description: string) {
    this.description = description;
  }
  getDescription() {
    return this.description;
  }
}
