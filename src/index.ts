import FlyweightFactory from "./factory/FlyweightFactory";

const factory = new FlyweightFactory();

let player1 = factory.getPlayer("899887", 89, 98, 87);

player1.play(2, "Cannobio");

let player2 = factory.getPlayer("899887", 89, 98, 87);

player2.play(8, "Bento");

console.log("\nNúmero de jogadores na fábrica:", factory.getNumbersOfPlayers())
