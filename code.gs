const SHEET_ID = '1yNJAHY11axdN5CX1k_tdC7ysK8a4IfnClenG8jI86UY';
const SHEET_NAME = 'แบบฟอร์มตอบกลับ';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getRepairData() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  return data;
}

function updateStatus(rowIndex, newStatus) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  sheet.getRange(rowIndex + 1, 9).setValue(newStatus); // คอลัมน์ 9 = สถานะ
  return 'Success';
}
