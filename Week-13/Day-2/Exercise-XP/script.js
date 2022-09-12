// const { text } = require('body-parser');
const f = require('fs')

const theReadFunction = (file) => {
    let files = f.readFileSync(`${file}`,(err)=>{
          if(err){
              return console.log(err);
          }
      })
      return files.toString()
  
  }

const theAppendFunctionSync = (file,someText)=>{
    let files = f.appendFileSync(file,someText,(err)=>{
        if(err){
            console.log(err);
        }
    })
    return files
}

const theAppendFunction = (file,someText)=>{
    let files = f.appendFile(file,someText,(err)=>{
        if(err){
            console.log(err);
        }
    })
    return files
}


const unlink = (file) => {
    f.unlink(file,(err)=>{
        if(err){
            console.log(err);
        }
    })
}
const f1 = f.readFileSync('./text.txt',(err)=>{
    if(err){
        return console.log(err);
    }
})


const textToAppend = '. Please can you buy some Orange Juice';

// unlink('./data.txt')

// unlink('./data2.txt')

theAppendFunction('./data.txt',textToAppend)
console.log('Append', theReadFunction(`./data.txt`))

theAppendFunctionSync('./data2.txt',textToAppend + ' helllo')
console.log('Append Sync', theReadFunction(`./data2.txt`))

// When using AppendSync it will prevent the JS file from conmtinue down the code 
// where appendFile will be asychrinised which will make it read the rest of the code before it
// applies the appendFile method.
// So the first time I call the console.log on line 53 it will read the log the file before it has anything init
// which is interesting why doesnt it throw an error because when it gets to line 54 there shouldnt have been a file created


