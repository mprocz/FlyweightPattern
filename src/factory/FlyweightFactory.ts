import Player from "../players/Player";

export default class FlyweightFactory {
    private players = new Map <string, Player>();

    public getPlayer(key: string, hability: number, velocity: number, strength: number): Player{
        let new_player: Player;

        if (this.players.has(key)){
            new_player = this.players.get(key);
        } else {
            new_player = new Player(hability, velocity, strength);
            this.players.set(key, new_player);
        }

        return new_player;
    }

    public getNumbersOfPlayers(): number{
        return this.players.size;
    }
}