import {HttpClient} from 'aurelia-http-client';

export class App {
  visibility = [];
  level = [];

  currentVisibility = 'Public';
  currentLevel = 'Activated';

  constructor() {
    this.message = 'Hello World!';

    let client = new HttpClient();

    client.get('data/visibility.json')
      .then(data => this.visibility = data.content.visibility);

    client.get('data/level.json')
      .then(data => this.level = data.content.level)
  }
}
