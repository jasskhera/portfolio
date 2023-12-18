if (localStorage.getItem('primaryColor')) {
    document.documentElement.style.setProperty('--primaryColor', localStorage.getItem('primaryColor'));
}

if (localStorage.getItem('secondaryColor')) {
    document.documentElement.style.setProperty('--secondaryColor', localStorage.getItem('secondaryColor'));
}