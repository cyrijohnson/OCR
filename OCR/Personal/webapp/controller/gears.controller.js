sap.ui.controller("dataPersonal.controller.gears", {
		onInit: function() {
		},
		onPressDetails:function()
		{
			sap.m.URLHelper.redirect("https://en.wikipedia.org/wiki/Gear", [true]);
		},
		onPressVideo:function()
		{
			sap.m.URLHelper.redirect("https://www.youtube.com/watch?v=odpsm3ybPsA", [true]);
		},
		handleNav:function()
		{
			window.history.back();
		}
		
});