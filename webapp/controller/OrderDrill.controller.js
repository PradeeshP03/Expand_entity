sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
 
    return BaseController.extend("demo.ladera.expandentityui5.controller.OrderDrill", {
        onInit() {
            sap.ui.core.UIComponent.getRouterFor(this).getRoute("OrderDrill").attachPatternMatched(this._objPatternMatched,this);
          },
          _objPatternMatched : function(evt){
            var orderId = evt.getParameter("arguments").OrderId;
            this.getOwnerComponent().getModel().read("/Orders",{
              urlParameters : {
                "$expand" : "Customer,Order_Details"
              },
              filters:[new sap.ui.model.Filter("OrderID","EQ",orderId)],
              success:function(oData,results){
                console.log(oData);
              },
              error:function(oError){
                MessageBox.error(JSON.parse(oError.responseText).error.message.value)
              }     
            })
          },
        onNavigationBack:function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteOrders");
          }
    });
  });