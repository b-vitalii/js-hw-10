import menuData from "../menu.json";
import menuTemplate from "../templates/template.hbs";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}

let refs = {
  themeToggle : document.querySelector('#theme-switch-toggle'),
  jsMenu : document.querySelector(".js-menu")
}

getThemeLS()
refs.themeToggle.addEventListener('change', changeTheme);
refs.jsMenu.insertAdjacentHTML('afterbegin', menuTemplate(menuData));

function changeTheme() {
  (!refs.themeToggle.checked) ? (localStorage.setItem('Theme', document.body.classList = Theme.LIGHT)) :
    (localStorage.setItem('Theme', document.body.classList = Theme.DARK))
  }
   
function getThemeLS() {
  (localStorage.getItem('Theme') !== Theme.LIGHT) ? 
    (document.body.classList = Theme.DARK, refs.themeToggle.checked=true) : (document.body.classList = Theme.LIGHT)
  }
  


