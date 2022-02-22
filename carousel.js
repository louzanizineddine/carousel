// Grabbing dom elements 

const forwardMove  = document.querySelector('.forward-icon');
const backMove = document.querySelector('.back-icon');
const sponsorsCards = document.querySelectorAll('.sponsor-card');


const disableButtons = function() {
    if (sponsorsCards[sponsorsCards.length - 1].classList.contains('active')) {
        forwardMove.disabled = true;
    } else {
        forwardMove.disabled = false;
    }

    if (sponsorsCards[0].classList.contains('active')) {
        backMove.disabled = true;
    } else {
        backMove.disabled = false;
    }
}

const handelForwardMove = function () {
    let firstActiveCard = document.querySelectorAll('.active')[0]
    let lastActivecard = document.querySelectorAll('.active')[2]

    sponsorsCards.forEach((element , i) => {
        if ((element === lastActivecard) && ( i != sponsorsCards.length - 1)) {
            firstActiveCard.classList.remove('active');
            firstActiveCard.classList.add('hide-card')
            sponsorsCards[i + 1].classList.remove('hide-card');
            sponsorsCards[i + 1].classList.add('active');
        }
    });

    disableButtons()
}

const handelBackMove = function () {
    let firstActiveCard = document.querySelectorAll('.active')[0]
    let lastActivecard = document.querySelectorAll('.active')[2]
    sponsorsCards.forEach((element , i) => {
        if ((element === firstActiveCard) && ( i != 0)) {
            lastActivecard.classList.remove('active');
            lastActivecard.classList.add('hide-card')
            sponsorsCards[i - 1].classList.remove('hide-card');
            sponsorsCards[i - 1].classList.add('active');
        }
    });
    disableButtons()
}



forwardMove.addEventListener('click' , handelForwardMove)

backMove.addEventListener('click' , handelBackMove)