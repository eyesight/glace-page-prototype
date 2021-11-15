import ScrollHeader from './Class/ScrollHeader';
import Cursor from './Class/Cursor';

window.onload = () => {
  //new App();
  new ScrollHeader();
  new Cursor({
    hoverEl: '.tiles__anchor',
    cursor: '.custom-cursor',
    cursorEye: '.custom-cursor__eye',
    className: 'is-visible'
  });
}

