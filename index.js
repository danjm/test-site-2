console.log(123);
window.ReactNativeWebView && window.ReactNativeWebView.postMessage = (...args) => {
  console.log('args', args)
  return window.ReactNativeWebView.postMessage(...args)
}
window.location = 'https://google.com'
console.log(4567);
