import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/appbar.css';
import '../styles/hero.css';
import '../styles/main.css';
import '../styles/detail.css';
import '../styles/review.css';
import '../styles/form.css';
import '../styles/footbar.css';
import '../styles/responsive.css';
import '../styles/asset.css';
import '../styles/loading.css';
import "./component/appbar";
import "./component/hero";
import "./component/footbar";
import App from './views/app';
import swRegister from './utils/sw-register';

// drawer configuration
const app = new App({
  button: document.querySelector('#menu'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('main'),
  drawer: document.querySelector('#drawer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
