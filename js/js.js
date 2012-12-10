(function() {

	var main = null;

	function init() {
		main = new Main();
		document.getElementById('bt-start').click();
	}

	window.addEventListener('load', init, false);	

})();