export default function contactPage() {
  const contactdiv = document.createElement('div');
  contactdiv.className = 'contact';
  const headTag = document.createElement('h1');
  headTag.textContent = 'Contact Us';
  contactdiv.appendChild(headTag);
  const content = document.getElementById('content');
  content.appendChild(contactdiv);

  const messageForm = document.createElement('form');
  messageForm.className = 'form';
  const name = document.createElement('input');
  name.setAttribute('type', 'text');
  name.setAttribute('placeholder', 'full name');
  const email = document.createElement('input');
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Your email address');
  const text = document.createElement('input');
  text.setAttribute('type', 'text');
  text.setAttribute('placeholder', 'Your message');
  const submit = document.createElement('button');
  submit.className = 'submit-btn';
  submit.textContent = 'Submit';
  messageForm.appendChild(name);
  messageForm.appendChild(email);
  messageForm.appendChild(text);
  messageForm.appendChild(submit);

  const footer = document.createElement('footer');
  footer.textContent = 'Eatery Restaurant. All rights reserved';

  content.appendChild(messageForm);
  content.appendChild(footer);
}
