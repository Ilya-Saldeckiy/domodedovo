if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

	$(function () {
		$('#modal-open-9').click(function () {
			$('#modal-9').addClass('modal_active');
			$('body').addClass('hidden');
		});

		$('.popup-close1').click(function () {
			$('#modal-9').removeClass('modal_active');
			$('body').removeClass('hidden');
		  });
	});

	$('#1').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');

	});
	$('#2').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');

	});
	$('#3').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#4').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#5').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#6').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#7').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#8').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#9').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#10').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#11').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#12').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#13').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#14').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#15').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');

	});
	$('#16').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#17').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#18').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});

	$(function () {
		$('.filter-complex').click(function () {
		  $('.mobile-complex').addClass('modal_active-mobile');
		  $('body').addClass('hidden');
		});
	
		$('.mobile__close').click(function () {
		  $('.mobile-complex').removeClass('modal_active-mobile');
		  $('body').removeClass('hidden');
		});
	  });

	  $(function () {
		$('.filter-diseases').click(function () {
		  $('.mobile-deases').addClass('modal_active-mobile');
		  $('body').addClass('hidden');
		});
	
		$('.mobile__close').click(function () {
		  $('.mobile-deases').removeClass('modal_active-mobile');
		  $('body').removeClass('hidden');
		});
	  });

	  $(function () {
		$('.filter-group').click(function () {
		  $('.mobile-group').addClass('modal_active-mobile');
		  $('body').addClass('hidden');
		});
	
		$('.mobile__close').click(function () {
		  $('.mobile-group').removeClass('modal_active-mobile');
		  $('body').removeClass('hidden');
		});
	  });


}






$('.clean-input').click(function(e) {
	$(".input-active").removeClass("input-active");
});

$('.filter-reset-btn').click(function(e) {
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

var input = $('#input2');

input.on('input', function() {
		var inp = $('#input2').val();
		if (inp) {
      $('.clean-input').addClass('input-active');
		} else {
			$('.clean-input').removeClass('input-active');
		}
	})

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

$('.doctors-btn').click(function () {
    location.href = "record-doctors.html";
});

$('.btn__header-sign').click(function () {
    location.href = "record-doctors.html";
});

$('.btn__header-receive').click(function () {
    location.href = "get-results.html";
});

$('.footer-btn').click(function () {
    location.href = "feedback.html";
});

$('.cart-btn').click(function () {
    location.href = "cart.html";
});

$('.record__doctors-btn').click(function () {
    location.href = "open-results.html";
});

$('.phone__btn').click(function () {
    location.href = "tel:+74955040249";
});

// $(function () {
// 	$('.filter-diseases').click(function () {
// 		$(".filter-diseases-list").addClass("active-filter");
// 	  });

// 	$('.filter__popup-close').click(function(e) {
// 		$(".filter-diseases-list").removeClass("active-filter");
// 	});

// 	$('.filter-diseases-list').mouseup(function (e) {
// 		let modalContent = $(".filter__popup");
// 		if (modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
// 		  $('.filter-diseases-list').removeClass('active-filter');
// 		}
// 	  });
// 	  $(document).keydown(function(e) {
// 		  if (e.keyCode === 27) {
// 			  $('.filter-diseases-list').removeClass('active-filter');
// 		  }
// 	  });

// })

$(function () {
	$('.filter-diseases').click(function () {
	  $('#deases').addClass('filter_active');
	});

	$('.filter__popup-close').click(function () {
	  $('#deases').removeClass('filter_active');
	});

	$('#deases').mouseup(function (e) {
	  let modalContent = $(".filter__popup");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('filter_active');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#deases').removeClass('filter_active');
		}
	});
  });

  $(function () {
	$('.filter-complex').click(function () {
	  $('#complex').addClass('filter_active');
	});

	$('.filter__popup-close').click(function () {
	  $('#complex').removeClass('filter_active');
	});

	$('#complex').mouseup(function (e) {
	  let modalContent = $(".filter__popup");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('filter_active');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#complex').removeClass('filter_active');
		}
	});
  });

  $(function () {
	$('.filter-group').click(function () {
	  $('#group').addClass('filter_active');
	});

	$('.filter__popup-close').click(function () {
	  $('#group').removeClass('filter_active');
	});

	$('#group').mouseup(function (e) {
	  let modalContent = $(".filter__popup");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('filter_active');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#group').removeClass('filter_active');
		}
	});
  });



