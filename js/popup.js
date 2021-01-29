const btn = document.getElementById('btn')

btn.addEventListener('click', function (event) {
  btn.textContent = 'click'
  chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
    // WAY 1
    // chrome.tabs.executeScript(activeTabs[0].id, { code: 'YOUR CODE HERE' });
    // WAY 2 (Replace WAY1 with following line)
    chrome.tabs.sendMessage(activeTabs[0].id, { action: 'executeCode' })
  })
})



