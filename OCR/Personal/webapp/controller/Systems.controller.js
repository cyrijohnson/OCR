sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dataPersonal.controller.Systems", {
		onInit: function() {
			if (!this.byId("Parts")) {
				this.byId("configurationsMenuNavContainer").addPage(
					new sap.ui.core.mvc.XMLView({
						"id": this.createId("Parts"),
						"viewName": "dataPersonal.view.Parts",
						"viewData": {
							"oComponent": this._oComponent
						}
					}));
			}
		
			this.byId("configurationsMenuNavContainer").to(this.byId("Parts").getId());
		},
		onPressSelectIconTabFilter: function(oEvent) {
		var sSelectedKey = oEvent.getSource().getSelectedKey();
		var oController = this;
			if(sSelectedKey==="parts") 
			{
				 
					this._goToParts();
				
			}
				else if(sSelectedKey==="circuitdiagram") 
				{ 
					this._goTocircuitdiagram();
				
				}
				else if(sSelectedKey==="usecase") 
				{
					this._goTousecase();
				
				}
		
		},
		_goToParts  : function() {
			if (!this.byId("Parts")) {
				this.byId("configurationsMenuNavContainer").addPage(
					new sap.ui.core.mvc.XMLView({
						"id": this.createId("Parts"),
						"viewName": "dataPersonal.view.Parts",
						"viewData": {
							"oComponent": this._oComponent
						}
					}));
			}
		
			this.byId("configurationsMenuNavContainer").to(this.byId("Parts").getId());
		},
		_goTocircuitdiagram:function()
		{
		if (!this.byId("circuitdiagram")) {
				
				this.byId("configurationsMenuNavContainer").addPage(
					new sap.ui.core.mvc.XMLView({
						"id": this.createId("circuitdiagram"),
						"viewName": "dataPersonal.view.circuitdiagram",
						"viewData": {
							"oComponent": this._oComponent
						}
					}));
			}
		
			this.byId("configurationsMenuNavContainer").to(this.byId("circuitdiagram").getId());
		},
		_goTousecase:function()
		{
			if (!this.byId("usecase")) {
			
				this.byId("configurationsMenuNavContainer").addPage(
					new sap.ui.core.mvc.XMLView({
						"id": this.createId("usecase"),
						"viewName": "dataPersonal.view.usecase",
						"viewData": {
							"oComponent": this._oComponent
						}
					}));
			}
			
			this.byId("configurationsMenuNavContainer").to(this.byId("usecase").getId());
		}
			
	});
});