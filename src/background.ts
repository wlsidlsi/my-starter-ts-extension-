// onInstall - console log the extension name from manifest.json
chrome.runtime.onInstalled.addListener(() => {
    console.log(`Extension Name: ${chrome.runtime.getManifest().name}`);
});

chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: 'html/index.html' });
});
