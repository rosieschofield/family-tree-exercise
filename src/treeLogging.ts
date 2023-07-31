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
  const outputArray: string[] = [];

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

export function countFamilyMembers(inputArray: string[]): number {
  return inputArray.length;
}

export function logInTree(targetName: string, topOfTree: Person): boolean {
  const namesArray = logAllPeopleInTreeWithQueue(topOfTree); // all names in array
  const formattedTargetName =
    targetName.slice(0, 1).toUpperCase() + targetName.slice(1).toLowerCase();
  // const isInclude =
  return namesArray.includes(formattedTargetName);

  // if(isInclude === true){
  //     console.log(`FOUND ${formattedTargetName} !`)
  // }else {console.log(`No such person found:${formattedTargetName}`)}
}

// export default function isDescendant(descendantName: string, ancestorName: string, topOfTree:Person):boolean{
//   let ancestor:boolean = false;
//   let decestor:boolean = false;
//   if(topOfTree.name === ancestorName){
//     ancestor = true
//     let findDescendant = topOfTree.children.find((eachChild)=>(eachChild.name ===descendantName))
//     if(findDescendant){
//       return true
//     } else {
//       //topOfTree.children.forEach((eachChild)=>(eachChild.children.length !== 0? eachChild.children.find((eachChild)=>(eachChild.name === descendantName)):false))
//       for(let eachChild of topOfTree.children){
//         if(eachChild.children.length !== 0){
//           findDescendant = eachChild.children.find((eachChild)=>(eachChild.name === descendantName))
//           if(findDescendant){
//             return true} else{
//               eachChild.children
//             }
//         }
//       }

//     }
//   }

//   return
// }

export function getFamilyMembersArray(topOfTree: Person): Person[] {
  const workStack: Person[] = [];
  workStack.push(topOfTree);
  let currentPerson;

  const outputArray: Person[] = [];

  while (workStack.length != 0) {
    currentPerson = workStack.shift();
    if (currentPerson === undefined) {
      throw new Error("arr.shift() unexpectedly returned undefined!");
    }
    outputArray.push(currentPerson);
    currentPerson["children"].forEach((child) => {
      workStack.push(child);
    });
  }
  return outputArray;
}

// export default function isDescendant(descendantName: string, ancestorName: string, topOfTree:Person):boolean{
//   const familyMembersArray = logAllPeopleInTreeWithQueue(topOfTree);
//   const ancestorIndex= familyMembersArray.indexOf(ancestorName);
//   const descendantIndex= familyMembersArray.indexOf(descendantName);

//   if(ancestorIndex === -1 ||descendantIndex === -1){
//     return false
//   } else if(ancestorIndex < descendantIndex)
//    return

// }

// 27/07/2023: task 9 - attempted isDescendant, getFamilyMembersArray - line 66 to line 124
// todo: find ancestor tree from topOfTree
// then use logAllPeopleInTreeWithQueue() to look for descendant in ancestor tree, if found return true, else return false

export default function isDescendant(
  descendantName: string,
  ancestorName: string,
  topOfTree: Person,
): boolean {
  const objectArray = getFamilyMembersArray(topOfTree);
  const ancestorObject = objectArray.find(
    (object) => object.name === ancestorName,
  );
  if (ancestorObject) {
    const ancestorsChildrenArray = logAllPeopleInTreeWithQueue(ancestorObject);
    return ancestorsChildrenArray.includes(descendantName);
  } else {
    return false;
  }
}
