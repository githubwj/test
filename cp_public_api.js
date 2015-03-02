function isappinstalled() {
	CPJsApi.common.isappinstalled({
		scheme : {
			ios : 'ebbook://',
			android : 'com.eb.ebbook'
		}
	}, function (result) {
		if (result == 0) {}
		else {}
	})
}

function openurl() {
	CPJsApi.common.openurl({
		scheme : {
			ios : 'ebbook://',
			android : 'com.eb.ebbook'
		}
	}, function (result) {
		if (result == 0) {}
		else {}
	})
}

function isiOS() {
	var ua = navigator.userAgent;

	if (ua.indexOf('iPhone OS') > 0) {
		return 1;
	}

	return 0;
}

function isAndroid() {
	var ua = navigator.userAgent;

	if (ua.indexOf('Android') > 0) {
		return 1;
	}

	return 0;
}

var CPJsApi = {};
CPJsApi.common = {};
var CPJsBridge = window.CPJsBridge;

CPJsApi.common.isappinstalled = function (params, callback) {
	if (isiOS()) {
		CPJsBridge.invoke('isappinstalled', params, callback);
	}
	if (isAndroid()) {
		CPJsBridge.common.isAppInstalled(params, callback);
	}
}

CPJsApi.common.openurl = function (params, callback) {
	if (isiOS()) {
		CPJsBridge.invoke('openurl', params, callback);
	}
	if (isAndroid()) {
		CPJsBridge.common.openurl(params, callback);
	}
}
