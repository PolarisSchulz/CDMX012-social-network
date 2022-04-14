import { onNavigate } from '../Router.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const nodoH1 = document.createElement('h1');
  const buttonRegister = document.createElement('button');

  buttonRegister.textContent = 'registrate';
  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  nodoH1.textContent = 'Welcome my social network';
  HomeDiv.append(nodoH1, buttonRegister);
  return HomeDiv;
};