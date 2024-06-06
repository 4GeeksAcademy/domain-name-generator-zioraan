let pronoun = ["the", "our", "their", "my", "your"];
let noun = ["princess", "raccoon", "fox", "stagbeetle", "king"];
let adjective = ["big", "beautiful", "nasty", "rude", "quick"];
let domain = [".com", ".us", ".uk", ".gov", ".org"];
const name = [];

for (let index = 0; index < pronoun.length; index++) {
  for (let secondIndex = 0; secondIndex < noun.length; secondIndex++) {
    for (let thirdIndex = 0; thirdIndex < adjective.length; thirdIndex++) {
      for (let fourthIndex = 0; fourthIndex < domain.length; fourthIndex++) {
        name.push(
          `${pronoun[index]}${adjective[thirdIndex]}${noun[secondIndex]}${domain[fourthIndex]}`
        );
      }
    }
  }
}
console.log(name);
