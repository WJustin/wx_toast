# 微信小程序自定义Toast
## 概述

wx_toast 是仿照微信小程序提供的 showToast 功能，提供视觉一致的自定义组件，弥补小程序showToast功能上的不足（如只能显示success、loading两种icon，且icon不可去除，持续时间最大10秒等）。

## 如何使用
将项目中的toast文件夹拷贝进去项目中，以自定义组件的方式使用它，就可以了。具体使用方法可以参看项目中的index page。
## Api
### Toast.showLoading
显示 loading 提示框, 需主动调用 Toast.hideLoading 才能关闭提示框
### Toast.hideLoading
隐藏 loading 提示框
### Toast.showMessage
不带图标弱提示框,支持callback
### Toast.showSuccess
成功提示框，带有success图标，支持callback
### Toast.showError
错误提示框，带有error图标，支持callback

