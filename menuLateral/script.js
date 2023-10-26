const btnMenu = document.getElementById('btn-menu');
  const contMenu = document.querySelector('.cont-menu');

  btnMenu.addEventListener('click', function() {
    contMenu.style.transform = this.checked ? 'translateX(0)' : 'translateX(-100%)';
  });


  