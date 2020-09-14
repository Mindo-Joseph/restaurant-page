import Plate from './img/plate.jpeg';
import FramedFood from './img/framedfood.jpg';

export default function addcontents() {
  // main section
  const main = document.createElement('main');
  main.className = 'main';

  const introSection = document.createElement('div');
  introSection.className = 'introduction-section';
  const introText = document.createElement('div');
  introText.className = 'intro-text';
  const tagline = document.createElement('h1');
  tagline.textContent = 'ENJOY DELICIOUS FOOD';
  const supportText = document.createElement('p');
  supportText.textContent = 'Voted the best restaurant in town';
  introText.appendChild(tagline);
  introText.appendChild(supportText);
  introSection.appendChild(introText);
  // Introduction image

  const introImage = document.createElement('div');
  introImage.className = 'intro-image';
  const plate = new Image();
  plate.src = Plate;
  introImage.appendChild(plate);
  introSection.appendChild(introImage);
  // About section
  const about = document.createElement('div');
  about.className = 'about';
  const framedImage = new Image();
  framedImage.src = FramedFood;
  about.appendChild(framedImage);
  const aboutText = document.createElement('div');
  aboutText.className = 'about-text';
  const paragraph = document.createElement('p');
  paragraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
  lobortis, lacus eu ultrices ultrices, nisi leo pretium risus, eu
  elementum velit erat et metus. Nunc nec placerat erat. Vestibulum
  interdum eleifend quam, ut pulvinar leo dictum in. Praesent
  placerat porta mi vel suscipit. Fusce iaculis vulputate sapien id
  tincidunt. Maecenas lobortis sollicitudin mi ut`;
  aboutText.appendChild(paragraph);
  about.appendChild(aboutText);
  const content = document.getElementById('content');
  main.appendChild(introSection);
  main.appendChild(about);
  content.appendChild(main);
}
