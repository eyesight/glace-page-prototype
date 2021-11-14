import Helper from "../Helper";

class Cursor {
  constructor(config = {}) {
    const {
      hoverEl,
      className,
      cursor,
      cursorEye
    } = config;
    this.hoverEls = [...document.querySelectorAll(hoverEl)];
    this.body = document.querySelector('body');
    this.cursor = document.querySelector(cursor);
    this.cursorEye = document.querySelector(cursorEye);
    this.mousePosition = { x: 0, y: 0 };
    this.className = className;

    if (this.hoverEls && this.hoverEls.length && this.cursor) {
      this.bindEvents();
    }
  }

  bindEvents() {
    document.addEventListener("mousemove", (event) => {
      this.mousePosition = this.getMouseposition(event);
      this.changeCursorStyle(this.cursor, this.mousePosition);
    });

    this.hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", (el) => {
        Helper.addClass(this.cursor, this.className);
      });
      el.addEventListener("mouseleave", (el) => {
        Helper.removeClass(this.cursor, this.className);
      });
    });
  }

  getMouseposition(event) {
    let mouse = { x: 0, y: 0 }
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    return mouse;
  }

  changeCursorStyle(cursor, mouse) {
    cursor.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0px)`;
  }
}

export default Cursor;