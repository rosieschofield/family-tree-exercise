import {
  logAllPeopleInTreeWithQueue,
  countFamilyMembers,
  logInTree,
} from "./treeLogging";
import isDescendant from "./treeLogging";
import { createStarkTree } from "./families/stark";

test("to print all Stark family members name in an array", () => {
  expect(logAllPeopleInTreeWithQueue(createStarkTree())).toStrictEqual([
    "Rickard",
    "Benjen",
    "Lyanna",
    "Eddard",
    "Brandon",
    "Rickon",
    "Bran",
    "Arya",
    "Sansa",
    "Robb",
    "Jon",
  ]);
});

test("to count how many people are in the tree", () => {
  expect(
    countFamilyMembers(logAllPeopleInTreeWithQueue(createStarkTree())),
  ).toBe(11);
});

test("to check if the target person is in tree", () => {
  expect(logInTree("Arya", createStarkTree())).toBe(true);
  expect(logInTree("rosie", createStarkTree())).toBe(false);
  expect(logInTree("ARYA", createStarkTree())).toBe(true);
});

test("to check if target person is Descendant of ancestor", () => {
  expect(isDescendant("Arya", "Eddard", createStarkTree())).toBe(true);
});
