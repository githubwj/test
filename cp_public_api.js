var CPJsApi = {};
CPJsApi.common = {};
CPJsApi.common.isappinstalled = function (params, callback) {
		CPJsBridge.common.isAppInstalled(params, callback);
}

CPJsApi.common.openurl = function (params, callback) {
		CPJsBridge.common.openurl(params, callback);
}