// $(function () {
// 	$('.filter-complex').click(function () {
// 		$(".filter-complex-list").addClass("active-filter");
// 	  });

// 	  $('.filter__popup-close').click(function(e) {
// 		$(".filter-complex-list").removeClass("active-filter");
// 		});
// })

// $(function () {
// 	$('.filter-group').click(function () {
// 		$(".filter-group-list").addClass("active-filter");
// 	  });

// 	  $('.filter__popup-close').click(function(e) {
// 		$(".filter-group-list").removeClass("active-filter");
// 		});
// })

$(function () {
	$('.burger').click(function () {
	  $('.section__header-menu').addClass('burger_active');
	  $('body').addClass('hidden');
	  $('body').addClass('overlay');
	});

	$('.close__burger').click(function () {
	  $('.section__header-menu').removeClass('burger_active');
	  $('body').removeClass('hidden');
	  $('body').removeClass('overlay');
	});

	// $('.nav__item').click(function () {
	// 	$('.section__header-menu').removeClass('burger_active');
	// 	$('body').removeClass('hidden');
	// 	$('body').removeClass('overlay');
	//   });

	// $('.section__header-menu').mouseup(function (e) {
	//   let modalContent = $(".section__header-menu");
	//   if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
	// 	$(this).removeClass('burger_active');
	// 	$('body').removeClass('hidden');
	// 	$('body').removeClass('overlay');
	//   }
	// });


	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('.section__header-menu').removeClass('burger_active');
	  		$('body').removeClass('hidden');
			  $('body').removeClass('overlay');
		}
	});
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

$(function () {
	$('#analiz-open-1').click(function () {
	  $('#analiz-1').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#analiz-1').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#analiz-1').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#analiz-1').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#analiz-open-2').click(function () {
	  $('#analiz-2').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#analiz-2').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#analiz-2').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#analiz-2').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#analiz-open-3').click(function () {
	  $('#analiz-3').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#analiz-3').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#analiz-3').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#analiz-3').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#analiz-open-4').click(function () {
	  $('#analiz-4').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#analiz-4').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#analiz-4').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#analiz-4').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#analiz-open-5').click(function () {
	  $('#analiz-5').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#analiz-5').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#analiz-5').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#analiz-5').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#analiz-open-6').click(function () {
	  $('#analiz-6').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#analiz-6').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#analiz-6').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#analiz-6').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

$(function () {
	$('#analiz-open-7').click(function () {
	  $('#analiz-7').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#analiz-7').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#analiz-7').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#analiz-7').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#analiz-open-8').click(function () {
	  $('#analiz-8').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#analiz-8').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#analiz-8').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#analiz-8').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });


  document.querySelector('#first-item').addEventListener('click', function () {
    document.querySelector('.item-1').classList.add('delete-item')
})

document.querySelector('#second-item').addEventListener('click', function () {
    document.querySelector('.item-2').classList.add('delete-item')
})

document.querySelector('#three-item').addEventListener('click', function () {
    document.querySelector('.item-3').classList.add('delete-item')
})

document.querySelector('#four-item').addEventListener('click', function () {
    document.querySelector('.item-4').classList.add('delete-item')
})

document.querySelector('#five-item').addEventListener('click', function () {
    document.querySelector('.item-5').classList.add('delete-item')
})


$(function () {
	$('.cart__item-1').click(function () {
	  $('#cart__item-1').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#cart__item-1').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#cart__item-1').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#cart__item-1').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('.cart__item-2').click(function () {
	  $('#cart__item-2').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#cart__item-2').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#cart__item-2').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#cart__item-2').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('.cart__item-3').click(function () {
	  $('#cart__item-3').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#cart__item-3').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#cart__item-3').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#cart__item-3').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('.cart__item-4').click(function () {
	  $('#cart__item-4').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#cart__item-4').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#cart__item-4').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#cart__item-4').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('.cart__item-5').click(function () {
	  $('#cart__item-5').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#cart__item-5').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#cart__item-5').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#cart__item-5').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('.cart__submit-btn').click(function () {
	  $('#cart__modal').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#cart__modal').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#cart__modal').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#cart__modal').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });