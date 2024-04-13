import { Sound } from "expo-av/build/Audio";

export async function fadeSound(sound: Sound) {
	for (let i = 0.9; i >= 0; i -= 0.1) {
		await new Promise((resolve) => setTimeout(resolve, 1));
		await sound.setVolumeAsync(i);
	} 
	sound.stopAsync();
}