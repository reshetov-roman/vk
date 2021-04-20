// аккордеон для анкеты myPage
$('.myPage-wrapper__hide-activ').click(() => {
  $('.myPage-wrapper__show-block').slideToggle(600);
});

// меняем название по клику
$('.myPage-wrapper__hide-activ').click(function(){
  if (!$(this).data('status')) {
  	$(this).html('Закрыть подробную иформацию');
    $(this).data('status', true);
  }
  else {
  	$(this).html('Показать подробную иформацию');
    $(this).data('status', false);
  }
});

// fansybox
$(document).ready(function() {
  $('[data-fancybox="gallery"]').fancybox({
    loop : true,
    buttons : [ 
      'slideShow',
      'zoom',
      'fullScreen',
      'close'
    ],
    thumbs : {
      autoStart : true,
    }
  });
});

