// Promises allows to us work with async with states, it could be resolved or rejected

function hi(name){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${name}`)
      resolve(name)
    }, 1000)
  })
}

function toSpeak(name){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla')
      resolve(name)
    }, 1000)
  })
}

function bye(name){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bye ${name}`)
      resolve()
    }, 1000)
  })
}

function intentionalError(){
  return new Promise((resolve, reject) => {
    reject('Error from intentional funct')
  })
}

hi('Carlos')
  .then(toSpeak)
  .then(toSpeak)
  .then(bye)
  .then(() => console.log('Process finished'))
  .then(intentionalError)
  .catch(err => console.error(`Error: ${err}`))
