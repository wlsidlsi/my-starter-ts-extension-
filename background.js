// onInstall - console log the extension name from manifest.json
chrome.runtime.onInstalled.addListener((details) => {
  console.log(`Extension Name: ${chrome.runtime.getManifest().name}`);
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: "index.html" });
});
