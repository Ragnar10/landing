(() => {
    // date
    let date = new Date();
    let year = date.getFullYear().toString().slice(2);
    let month = (date.getMonth() + 1).toString();
    let number_true = false;
    let month_true = false;
    let year_true = false;
    let name_true = false;
    let surname_true = false;

    // wrong image show
    let wrong = document.createElement('img');
    wrong.src = './images/wrong.svg';
    wrong.alt = 'wrong';
    wrong.style.width = '24px';
    wrong.style.height = '24px';
    wrong.style.position = 'absolute';
    wrong.style.top = '28px';
    wrong.style.right = '26px';
    let wrong_number = wrong.cloneNode();
    let wrong_name = wrong.cloneNode();
    let wrong_surname = wrong.cloneNode();
    let wrong_monthYear = wrong.cloneNode();

    // success image show
    let success = document.createElement('img');
    success.src = './images/success.svg';
    success.alt = 'success';
    success.style.width = '20px';
    success.style.height = '20px';
    success.style.position = 'absolute';
    success.style.top = '30px';
    success.style.right = '28px';
    let success_number = success.cloneNode();
    let success_name = success.cloneNode();
    let success_surname = success.cloneNode();
    let success_monthYear = success.cloneNode();

    // error info show
    function ErrorMin(length) {
        let error_min = document.createElement('span');
        error_min.style.display = 'inline-block';
        error_min.style.margin = '0 80px 0 0';
        error_min.style.color = 'red';
        error_min.style.fontSize = '10px';
        error_min.style.lineHeight = '14px';
        error_min.innerHTML = `Minimum length ${length}`;
        return error_min;
    }
    function ErrorInfo(item) {
        let error_info = document.createElement('span');
        error_info.style.display = 'inline-block';
        error_info.style.margin = '0';
        error_info.style.color = 'red';
        error_info.style.fontSize = '10px';
        error_info.style.lineHeight = '14px';
        switch (item) {
            case 'number':
                error_info.innerHTML = 'Credit card number is not valid';
                break;
            case 'date':
                error_info.innerHTML = 'You entered incorrect date';
                break;
            case 'name':
                error_info.innerHTML = 'You entered incorrect name';
                break;
            case 'surname':
                error_info.innerHTML = 'You entered incorrect surname';
                break;
            default:
                error_info.innerHTML = 'You entered incorrect data';
        }
        return error_info;
    }


    // change inputs and check year and month
    let error_date = ErrorInfo('date');
    let form = document.querySelector('.form');
    form.addEventListener('change', (e) => {
        card_number.style.width = '219px';
        card_number.style.marginRight = '57px';
        user_name.style.width = '219px';
        user_name.style.marginRight = '57px';
        user_surname.style.width = '219px';
        user_surname.style.marginRight = '57px';
        card_month.style.width = '120px';
        card_year.style.width = '80px';
        card_year.style.marginRight = '57px';

        if (e.target === card_year || e.target === card_month) {
            if (card_year.value < year) {
                success_monthYear.remove();
                card_year.style.borderColor = '#E24C2C';
                card_year.after(wrong_monthYear);
                card_month.after(error_date);
                year_true = false;
            } else if (card_year.value <= year && card_month.value < month) {
                success_monthYear.remove();
                card_month.style.borderColor = '#E24C2C';
                card_year.style.borderColor = '#E24C2C';
                card_year.after(wrong_monthYear);
                card_month.after(error_date);
                year_true = false;
                month_true = false;
            } else {
                wrong_monthYear.remove();
                error_date.remove();
                card_month.style.borderColor = '#2F7E74';
                card_year.style.borderColor = '#2F7E74';
                card_year.after(success_monthYear);
                year_true = true;
                month_true = true;
            }
        }

        if (number_true && month_true && year_true && name_true && surname_true) {
            submit.style.opacity = '1';
        } else {
            submit.style.opacity = '0.6';
        }
    });

    // check number card
    let min_number = ErrorMin(16);
    let error_number = ErrorInfo('number');
    card_number.addEventListener('change', (e) => {
        let number_length = e.target.value.length;
        if (number_length < 16 || number_length > 16 || isNaN(e.target.value)) {
            success_number.remove();
            card_number.style.borderColor = '#E24C2C';
            card_number.after(wrong_number);
            card_number.after(error_number);
            card_number.after(min_number);
            number_true = false;
        } else {
            min_number.remove();
            error_number.remove();
            wrong_number.remove();
            card_number.style.borderColor = '#2F7E74';
            card_number.after(success_number);
            number_true = true;
        }
    });

    // check name
    let min_name = ErrorMin(2);
    let error_name = ErrorInfo('name');
    user_name.addEventListener('change', (e) => {
        let number_length = e.target.value.length;
        let value = e.target.value;
        let regexp = /[a-zA-Zа-яА-Я]/g;
        let valueText = value.match(regexp);
        if (number_length < 2 || number_length > 20 || value.length !== valueText.length) {
            success_name.remove();
            user_name.style.borderColor = '#E24C2C';
            user_name.after(wrong_name);
            user_name.after(error_name);
            user_name.after(min_name);
            name_true = false;
        } else {
            min_name.remove();
            error_name.remove();
            wrong_name.remove();
            user_name.style.borderColor = '#2F7E74';
            user_name.after(success_name);
            name_true = true;
        }
    });

    // check surname
    let min_surname = ErrorMin(2);
    let error_surname = ErrorInfo('surname');
    user_surname.addEventListener('change', (e) => {
        let number_length = e.target.value.length;
        let value = e.target.value;
        let regexp = /[a-zA-Zа-яА-Я]/g;
        let valueText = value.match(regexp);
        if (number_length < 2 || number_length > 20 || value.length !== valueText.length) {
            success_surname.remove();
            user_surname.style.borderColor = '#E24C2C';
            user_surname.after(wrong_surname);
            user_surname.after(error_surname);
            user_surname.after(min_surname);
            surname_true = false;
        } else {
            min_surname.remove();
            error_surname.remove();
            wrong_surname.remove();
            user_surname.style.borderColor = '#2F7E74';
            user_surname.after(success_surname);
            surname_true = true;
        }
    });

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (number_true && month_true && year_true && name_true && surname_true) {
            console.log('Your data is submit');
        } else {
            return;
        }
    });
})();