// This allows to us execute async functions in order, waiting each one for the other one
// this doesn't effect the event loop. In short words, becomes async func into sync func

async function hi(name){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${name}`)
      resolve(name)
    }, 1000)
  })
}

async function toSpeak(name){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla')
      resolve(name)
    }, 1000)
  })
}

async function bye(name){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bye ${name}`)
      resolve()
    }, 1000)
  })
}

async function intentionalError(){
  return new Promise((resolve, reject) => {
    reject('Error from intentional funct')
  })
}

async function main(){
  let name = await hi('Carlos')
  await toSpeak()
  await toSpeak()
  await toSpeak()
  await bye(name)
  console.log('Ended second thread')
}

main()
console.log('Ended first thread')
