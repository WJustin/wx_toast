
import * as Toast from '../../toast/toast.js'

Page({
  data: {

  },

  showLoading() {
    Toast.showLoading(this);
    setTimeout(()=>{
      Toast.hideLoading(this);
    }, 5000);
  },

  showMessage() {
    Toast.showMessage(this, "支付成功");
  },

  showMessageWithCallBack() {
    Toast.showMessage(this, "支付成功", ()=>{
      console.log("支付成功");
    });
  },

  showSuccess() {
    Toast.showSuccess(this, "支付成功");
  },

  showSuccessWithCallBack() {
    Toast.showSuccess(this, "支付成功", ()=>{
      console.log("支付成功");
    });
  },

  showError() {
    Toast.showError(this, "支付失败");
  },

  showErrorWithCallBack() {
    Toast.showError(this, "支付失败", () => {
      console.log("支付失败");
    });  
  }
})
