// Callback Hell example

function hi(name, myCallback){
  setTimeout(() => {
    console.log(`Hola ${name}`)
    myCallback(name)
  }, 1000)
}

function toSpeak(callbackSpeak){
  setTimeout(() => {
    console.log('Bla bla bla')
    callbackSpeak()
  }, 1000)
}

function bye(name, otherCallback){
  setTimeout(() => {
    console.log(`Bye ${name}`)
    otherCallback()
  }, 1000)
}

function chat(name, times, callback){
  if(times > 0){
    toSpeak(() => {
      chat(name, --times, callback)
    })
  }else{
    bye(name, callback)
  }
}

/*
// * Callback hell
console.log('Process started')
hi('carlos', (name) => {
  toSpeak(() => {
    toSpeak(() => {
      toSpeak(() => {
        toSpeak(() => {
          toSpeak(() => {
            toSpeak(() => {
              toSpeak(() => {
                bye(name, () => {
                  console.log('Process finished!')
                })
              })
            })
          })
        })
      })
    })
  })
})
*/

// * Refactor
console.log('Refactor')
hi('carlos', (name) => {
  chat(name, 3, () => {
    console.log('process finished')
  })
})
