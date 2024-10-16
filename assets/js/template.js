document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk memicu animasi progress bar
    function animateProgressBars(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetValue = progressBar.getAttribute('data-progress');
                
                // Animasi dari 0 ke targetValue
                progressBar.style.width = targetValue + '%';
                
                // Tambahkan delay untuk efek yang lebih halus (opsional)
                progressBar.style.transition = 'width 2s ease-in-out';
                
                // Berhenti mengamati progress bar setelah animasi dimulai
                observer.unobserve(progressBar);
            }
        });
    }

    // Buat instance Intersection Observer
    const observer = new IntersectionObserver(animateProgressBars, {
        threshold: 0.5 // Memicu animasi ketika 50% dari elemen terlihat di viewport
    });

    // Amati setiap progress bar
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(progressBar => {
        observer.observe(progressBar);
    });
});
$(document).ready(function() {

	var my_nav = $('.navbar-sticky'); 
	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = 400;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			my_nav.addClass( 'stick' );
		} else {
			my_nav.removeClass( 'stick' );
		}   
	};
	
	// run our function on load
	sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
	});

});

function ShowPopUpImage(project){
	var modal = new bootstrap.Modal(document.getElementById(project+'Modal'));
	modal.show();
}