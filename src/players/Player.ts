import IPlayer from "./interfaces/IPlayer";

export default class Player implements IPlayer {
    private _hability: number;
    private _velocity: number;
    private _strength: number;
    private _fatigue: number;
    private _name: string;

	constructor(hability: number, velocity: number, strength: number) {
		this._hability = hability;
		this._velocity = velocity;
		this._strength = strength;
	}

    play(fatigue: number, name: string): void {
        this._fatigue = fatigue;
        this._name = name;
        console.log("Playing...");
        console.log("Jogador:", this._name, " com a bola!")
    }
}
