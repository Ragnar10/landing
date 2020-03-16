(() => {
    let link = document.querySelector('.header__link');
    let form = document.querySelector('.content__form');
    let prices = document.querySelector('.content__prices');

    let get_started_trial = document.querySelector(".content__prices-trial-button");
    let get_started_annual = document.querySelector(".content__prices-annual-plan-button");
    let formTrial = document.querySelector('.content__form-trial');
    let formAnnual = document.querySelector('.content__form-annual-plan');
    let toggle = true;
    get_started_trial.onclick = () => {
        toggle = false;
        prices.style.display = 'none';
        formTrial.style.display = 'none';
        formAnnual.style.display = 'flex';
        form.style.display = 'flex';
        link.innerHTML = 'Back to prices';
    };
    get_started_annual.onclick = () => {
        toggle = false;
        prices.style.display = 'none';
        formTrial.style.display = 'flex';
        formAnnual.style.display = 'none';
        form.style.display = 'flex';
        link.innerHTML = 'Back to prices';
    };

    link.onclick = () => {
        toggle = !toggle;
        if(!toggle) {
            prices.style.display = 'none';
            form.style.display = 'flex';
            link.innerHTML = 'Back to prices';
        } else {
            prices.style.display = 'flex';
            form.style.display = 'none';
            link.innerHTML = 'Edit details in your letter';
        }
        return toggle;
    };
})();