

export function LocalStoragesDates() {
    if(localStorage.getItem('usersArray') === null){
        localStorage.setItem('usersArray', JSON.stringify([]) )
      }
    
      if(localStorage.getItem('rezervStatus') === null){
        localStorage.setItem('rezervStatus', 'notRezerved')
    }
  
    if(localStorage.getItem('loginStatus') === null){
      localStorage.setItem('loginStatus', 'tologin')
  }

  if(localStorage.getItem('rezervStatus1') === null){
    localStorage.setItem('rezervStatus1', 'notRezerved')
  }

  if(localStorage.getItem('rezervStatus2') === null){
    localStorage.setItem('rezervStatus2','notRezerved')
  }
  if(localStorage.getItem('rezervStatus3') === null){
    localStorage.setItem('rezervStatus3','notRezerved')
  }
  if(localStorage.getItem('rezervStatus4') === null){
    localStorage.setItem('rezervStatus4','notRezerved')
  }
    
  return ''
}