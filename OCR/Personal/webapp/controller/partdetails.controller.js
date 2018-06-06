sap.ui.controller("dataPersonal.controller.partdetails", {
		onInit: function() {
		},
		onPressDetails:function()
		{
			sap.m.URLHelper.redirect("https://en.wikipedia.org/wiki/Stepper_motor", [true]);
		},
		onPressVideo:function()
		{
			sap.m.URLHelper.redirect("https://www.youtube.com/watch?v=bngx2dKl5jU", [true]);
		},
		handleNav:function()
		{
			window.history.back();
		}
		
});