var STEVENWU = STEVENWU || {};

STEVENWU.Main = (function() {

	paper.install(window);
	paper.setup('canvas');

	var timer = new Date();
	var addJellyTimer = 0;
	var jellyCounter = 0;
	var numJellies = 7;
	var jellies = [numJellies];
	var jellyResolution = 14;


	window.onload = function() {
		view.onFrame = draw;
	};


	this.draw = function(event) {
		if (event.time > addJellyTimer + 3 && jellyCounter < numJellies) {
			jellySize = Math.random() * 10 + 40;
			jellies[jellyCounter] = new STEVENWU.Jelly(jellyCounter, jellySize, jellyResolution);
			jellies[jellyCounter].init();

			jellyCounter++;
			addJellyTimer = event.time;
		}

		if (jellyCounter > 0) {
			for (var j = 0; j < jellyCounter; j++) {
				jellies[j].update(event);
			}
		}
	};

})();