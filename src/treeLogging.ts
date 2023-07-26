import { Person } from "./personTypes";

/*
function logAllPeopleInTree(rootPerson)
    workStack = empty stack of Person objects
    push rootPerson onto workStack

		while workStack is not empty: 
        currentPerson = pop person off workStack
        log the name property of currentPerson
        push each element of currentPerson's children onto the workStack
*/

export function logAllPeopleInTree(topPerson: Person): void {
  const workStack: Person[] = [];
  workStack.push(topPerson);
  let currentPerson;

  while (workStack.length != 0) {
    currentPerson = workStack.pop();
    if (currentPerson === undefined) {
      throw new Error("arr.pop() unexpectedly returned undefined!");
    }
    console.log(currentPerson.name);
    currentPerson["children"].forEach((child) => {
      workStack.push(child);
    });
  }
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): string[] {
  const workStack: Person[] = [];
  workStack.push(topPerson);
  let currentPerson;
  const outputArray: string[] =[];

  while (workStack.length != 0) {
    currentPerson = workStack.shift();
    if (currentPerson === undefined) {
      throw new Error("arr.shift() unexpectedly returned undefined!");
    }
    outputArray.push(currentPerson.name); // push currentPerson.name into the outputArray
    currentPerson["children"].forEach((child) => {
      workStack.push(child);
    });
  }
  return outputArray;
}
