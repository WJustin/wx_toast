// components/toast/toast.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    toast: {
      type: Object,
      value: {
        show: false,
        image: null,
        message: null,
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }

})

const loadingImage = "./loading.gif";
const successImage = "./success.png";
const errorImage = "./error.png";

export function showLoading(page) {
  page.setData({
    toast: {
      show: true,
      image: loadingImage,
      message: null,
    }
  });
}

export function hideLoading(page) {
  page.setData({
    toast: {
      show: false,
    }
  });
}

export function showMessage(page, message = null, callback = null) {
   this.show(page, message, null, callback);
}

export function showSuccess(page, message, callback = null) {
  this.show(page, message, './success.png', callback);
}

export function showError(page, message, callback = null) {
  this.show(page, message, './error.png', callback);
}

export function show(page, message, image = null, callback = null) {
  page.setData({
    toast: {
      show: true,
      image: image,
      message: message,
    }
  });
  if (page.toast_timer) {
    clearTimeout(page.toast_timer);
  }
  page.toast_timer = setTimeout(() => {
    page.setData({
      toast: {
        show: false
      }
    });
    if (callback) {
      callback();
    }
    clearTimeout(page.toast_timer);
  }, 2000);
}

