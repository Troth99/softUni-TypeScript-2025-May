
function convertingArrays(arrayOfStr: string[]){

    let concatName: string = ''
    
    arrayOfStr.forEach(el => {
      concatName += el
    });

   return [`${concatName}`, concatName.length]
}

const result = convertingArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript'])
console.log(result)