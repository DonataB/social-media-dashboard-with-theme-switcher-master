
const toggleSwitch = document.querySelector('input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('theme');
    }
     
}

toggleSwitch.addEventListener('change', switchTheme);
