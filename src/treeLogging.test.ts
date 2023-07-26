import {logAllPeopleInTreeWithQueue} from "./treeLogging";
import {createStarkTree} from "./families/stark";

test("to print all Stark family members name in an array",() => {
    expect(logAllPeopleInTreeWithQueue(createStarkTree())).toStrictEqual(["Rickard","Benjen","Lyanna","Eddard","Brandon","Rickon","Bran","Arya","Sansa","Robb","Jon"]);
})

