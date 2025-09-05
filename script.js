document.addEventListener('DOMContentLoaded', () => {
  const userAgent = navigator.userAgent;
  const unsupportedMobileBrowsers = [
    /Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i
  ];

  const unsupported = unsupportedMobileBrowsers.some(pattern => userAgent.match(pattern));

  if (unsupported) {
    const errorMessage = document.createElement('div');
    errorMessage.innerHTML = "<p>Disclaimer: Mobile browsers aren't supported. Sorry! :-(</p>";
    document.body.prepend(errorMessage);
  }

  document.getElementById('start').addEventListener('click', start);
  document.getElementById('credits').addEventListener('click', credits);
});

function start() {
  document.body.innerHTML = `
    <p>placeholder</p>
  `;
}

function credits() {
  document.body.innerHTML = `
    <h1>Credits</h1>
    <p><b>Developer:</b> @mamlov on Github</p>
  `;
}
