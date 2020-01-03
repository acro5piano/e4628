const pages = {
  LIST: 'LIST',
  INPUT: 'INPUT',
  OTHER: 'OTHER',
}

function getCurrentPage() {
  if (location.href.includes('module=timesheet&action=browse')) {
    return pages.LIST
  } else if (location.href === 'https://www.e4628.jp/') {
    return pages.INPUT
  } else {
    return pages.OTHER
  }
}

const actions = {
  navigateToInputPage: (index = 0) => {
    const tr = document.querySelectorAll('tr.bgcolor_white[id*=fix]')[index]

    // No input field, maybe not target page
    if (!tr) {
      return
    }

    // "Core Time" means the date is already filled
    if (!tr.innerText.includes('Core Time')) {
      const button = tr.getElementsByTagName('input')[0]
      button.click()
      return
    }

    // Move to next day
    actions.navigateToInputPage(index + 1)
  },
  saveWorkingHours: () => {
    document.querySelector('[name=hour1]').selectedIndex = 9
    document.querySelector('[name=hour2]').selectedIndex = 19
    document.querySelector('[name=minute1]').selectedIndex = 31
    document.querySelector('[name=minute2]').selectedIndex = 1
    document.querySelector('[alt=保存]').click()
  },
  done: () => {
    alert('input done')
  },
}

function main() {
  switch (getCurrentPage()) {
    case pages.LIST:
      return actions.navigateToInputPage()
    case pages.INPUT:
      return actions.saveWorkingHours()
    case pages.OTHER:
      return actions.done()
  }
}

main()
