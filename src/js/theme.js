const bodyRef = document.querySelector('body')
const checkdoxRef = document.querySelector('#theme-switch-toggle')

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkdoxRef.addEventListener('change', changeThemeHandler)

function changeThemeHandler() {
    if (bodyRef.className === '') {
        bodyRef.classList.add('light-theme')
    } else {
        bodyRef.classList.toggle('light-theme')
        bodyRef.classList.toggle('dark-theme')
    }
    const currentTheme = bodyRef.getAttribute('class')
    localStorage.setItem('theme', currentTheme)
    
}

function restoreTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    bodyRef.classList.add(savedTheme);
  }

  if (savedTheme === 'dark-theme') {
    checkdoxRef.setAttribute('checked', true);
  }
}

restoreTheme();