sap.ui.controller("dataPersonal.controller.Parts", {
	onInit: function() {

	},
	buttonpress:function()
	{
		var navCon = this.byId("configurationsMenuNavContainer");
		navCon.back();
	},
	onPressGoToSparePartDetails: function(oEvent) {

		var sSelectedKey = oEvent.getSource().getId();
		if (sSelectedKey == "__xmlview0--Systems--Parts--motor") {
			this.goToMotorDet();
		} else if (sSelectedKey == "__xmlview0--Systems--Parts--gear") {
			this.goToGearDet();
		}
	},
	goToMotorDet: function() {
		if (!this.byId("partdetails")) {
			this.byId("configurationsMenuNavContainer").addPage(
				new sap.ui.core.mvc.XMLView({
					"id": this.createId("partdetails"),
					"viewName": "dataPersonal.view.partdetails",
					"viewData": {
						"oComponent": this._oComponent
					}
				}));
		}

		this.byId("configurationsMenuNavContainer").to(this.byId("partdetails").getId());
	},
	goToGearDet: function() {
	if (!this.byId("gears")) {
			this.byId("configurationsMenuNavContainer").addPage(
				new sap.ui.core.mvc.XMLView({
					"id": this.createId("gears"),
					"viewName": "dataPersonal.view.gears",
					"viewData": {
						"oComponent": this._oComponent
					}
				}));
		}

		this.byId("configurationsMenuNavContainer").to(this.byId("gears").getId());
	}

});