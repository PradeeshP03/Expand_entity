sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("demo.ladera.expandentityui5.controller.Orders", {
        onInit() {
        },
        onProductRowPress : function(evt){
            var selectedRow = evt.getSource().getBindingContext().getProperty().OrderID;
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("OrderDrill", {OrderId:selectedRow} )
          }
    });
});