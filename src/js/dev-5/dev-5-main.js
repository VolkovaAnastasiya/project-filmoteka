console.log(`5`);
import { Spinner } from 'spin.js';
import 'spin.js/spin.css';

const opts = {
  lines: 11, // The number of lines to draw
  length: 35, // The length of each line
  width: 14, // The line thickness
  radius: 46, // The radius of the inner circle
  scale: 1.45, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 0.8, // Rounds per second
  rotate: 35, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#ffffff', // CSS color or array of colors
  fadeColor: '#df9e43', // CSS color or array of colors
  top: '36%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 2px black', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

// import { Spinner } from 'spin.js';
// import opts from '../dev-5/dev-5-main';
// const target = document.getElementById('spinner');
// const spinner = new Spinner(opts).spin(target);
// spinner.spin(false)

export default opts;
