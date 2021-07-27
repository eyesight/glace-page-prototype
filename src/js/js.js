import Helper from './Helper';
import ScrollHeader from './Class/ScrollHeader';

class App {
  constructor() {
    this.bindEvents();
  }

  bindEvents() {
    console.log('hello2');
  }

}

window.onload = () => {
  //new App();
  new ScrollHeader();
}

