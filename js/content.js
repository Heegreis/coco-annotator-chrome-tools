window.onload = function () {
  chrome.runtime.onMessage.addListener(function(request) {
    if(request.action === 'executeCode') {
      console.log("executeCode1")
      
      const canvas = document.getElementById('editor')
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = 'green';
      ctx.fillRect(10, 10, 150, 100);
    }
  })
}