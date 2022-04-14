import { onNavigate } from '../Router.js';

export const Register = () => {
  const RegisterDiv = document.createElement('div');
  const nodoH2 = document.createElement('h2');
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Return Home';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });

  nodoH2.textContent = 'Welcome to register';

  RegisterDiv.append(nodoH2, buttonHome);
  return RegisterDiv;
};