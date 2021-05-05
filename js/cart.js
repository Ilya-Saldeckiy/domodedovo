document.querySelectorAll('.card__buy-btn').forEach(function(cart){
    cart.addEventListener('click', function(event){
        document.querySelectorAll('.cart-number').forEach(function(tabContent) {
            tabContent.classList.add('open-cart')
        })
    })
})

document.querySelectorAll('.researches__btn').forEach(function(cart){
    cart.addEventListener('click', function(event){
        document.querySelectorAll('.cart-number').forEach(function(tabContent) {
            tabContent.classList.add('open-cart')
        })
    })
})


$(function() {
	$('select').selectric({
		disableOnMobile: false,
		nativeOnMobile: false
	});
});