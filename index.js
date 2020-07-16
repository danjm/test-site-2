console.log(123);
window.ReactNativeWebView && window.ReactNativeWebView.postMessage = (...args) => {
  console.log('args24', args)
  return window.ReactNativeWebView.postMessage(...args)
}
window.location = 'https://google.com'
console.log(45678);
