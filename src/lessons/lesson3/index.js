//Promise


const alex ={
  getFileWithCode(){
 return new Promise((res, rej)=> {
  res()
  rej()
 })
  }
}

function MyPromise(executor) {
  
  const resolve =(data)=>{
    {
      state: 'kfkfkfkf'
      result: data
    }
  } 
  const reject =(error)=>{
    {
      state: 'kfkfkfkf'
      result: error
    }
  } 
}
const promis ={
  state: 'pending',
  resulte: undefined
}
const filePromise = alex.getFileWithCode()
console.log(typeof(alex));