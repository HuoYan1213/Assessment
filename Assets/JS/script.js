(() => {
	'use strict';

	// Initialize menu buttons effect for 3D layout transformations
	function initMenuButtons() {
		const ids = [ 'table', 'sphere', 'helix', 'grid' ];
		const buttons = ids.map(id => document.getElementById(id)).filter(Boolean);
		if (!buttons.length) return; // nothing to do

		// Function to set active button
		function setActive(btn) {
			buttons.forEach(b => b.classList.remove('active'));
			if (btn) btn.classList.add('active');
		}

		// Attach event listeners to buttons
		buttons.forEach(btn => {
			btn.addEventListener('click', function (e) {
				setActive(btn);
				try {
					const id = btn.id;
					if (typeof window.transform === 'function' && window.targets && window.targets[id] && window.targets[id].length !== 0) {
						window.transform(window.targets[id], 2000);
					}
				} catch (err) {
				}
			});
			btn.addEventListener('keydown', function (e) {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					setActive(btn);
					btn.click();
				}
			});
		});

		// Initialize first button as active
		if (!buttons.some(b => b.classList.contains('active'))) {
			setActive(buttons[0]);
		}
	}

	// Initialize when DOM is ready
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		setTimeout(initMenuButtons, 0);
	} else {
		document.addEventListener('DOMContentLoaded', initMenuButtons);
	}

})();

