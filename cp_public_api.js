var CPJsApi = {};
CPJsApi.common = {};
CPJsApi.common.isappinstalled = function (params, callback) {

		alert("before");
		CPJsBridge.common.isAppInstalled(params, callback);
		alert("after");

}

CPJsApi.common.openurl = function (params, callback) {

		CPJsBridge.common.openurl(params, callback);

}
