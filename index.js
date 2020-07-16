console.log(123);
window.location = 'https://github.com';
	window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify(
		{
			type: 'GET_WEBVIEW_URL',
			payload: {
				url: 'https://google.com'
			}
		}
	))
console.log(4567);
