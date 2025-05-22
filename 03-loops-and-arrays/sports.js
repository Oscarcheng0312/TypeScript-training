"use strict";
let sports = ["Golf", "Soccer", "Hockey", "Swimming"];
// for (let i = 0; i < sports.length; i++) {
//   console.log(sports[i]);
// }
// simplified for loop
for (let tempSports of sports) {
    if (tempSports == "Soccer") {
        console.log("Hey " + tempSports + " my favoriate sport");
    }
    else {
        console.log(tempSports);
    }
}
