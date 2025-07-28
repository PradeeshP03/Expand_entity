sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
 
    return BaseController.extend("demo.ladera.expandentityui5.controller.OrderDrill", {
        onInit() {
          },
        onNavigationBack:function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteOrders");
          }
    });
  });