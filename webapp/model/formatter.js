sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (statusCheck) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			if (statusCheck === "Available") { 
				return resourceBundle.getText("Go for it"); 
			}
			else{
				return resourceBundle.getText("No can do");
			}
		}
	};
});