$('#switch').on('click', () => {
	if( $('#switch').prop('checked')){
		$('.wrapper').addClass('dark');
		$('.container').addClass('dark');
		$('.text-primary').addClass('dark');
		$('.well').addClass('dark');
		$('.yeet').addClass('dark');
		$('.panel').addClass('dark');
		$('.panel-heading').addClass('dark');
		$('.btn-xs').addClass('dark');
		$('.btn-sm').addClass('dark-image-button');
		$('.zebra').addClass('zebra-dark');
	} else {
		$('.wrapper').removeClass('dark');
		$('.container').removeClass('dark');
		$('.text-primary').removeClass('dark');
		$('.well').removeClass('dark');
		$('.yeet').removeClass('dark');
		$('.panel').removeClass('dark');
		$('.panel-heading').removeClass('dark');
		$('.btn-xs').removeClass('dark');
		$('.btn-sm').removeClass('dark-image-button');
		$('.zebra').removeClass('zebra-dark');
	}
})