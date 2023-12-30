document.addEventListener('DOMContentLoaded', function() {
  addEventListenerForAssigneeBtn();
});

function addEventListenerForAssigneeBtn() {
  document.querySelectorAll('.assignee-btn').forEach(item => {
    item.addEventListener('click', event => {

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { action: 'hideRows', assignee: item.id });
      });
    })
  })
}
