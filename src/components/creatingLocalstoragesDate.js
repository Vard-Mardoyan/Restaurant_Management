

export function LocalStoragesDates() {
    if(localStorage.getItem('usersArray') === null){
        localStorage.setItem('usersArray', JSON.stringify([]) )
      }
    
    if(localStorage.getItem('id') === null){
        localStorage.setItem('id', 1)
    }
  
    if(localStorage.getItem('loginStatus') === null){
      localStorage.setItem('loginStatus', 'tologin')
  }
    
  return ''
}