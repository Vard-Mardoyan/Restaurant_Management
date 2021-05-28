

export function LocalStoragesDates() {
    if(localStorage.getItem('usersArray') === null){
        localStorage.setItem('usersArray', JSON.stringify([]) )
      }
    
    if(localStorage.getItem('id') === null){
        localStorage.setItem('id', 1)
    }
    
  return ''
}