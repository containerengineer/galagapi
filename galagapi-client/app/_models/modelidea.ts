export class Idea {
    id: number;
    category: String;
    title: String;
    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}