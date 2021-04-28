$('.clean-input').click(function(e) {
	$(".input-active").removeClass("input-active");
});

var input = $('#input');

input.on('input', function() {
		var inp = $('#input').val();
		if (inp) {
      $('.clean-input').addClass('input-active');
		} else {
			$('.clean-input').removeClass('input-active');
		}
	});

var mySwiper = new Swiper('.first-slider', {
	direction: 'horizontal',
	slidesPerView: 1,
	loop: true,
	// spaceBetween: 200,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	autoplay: {
		delay: 4500,
	},
})

$('.btn__header-sign').click(function () {
    location.href = "record-doctors.html";
});

$('.footer-btn').click(function () {
    location.href = "feedback.html";
});



$(function () {
	$('#modal-open-1').click(function () {
	  $('#modal-1').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-1').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-1').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-1').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#modal-open-2').click(function () {
	  $('#modal-2').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-2').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-2').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-2').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#modal-open-3').click(function () {
	  $('#modal-3').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-3').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-3').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-3').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#modal-open-4').click(function () {
	  $('#modal-4').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-4').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-4').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-4').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#modal-open-5').click(function () {
	  $('#modal-5').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-5').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-5').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-5').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#modal-open-6').click(function () {
	  $('#modal-6').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-6').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-6').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-6').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#modal-open-7').click(function () {
	  $('#modal-7').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-7').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-7').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-7').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#modal-open-8').click(function () {
	  $('#modal-8').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-8').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-8').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-8').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn__second-modal').forEach(function(tabs){
        tabs.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.text-btn').forEach(function(tabContent) {
                tabContent.classList.remove('active-btn-modal')
            })

            document.querySelector(`[data-target='${path}']`).classList.add('active-btn-modal')
        })
    })
})

$('.btn__second-modal').click(function(){
    const path = event.currentTarget.dataset.path
    $(this).addClass('btn__is-active');
    $('.btn__second-modal').not(this).removeClass('btn__is-active');
})