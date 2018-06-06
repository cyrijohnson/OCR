sap.ui.define([
		"jquery.sap.global",
		"sap/m/MessageToast",
		"sap/ui/core/Fragment",
		"sap/ui/core/mvc/Controller"
		
], function(jQuery, MessageToast, Fragment, Controller) {
	"use strict";

	return Controller.extend("dataPersonal.controller.HardwareUsed", {
		onInit:function()
		{
		
		},
		pressWPM:function()
		{
			
		},
			pressAC:function()
		{
			
		},
			pressHeat:function()
		{
			
		},
		pressRPM: function (oEvent) {

			// create popover
			if (!this._oPopover) {
				this._oPopover = sap.ui.xmlfragment("dataPersonal.view.Popover", this);
				this.getView().addDependent(this._oPopover);
				this._oPopover.bindElement("/ProductCollection/0");
			}

			this._oPopover.openBy(oEvent.getSource());
		},
		handleRpmpop:function()
		{
			sap.m.URLHelper.redirect("https://en.wikipedia.org/wiki/Revolutions_per_minute", true);
		},
		pressSettings:function()
		{
				if (!this.byId("Settings")) {
				this.byId("configurationsMenuNavContainer").addPage(
					new sap.ui.core.mvc.XMLView({
						"id": this.createId("Settings"),
						"viewName": "dataPersonal.view.Settings",
						"viewData": {
							"oComponent": this._oComponent
						}
					}));
			}
			this.byId("configurationsMenuNavContainer").to(this.byId("Settings").getId());
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			sap.m.MessageBox.warning(
				"Changes may damange the system.",
				{
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
		},
		buttonpress:function()
	{
		var navCon = this.byId("configurationsMenuNavContainer");
		navCon.back();
	}
	});
});