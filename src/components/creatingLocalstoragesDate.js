

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
    
  return ''
}