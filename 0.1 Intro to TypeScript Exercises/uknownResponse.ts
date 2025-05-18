function unknownResponse(arg: unknown): string {
    let result = typeof (arg as {value:string}).value
    if(result === 'string'){
        console.log((arg as {value:string}).value)
    }else {
        console.log('-')
    }
return result
}

unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] });
unknownResponse({ code: 201, text: 'Created', value: 'Object Created' })