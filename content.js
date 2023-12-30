chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'hideRows') {
    hideRows(request.assignee);
  }
});

function hideRows(assignee) {
  const allRows = document.querySelectorAll('.ProjectSpreadsheetGridRow-dropTargetRow');
  allRows.forEach(row => {
    row.style.display = 'flex';
  });

  if (!assignee) {
    return;
  }

  const assigneeElements = document.querySelectorAll('.AssigneeWithNameDisplayButton-name');
  assigneeElements.forEach(element => {
    const textContent = element.textContent.trim();
    const parentRow = element.closest('.ProjectSpreadsheetGridRow-dropTargetRow');
    if (parentRow && textContent !== assignee) {
      parentRow.style.display = 'none';
    }
  });
}
