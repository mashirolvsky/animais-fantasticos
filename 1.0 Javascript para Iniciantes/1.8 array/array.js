// Array
var videogames = ["switch", "ps4", "xbox"];

videogames[0];
videogames[1];

videogames.push("3ds");

// Loops

// For
for (var i = 0; i < videogames.length; i++) {
  console.log(videogames[i]);
}

// While
var i = 0;
while (i <= videogames.length) {
  console.log(videogames[i]);
  if (videogames[i] === "switch") {
    break;
  }
  i++;
}

// Console
console.log({
  videogame: videogames,
  videogamesForEach: videogames.forEach(system => {
    switch (system.toLocaleLowerCase()) {
      case "switch":
        return console.log("O console que define design e entretenimento.");
        break;
      case "ps4":
        console.log("Proprietário de um legado gigantesco");
        break;
      case "xbox":
        console.log("Microsoft");
        break;
      default:
        console.log("Seu gosto, seu jogo.");
        break;
    }
  }),
});
