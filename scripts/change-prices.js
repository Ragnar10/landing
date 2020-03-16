(() =>{
    let changeTrial = document.querySelector('.content__form-trial-button');
    let changeAnnual = document.querySelector('.content__form-annual-plan-button');
    let formTrial = document.querySelector('.content__form-trial');
    let formAnnual = document.querySelector('.content__form-annual-plan');

    changeTrial.addEventListener('click', () => {
        formTrial.style.display = 'none';
        formAnnual.style.display = 'flex';
    });
    changeAnnual.addEventListener('click', () => {
        formTrial.style.display = 'flex';
        formAnnual.style.display = 'none';
    });
})();