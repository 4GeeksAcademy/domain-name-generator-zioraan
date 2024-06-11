let pronouns = ["the", "our", "their", "my", "your"];
let adjectives = ["big", "beautiful", "nasty", "rude", "quick"];
let nouns = ["princess", "raccoon", "fox", "stagbeetle", "king"];
let domains = [".com", ".us", ".uk", ".gov", ".org"];
const domainNames = [];

for (let pronoun = 0; pronoun < pronouns.length; pronoun++) {
  for (let adjective = 0; adjective < adjectives.length; adjective++) {
    for (let noun = 0; noun < nouns.length; noun++) {
      for (let domain = 0; domain < domains.length; domain++) {
        domainNames.push(
          `${pronouns[pronoun]}${adjectives[adjective]}${nouns[noun]}${domains[domain]}`
        );
      }
    }
  }
}
console.log(domainNames);
