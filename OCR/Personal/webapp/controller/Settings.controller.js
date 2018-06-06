sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/m/MessageBox",
		"sap/ui/core/Fragment"
], function(Controller) {
	"use strict";

	return Controller.extend("dataPersonal.controller.Settings", {
		onInit: function(oEvent) {
			
		},
		
	
		
			handleConfirmationMessageBoxPress: function(oEvent) {
				if(oEvent.getSource().mProperties.state)
				{
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			sap.m.MessageBox.confirm(
				"Clicking on this will reduce the performance of the system!!!", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
				}
			},
			
		handlediscardMessageBoxPress: function(oEvent) {
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			sap.m.MessageBox.warning(
				"Discard changes!!! Are you sure?",
				{
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					styleClass: bCompact ? "sapUiSizeCompact" : "",
					onNO: function(sAction) {
						sap.m.MessageToast.show("Action selected: ");
					}
					
				}
			);
		},
			onSave:function()
			{
				var dialog = new sap.m.Dialog({
				title: "Success",
				type: "Message",
				state: "Success",
				content: new sap.m.Text({
					text: "Settings have been saved successfully."
				}),
				beginButton: new sap.m.Button({
					text: "OK",
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});

			dialog.open();
		
			}
	});
});