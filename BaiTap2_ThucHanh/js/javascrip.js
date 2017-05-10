$(document).ready(function() {
			var index=1;
			showDiv(index);
			function showDiv(n){
				$("#film_" + n).addClass('show');
				$("#icon_" + n).removeClass('dropbtn-right');
			}
			function hideDiv(n){
				$("#film_" + n).removeClass('show');
				$("#icon_" + n).addClass('dropbtn-right');
			}
			jQuery.fn.onClick=function(n){
				hideDiv(index);
				showDiv(n);
				index=n;
			}
			jQuery.fn.ondblclick=function(n){
				hideDiv(n);
			}
		});