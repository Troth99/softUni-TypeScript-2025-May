function formatingPerson(ourTuple: [string, number]): string {
  const [name, age] = ourTuple;
  return `Hello, my name is ${name} and my age is ${age}`;
}

console.log(formatingPerson(["Stefencho", 20]));
