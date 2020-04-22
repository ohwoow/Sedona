const 
      buttonOpenMenu = document.querySelector('.button-open'),
      navMobile = document.querySelector('.nav-mobile'),
      buttonClosedMenu = document.querySelector('.button-closed'),
      modalError = document.getElementById('modal-error'),
      modalSuccess = document.getElementById('modal-success'),
      sendBtn = document.querySelector('.form__btn-send'),
      form = document.getElementById('form-main'),
      closeModal = document.getElementById('modal-close');


buttonOpenMenu.addEventListener('click', function () {
    navMobile.classList.toggle('active');
    buttonOpenMenu.classList.toggle('active');
    buttonClosedMenu.classList.add('active');
});

buttonClosedMenu.addEventListener('click', function () {
    buttonClosedMenu.classList.remove('active');
    buttonOpenMenu.classList.remove('active');
    navMobile.classList.remove('active');
});



if (sendBtn) {
    sendBtn.addEventListener('click', function () {
        modalSuccess.classList.add('active');
    });
}

if (closeModal) {
    closeModal.addEventListener('click', function() {
        modalSuccess.classList.toggle('active');
    });
}

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });
    
}