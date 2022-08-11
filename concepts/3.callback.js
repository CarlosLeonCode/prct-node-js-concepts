// Callback example

function hi(name, myCallback){
  setTimeout(() => {
    console.log(`Hola ${name}`)
    myCallback(name)
  }, 1000)
}

function bye(name, otherCallback){
  setTimeout(() => {
    console.log(`Bye ${name}`)
    otherCallback()
  }, 1000)
}

console.log('Process started')
hi('carlos', (name) => {
  bye(name, () => {
    console.log('Process finished!')
  })
})

// This could become a callback hell!
