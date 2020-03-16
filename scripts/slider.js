(() => {
    let btn1 = document.getElementById('slider-check1');
    let btn2 = document.getElementById('slider-check2');
    let comments = document.querySelectorAll('.comments-slider__comments > div');
    let arrComments = Array.from(comments);
    let arrId = arrComments.map(({id}) => document.getElementById(id));

    let index_comments = 0;

    function nextComments() {
        if (index_comments >= arrId.length - 1) {
            index_comments = 0;
            arrId[index_comments].style.display = 'flex';
            return index_comments;
        }
        arrId[++index_comments].style.display = 'flex';
        return index_comments;
    }

    function prevComments() {
        if (index_comments === 0) {
            index_comments = arrId.length;
            arrId[--index_comments].style.display = 'flex';
            return index_comments;
        }
        arrId[--index_comments].style.display = 'flex';
        return index_comments;
    }

    btn1.addEventListener('click', () => {
        arrId.forEach((item) => item.style.display = 'none');
        prevComments();
    });
    btn2.addEventListener('click', () => {
        arrId.forEach((item) => item.style.display = 'none');
        nextComments();
    });
})();