$(document).on('mousemove', function(e) {
	function function_name(argument) {
		// body...
	}
	var xMouse = e.pageX;
	var yMouse = e.pageY;
	if (Math.random() < 0.1) {
		setTimeout(function() {
			var l = document.createElement("DIV");
			var size = (Math.floor(Math.random() * (30 - 10)) + 10);
			l.style.width = size + "px";
			l.style.height = size + "px";
			l.style.backgroundImage = "url(https://anonyviet.com/resource/mouse/hoaroi.png)";
			var bg_pos = (Math.floor(Math.random() * 4));
			l.style.backgroundPosition = "0px -"+(size*bg_pos)+"px";
			l.style.backgroundSize = size + "px "+4*size+"px"
			l.style.position = "absolute";
			l.style.left = (xMouse) + "px";
			l.style.top = (yMouse + 10) + "px";
			l.style.zIndex = 9999;
			l.style.display = 'none';
			document.body.appendChild(l);
			$(l).fadeIn(100);
			var stop = false;
			var hoaroi = function() {
				if (!stop) {
					setTimeout(function() {
						window.requestAnimationFrame(hoaroi);
					}, 20);
					l.style.top = (parseInt($(l).css('top'), 10) + 1) + "px";
					if ((parseInt($(l).css('top'), 10)) % 10 == 0) {
						if (Math.random() < 0.5) {
							l.style.left = (parseInt($(l).css('left'), 10) + 1) + "px";
						} else {
							l.style.left = (parseInt($(l).css('left'), 10) - 1) + "px";
						}
					}
				}
			}
			window.requestAnimationFrame(hoaroi);
			$(l).fadeOut((Math.floor(Math.random() * (2500 - 1000)) + 1000), function() {
				$(l).remove();
				stop = true;
			});
		}, 50);
	}
});