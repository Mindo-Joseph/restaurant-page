export default function addcontents() {
  const nav = document.createElement('nav');
  const logo = document.createElement('h4');
  logo.textContent = 'Eatery';
  nav.appendChild(logo);

  const linksSection = document.createElement('div');
  linksSection.className = 'links';
  const linkItems = document.createElement('ul');

  const linkNames = ['Home', 'Menu', 'About'];
  for (let i = 0; i < linkNames.length; i += 1) {
    const link = linkNames[i];
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(link));
    linkItems.appendChild(li);
  }
  linksSection.appendChild(linkItems);
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
  const content = document.getElementById('content');
  nav.appendChild(linksSection);
  content.appendChild(nav);
  content.appendChild(introSection);
}
