export class Task {
  private name: string = '';
  private description: string = '';

  constructor(name: string, description: string) {
    this.name = name;
    if (description != '') this.description = '>>> ' + description;
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
