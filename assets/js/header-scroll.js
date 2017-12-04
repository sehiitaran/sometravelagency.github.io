window.onscroll = function () {
	var html = document.documentElement, body = document.body;
	var header = document.querySelector('.header');
	if(html.scrollTop>100||body.scrollTop>100) {
		header.classList.add('header-scroll');
	}else{
		header.classList.remove('header-scroll');
	} 
}