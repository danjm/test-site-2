console.log(123);
window.ReactNativeWebView && window.ReactNativeWebView.postMessage = (...args) => {
	console.log('args', args)
	return window.ReactNativeWebView.postMessage(...args)
	window.ReactNativeWebView.postMessage(JSON.stringify(
		{
			type: 'GET_WEBVIEW_URL',
			payload: {
				url: 'https://google.com'
			}
		}
	))
}
console.log(4567);
