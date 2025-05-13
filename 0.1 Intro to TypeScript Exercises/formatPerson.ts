function formatingPerson(ourTuple: [string, number]): string{
    const [name, age] = ourTuple
    console.log(name)
    return `Hello, my name is ${name} and my age is ${age}`
}

formatingPerson(['Ivan', 20])