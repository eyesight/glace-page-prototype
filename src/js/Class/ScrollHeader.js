import Helper from "../Helper";

class ScrollHeader {
  constructor() {
    this.header = document.querySelector('.header');
    this.body = document.querySelector('body');
    this.content = document.querySelector('.content');
    this.lastKnownScrollPosition = 0;
    this.isAnimated = false;
    this.headerClass = 'header--small';

    if (this.header) {
      this.bindEvents();
    }
  }

  bindEvents() {
    let headerheight = this.header.offsetHeight;
    this.lastKnownScrollPosition = window.scrollY;
    this.addClass(this.lastKnownScrollPosition, headerheight);
    this.animate = true;

    document.addEventListener('scroll', (e) => {
      this.lastKnownScrollPosition = window.scrollY;
      this.addClass(this.lastKnownScrollPosition, headerheight);
      this.moveHeader(this.lastKnownScrollPosition, headerheight);
    });
  }

  addClass(lastKnownScrollPosition, headerheight) {
    if (lastKnownScrollPosition > headerheight) {
      Helper.addClass(this.body, this.headerClass);
    } else {
      Helper.removeClass(this.body, this.headerClass);
    }
  }

  moveHeader(lastKnownScrollPosition, headerheight) {
    if ((lastKnownScrollPosition > headerheight)) {
      if (this.animate) {
        this.header.animate([
          {
            transform: `translateY(${0 - lastKnownScrollPosition}px)`
          },
          {
            transform: `translateY(0)`
          }],
          {
            duration: 750
          });
        this.animate = false;
      }
      this.header.style.transform = `translateY(0px)`;
    } else {
      this.header.style.transform = `translateY(${0 - lastKnownScrollPosition}px)`;
      this.animate = true;
    }
  }
}

export default ScrollHeader;