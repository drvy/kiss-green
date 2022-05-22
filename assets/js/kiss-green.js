const changeThemeBtn   = document.querySelector('.themeSwitch');
const currentThemeIcon = document.querySelector('#themeIcon');
let currentTheme       = document.documentElement.getAttribute('data-theme');


function loadThemeIcon() {
    const icon = (currentTheme === 'dark' ? '#sun' : '#moon');
    currentThemeIcon.setAttribute('href', icon);
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(currentTheme + '-theme');
    changeThemeBtn.style.display = 'inline-block';
};


changeThemeBtn.addEventListener('click', function(event) {
    event.preventDefault();

    currentTheme = (currentTheme === 'dark' ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', currentTheme);

    localStorage.setItem('theme', currentTheme);
    loadThemeIcon();
});


loadThemeIcon();
