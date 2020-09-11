export default function contactPage() {
  const contactdiv = document.createElement('div');
  contactdiv.className = 'contact';
  const headTag = document.createElement('h1');
  headTag.textContent = 'Contact Us';
  contactdiv.appendChild(headTag);
  const content = document.getElementById('content');
  content.appendChild(contactdiv);

  const messageForm = document.createElement('form');
  const name = document.createElement('input');
  name.setAttribute('type', 'text');
  name.setAttribute('name', 'full name');
  const email = document.createElement('input');
  email.setAttribute('type', 'email');
  email.setAttribute('email', 'Your email address');
  const text = document.createElement('input');
  text.setAttribute('type', 'text');
  text.setAttribute('placeholder', 'Your message');
  const submit = document.createElement('button');
  submit.textContent('Submit');
  messageForm.appendChild(name);
  messageForm.appendChild(email);
  messageForm.appendChild(text);
  messageForm.appendChild(submit);

  const footer = document.createElement('footer');
  footer.textContent = 'Eatery Restaurant. All rights reserved';

  content.appendChild(messageForm);
  content.appendChild(footer);
}
