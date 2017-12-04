
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav-toggle');
var modalOverlay = document.querySelector('.modal-overlay');
var mainHeader = document.querySelector('header');


navToggle.addEventListener('click', function() {
	if(navMain.classList.contains('main-nav-open')){
		navMain.classList.remove('main-nav-open');
		navToggle.classList.remove('main-nav-toggle-open');
		navToggle.classList.add('main-nav-toggle-close');
		modalOverlay.classList.remove('modal-overlay-show');
		mainHeader.classList.remove('header-none');

		
	}else{
		navMain.classList.add('main-nav-open');
		navToggle.classList.remove('main-nav-toggle-close');
		navToggle.classList.add('main-nav-toggle-open');
		modalOverlay.classList.add('modal-overlay-show');
		mainHeader.classList.add('header-none');
		
		
	}
});