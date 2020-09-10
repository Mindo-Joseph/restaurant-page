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

  const content = document.getElementById('content');
  nav.appendChild(linksSection);
  content.appendChild(nav);
}
