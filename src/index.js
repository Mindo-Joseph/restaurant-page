import './style.css';
import addcontents from './pageload';
import menupage from './menu';
import contactPage from './contact';

addcontents();
const renderContent = (event) => {
  const content = document.querySelector('#content');
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }
  switch (event.target.innerHTML) {
    case 'Home':
      addcontents();
      break;
    case 'Menu':
      menupage();
      break;
    case 'Contact':
      contactPage();
      break;
    default:
      addcontents();
  }
};
const tabs = document.querySelectorAll('.tab-links');
tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    renderContent(event);
  });
});
