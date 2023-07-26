import { createBaratheonTree } from "./families/baratheon";
import { createBritishSuccessionTree } from "./families/britain";
import { createLannisterTree } from "./families/lannister";
import { createStarkTree } from "./families/stark";
//import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./solutions/solution";
import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./treeLogging";
import { printBanner } from "./utils/bannerUtils";
import { printPersonTreeAsAscii } from "./utils/toAsciiTree";
import { logInTree } from "./treeLogging";

async function mainProgram() {
  printBanner("BARATHEON");
  printPersonTreeAsAscii(createBaratheonTree());

  printBanner("STARK");
  printPersonTreeAsAscii(createStarkTree());

  // Uncomment to test your work..

  // printBanner("LANNISTER");
  // printPersonTreeAsAscii(createLannisterTree());

  // printBanner("All people in STARK");
  // logAllPeopleInTree(createStarkTree());
  // printBanner("All people in STARK");
  // logAllPeopleInTreeWithQueue(createStarkTree());

  // printBanner("WITH STACK - british royals")
  // logAllPeopleInTree(createBritishSuccessionTree());
  printBanner("WITH QUEUE - british royals");
  logAllPeopleInTreeWithQueue(createBritishSuccessionTree());

  // You'll need to add more test code for later exercises, too.
  printBanner("to check if the target person is in tree");
  logInTree("Arya",createStarkTree()) // true
  logInTree("rosie",createStarkTree()) //false
  logInTree("ARYA",createStarkTree()) //true
}

mainProgram();
