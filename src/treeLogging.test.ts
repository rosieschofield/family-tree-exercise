import {logAllPeopleInTreeWithQueue, countFamilyMembers} from "./treeLogging";
import {createStarkTree} from "./families/stark";

test("to print all Stark family members name in an array",() => {
    expect(logAllPeopleInTreeWithQueue(createStarkTree())).toStrictEqual(["Rickard","Benjen","Lyanna","Eddard","Brandon","Rickon","Bran","Arya","Sansa","Robb","Jon"]);
})

test("to count how many people are in the tree",() => {
    expect(countFamilyMembers(logAllPeopleInTreeWithQueue(createStarkTree()))).toBe(11);
})