sap.ui.define([
	'jquery.sap.global', 
	'sap/ui/core/mvc/Controller', 
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function(jQuery, Controller, MessageToast, JSONModel) {
	"use strict";

	var PageController = Controller.extend("ui5.neho.healthtrack.controller.Home", {
		onInit : function() {

			var oWeightModel = new JSONModel();
			oWeightModel.loadData(window.location.origin + "/api/weights/last");
			this.getView().setModel(oWeightModel, 'weight');

			var oBPModel = new JSONModel();
			oBPModel.loadData(window.location.origin + "/api/bps/last", null, false);
			oBPModel.setProperty('/bp/MEASURE_BP', parseInt(oBPModel.getProperty('/bp/MEASURE_SISTOLIC')) + '/' + parseInt(oBPModel.getProperty('/bp/MEASURE_DIASTOLIC')) + "");			
			this.getView().setModel(oBPModel, 'bp');

			var oExerciseModel = new JSONModel();
			oExerciseModel.loadData(window.location.origin + "/api/exercises/last");
			this.getView().setModel(oExerciseModel, 'exercise');

		},
		weight_press : function(evt) {
			var oDialog = this.getView().byId("NewWeightDialog");
			if (!oDialog) {
                oDialog = sap.ui.xmlfragment(this.getView().getId(), "ui5.neho.healthtrack.view.NewWeight", this);
				this.getView().addDependent(oDialog);
			}
            oDialog.open();
		},
		doNewWeightSubmitPress : function(evt) {
			// TODO : POST!		
			this.getView().byId("NewWeightDialog").close();
		},
		doNewWeightClosePress : function(evt) {
			this.getView().byId("NewWeightDialog").close();
		}
	});

	return PageController;
});