function someFunction(){
  thisBreack()
}

function thisBreack(){
  return 5 + y
}

function asyncFunction(){
  setInterval(() => {
    try{
      5 + e
    }catch(err){
      console.error(err.message)
    }
  }, 1000)
}

try{
  someFunction()
  thisBreack()
  asyncFunction() // This process is in another thread, we can't its catch errors here
}catch(err){
  console.error(err.message)
}
