/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/kpmg/Exercise3/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});