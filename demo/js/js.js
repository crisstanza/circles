(function() {

	var main = null;

	function init() {
		main = new Main();
		main.start();
		main.test();
		window.addEventListener('keydown', function(evt) { main.doKeyDown(evt); }, true);
		window.addEventListener('keyup', function(evt) { main.doKeyUp(evt); }, true);
	}

	window.addEventListener('load', init, false);	

})();