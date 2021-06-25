/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"testanu.git./gitlearnings1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
