import { Audio } from "expo-av";

export class Source {
	sound: Audio.Sound;
	delay: number;
	note: string;
	constructor(sound: Audio.Sound, delay: number, note: string) {
		this.sound = sound;
		this.delay = delay;
		this.note = note;
	}
}

export async function release(sources: Source[]) {
	sources.forEach(async source => await source.sound.unloadAsync());
}

