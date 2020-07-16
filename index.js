console.log(555);
if (window.ReactNativeWebView) {
  window.ReactNativeWebView.postMessage = (...args) => {
      console.log('args24', args)
      return window.ReactNativeWebView.postMessage(...args)
  }
  window.location = 'http://clients1.google.com/generate_204';
}
console.log(777);
