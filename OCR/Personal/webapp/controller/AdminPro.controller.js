sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

		return Controller.extend("dataPersonal.controller.AdminPro",{
				onPressSendEmail: function(oEvent) {
			var destinationEmailAddress = oEvent.getSource().getText();
			sap.m.URLHelper.triggerEmail(destinationEmailAddress);
		},
			onButtonPressNavback: function() {
		window.history.back();

	},
	itempress:function(oEvent)
		{
			sap.m.URLHelper.redirect("https://www.facebook.com/cyrilc.jcool", [true]);
		},
		onPressFb:function(oEvent)
		{
			sap.m.URLHelper.redirect("https://www.facebook.com/cyrilc.jcool", [true]);
		},
		onPresstwitter:function()
		{
			sap.m.URLHelper.redirect("https://twitter.com/CyrilJohnson2", [true]);
		},
		onPresslink3:function()
		{
			sap.m.URLHelper.redirect("https://www.tutorialspoint.com/arduino/index.htm", [true]);
		},
		onPresslink1:function()
		{
			sap.m.URLHelper.redirect("https://paperlessocr.com/robotic-process-automation-rpa-ocr/", [true]);
		},
		onPresslink2:function()
		{
			sap.m.URLHelper.redirect("https://www.kaggle.com/kanncaa1/machine-learning-tutorial-for-beginners", [true]);
		},
		});
});