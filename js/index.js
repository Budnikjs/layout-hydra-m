document.querySelector('.header-info__tech-button').addEventListener('click', function techBtn() {
    document.querySelector('.tech-hard').classList.toggle('showTechGirl');
    if(document.querySelector('.showTechGirl')){
        document.querySelector('.tech-hard').style.transition = 'all 2s ease';
    }
    document.querySelector('.header-info__tech-key').classList.toggle('arrow-rotate'); 
});
