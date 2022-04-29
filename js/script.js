const themeSwitcher = document.querySelector('#theme-switcher');

const setContent = (content) => {
    switch(content) {
        case 'dark':
            document.querySelector('.btn .icon').classList.remove('fas','fa-moon');
            document.querySelector('.btn .icon').classList.add('fas','fa-sun');
            document.querySelector('.btn .text').textContent = 'Aydınlık tema';
            break;
        case 'light':
            document.querySelector('.btn .icon').classList.remove('fas','fa-sun');
            document.querySelector('.btn .icon').classList.add('fas','fa-moon');
            document.querySelector('.btn .text').textContent = 'Karanlık tema';
            break;
        default:
            alert('Hata oluştu!');
            break;
    }
}

const checkDarkMode = () => {
    if(localStorage.getItem('dark-mode') === 'true') {
        document.documentElement.classList.add('dark-mode');
        setContent('dark');
    } else {
        document.documentElement.classList.remove('dark-mode');
        setContent('light');

    }
};

const setDarkMode = () => {
    document.documentElement.classList.toggle('dark-mode');
    if(document.documentElement.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
        setContent('dark');
    } else {
        localStorage.removeItem('dark-mode');
        setContent('light');
    }
};

document.addEventListener('DOMContentLoaded', checkDarkMode);
themeSwitcher.addEventListener('click', setDarkMode);