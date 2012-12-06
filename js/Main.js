function Main() {

	Main.MAIN_DELAY = 1000 / 60;
	Main._Z = 90;
	Main._X = 88;

	this.mainLoop = null;
	this.canvas = document.querySelector('canvas');

	{
		this.scale = 1;
		this.clearOnRepaint = true;
		this.showCenter = true;
	}

	(function(instance) {

		btStart = document.getElementById('bt-start');
		btStart.disabled = false;
		btStart.addEventListener('click', function(evt) { this.disabled = true; instance.start(); }, true);

		window.addEventListener('keydown', function(evt) { instance.doKeyDown(evt); }, true);

	})(this);

}

Main.prototype.refresh = function() {
	this.checkControl();
	var canvas = this.canvas;
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	this.draw();
};

Main.prototype.draw = function() {
	var canvas = this.canvas;
	var left = Math.round(canvas.width / 2);
	var top = Math.round(canvas.height / 2);
	var context = canvas.getContext('2d');
	context.save();
	context.lineWidth = 1;
	context.beginPath();
	context.arc(left, top, 20, 0, 2*Math.PI, false);
	context.strokeStyle = 'black';
	context.stroke();
	context.restore();
};

Main.prototype.checkControl = function() {
	this.clearOnRepaint = document.getElementById('clear-on-repaint').checked;
	this.showCenter = document.getElementById('show-center').checked;
};

Main.prototype.t = function(value) {
	return value * this.scale;
};

Main.prototype.start = function() {
	var instance = this;
	this.mainLoop = setInterval(function() { instance.refresh(); }, Main.MAIN_DELAY);
};

Main.prototype.stop = function() {
	if ( this.mainLoop != null ) {
		clearInterval(this.mainLoop);
		this.mainLoop = null;
	}
};

Main.prototype.doKeyDown = function(evt) {
	var key = evt.keyCode;
	if ( key == Main._Z ) {
		this.scale *= 0.95;
		evt.preventDefault();
	} else if ( key == Main._X ) {
		this.scale *= 1.05;
		evt.preventDefault();
	}
}