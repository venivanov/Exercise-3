sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.kpmg.Exercise3.controller.MainView1", {
		formatter: formatter,
		onInit: function () {  
		},
		onFilterProducts : function (oEvent) {
 
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("SupplierName", FilterOperator.Contains, sQuery));
			}
  
			var oList = this.byId("table");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}    
	});
});