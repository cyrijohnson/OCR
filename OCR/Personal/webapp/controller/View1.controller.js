sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dataPersonal.controller.View1", {
		onInit: function() {
				if (!this.byId("AdminPro")) {
				this.byId("configurationsMenuNavContainer").addPage(
					new sap.ui.core.mvc.XMLView({
						"id": this.createId("AdminPro"),
						"viewName": "dataPersonal.view.AdminPro",
						"viewData": {
							"oComponent": this._oComponent
						}
					}));
			}
			this.byId("configurationsMenuNavContainer").to(this.byId("AdminPro").getId());
			
	this._oView = this.getView();
	this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this._oView));
			this._oRouter = this._oComponent.getRouter();
			this._oRouter.attachRoutePatternMatched(this._onRoutePatternMatched, this);
			this._oResourceBundle = this._oComponent.getModel("i18n").getResourceBundle();
		},
		_onRoutePatternMatched: function(oEvent) {
			this._setDefaultConfigurationSection();
			this._getConfigurationsMenuDetails();
		},
		_setDefaultConfigurationSection: function() {
			this.byId("title").setText(this._oResourceBundle.getText("configurations.users.label"));
		},
	
			onPressHandleSideNavigation: function() {
			var oConfigMenuSideNavigation = this.byId("configMenuToolPage");
			var bSideNavigationExpandedState = oConfigMenuSideNavigation.getSideExpanded();
			oConfigMenuSideNavigation.setSideExpanded(!bSideNavigationExpandedState);
		},
		onNavigationItemSelectHandleDetailPage: function(oEvent) {
			var oSelectedNavigationItem = oEvent.getParameter('item');
			var sKey = oSelectedNavigationItem.getKey();
			var oHandler = {
				"open": function()
				{
					this.onPressHandleSideNavigation();
				},
				"users": function() {
					this._goToAdminPro();
				},
				"systems": function() {
					this._goToSystemsList();
				},
				"generalAppSettings": function() {
					this._goToGeneralAppSettings();
				},
				"dynamicSections": function() {
					this._goToDynamicSections();
				},
				"headerStatus": function() {
					this._goToheaderStatus();
				}
			};

			var _fnNavigateToTab = function() {
				
				oHandler[sKey].call(this, oSelectedNavigationItem);
			}.bind(this);

			

			if (oHandler.hasOwnProperty(sKey)) {
				if (sap.ushell.Container.getDirtyFlag()) {
					sap.m.MessageBox.confirm(this._oResourceBundle.getText("reusable.shareDialogChangesCancelConfirmMessage.text"), {
						onClose: function(sAction) {
							if (sAction === "OK") {
								sap.ushell.Container.setDirtyFlag(false);
								_fnNavigateToTab();
							}
						}.bind(this)
					});
				} else {
					_fnNavigateToTab();
				}
			} else {
				var oAdditionalItemHandler = oSelectedNavigationItem.data("handler") || oSelectedNavigationItem.getParent().data('handler');
				var sViewId = oSelectedNavigationItem.data("viewId");
				if (oAdditionalItemHandler && oAdditionalItemHandler.onNavigationItemSelect) {
					oAdditionalItemHandler.onNavigationItemSelect(this.byId("configurationsMenuNavContainer"), oSelectedNavigationItem, this);
				} else if (sViewId) {
					this.byId("title").setText(oSelectedNavigationItem.getText());
					this.byId("configurationsMenuNavContainer").to(this.byId(sViewId).getId());
				}
			}
		},
			_goToAdminPro: function() {
			if (!this.byId("AdminPro")) {
				this.byId("configurationsMenuNavContainer").addPage(
					new sap.ui.core.mvc.XMLView({
						"id": this.createId("AdminPro"),
						"viewName": "dataPersonal.view.AdminPro",
						"viewData": {
							"oComponent": this._oComponent
						}
					}));
			}
			this.byId("configurationsMenuNavContainer").to(this.byId("AdminPro").getId());
		},
		_goToSystemsList:function()
		{
		if (!this.byId("Systems")) {
				this.byId("configurationsMenuNavContainer").addPage(
					new sap.ui.core.mvc.XMLView({
						"id": this.createId("Systems"),
						"viewName": "dataPersonal.view.Systems",
						"viewData": {
							"oComponent": this._oComponent
						}
					}));
			}
			this.byId("configurationsMenuNavContainer").to(this.byId("Systems").getId());
			
		},
		_goToGeneralAppSettings:function()
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
		_goToDynamicSections:function()
		{
			if (!this.byId("HardwareUsed")) {
				this.byId("configurationsMenuNavContainer").addPage(
					new sap.ui.core.mvc.XMLView({
						"id": this.createId("HardwareUsed"),
						"viewName": "dataPersonal.view.HardwareUsed",
						"viewData": {
							"oComponent": this._oComponent
						}
					}));
			}
			this.byId("configurationsMenuNavContainer").to(this.byId("HardwareUsed").getId());
		},
		onPressGoToPreviousPage: function() {
			window.history.back();
		}
		
		


	});
});