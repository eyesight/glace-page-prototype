import Helper from './Helper';

class App {
  constructor() {
    this.bindEvents();
  }

  bindEvents() {
    console.log('hello');
  }

}

window.onload = () => {
  new App();
}