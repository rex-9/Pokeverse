import pokemon from '../Assets/pokemon.png';

const mobile = () => {
  const brandContainer = document.querySelector('.logo-container');
  const desktopNav = document.querySelector('.nav-ul');
  const mobileContainer = document.querySelector('.mobile-menu');
  const cancelBtn = document.querySelector('.cancel');
  const hamburger = document.querySelector('.menu');
  const logo = new Image();
  logo.src = pokemon;
  logo.classList.add('logo');
  brandContainer.appendChild(logo);
  hamburger.addEventListener('click', () => {
    mobileContainer.style.display = 'flex';
    desktopNav.style.display = 'none';
  });
  cancelBtn.addEventListener('click', () => {
    mobileContainer.style.display = 'none';
    desktopNav.style.display = 'flex';
  });
};

export default mobile;
