sap.ui.define(['sap/ui/core/UIComponent'], function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("ui5.neho.healthtrack.Component", {
		metadata : {
			rootView : "ui5.neho.healthtrack.view.Home",
			dependencies : {
				libs : ["sap.m"]
			}
		}
	});
	return Component;
});