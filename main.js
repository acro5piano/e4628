const INDEX_PAGE_URL = 'https://www.e4628.jp/?module=timesheet&action=browse'
const EDIT_PAGE_URL = 'https://www.e4628.jp/'

function goToIndex() {
  location.href = INDEX_PAGE_URL
}

function navigateToInputPage(index = 0) {
  const trs = document.querySelectorAll('tr.bgcolor_white[id*=fix]')
  const tr = trs[index]
  if (!tr) {
    return
  }
  if (tr.innerText.includes('Core Time')) {
    navigateToInputPage(index + 1)
    return
  }
  if (!tr.innerText.includes('Core Time')) {
    const button = tr.getElementsByTagName('input')[0]
    button.click()
  }
}

function createSlot() {
  document.querySelector('[name=hour1]').selectedIndex = 9
  document.querySelector('[name=hour2]').selectedIndex = 19
  document.querySelector('[name=minute1]').selectedIndex = 31
  document.querySelector('[name=minute2]').selectedIndex = 1
  document.querySelector('[alt=保存]').click()
}

function main() {
  if (location.href.includes('module=timesheet&action=browse')) {
    navigateToInputPage()
  } else if (location.href === EDIT_PAGE_URL) {
    createSlot()
  } else {
    alert('input done')
  }
}

main()
