import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Source } from '@/constants/Source';
import { fadeSound } from '@/lib/sounds';

export default function Play({ sources, setIsPlaying, isPlaying, setHighlightedNote }: {
	sources: Source[],
	setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
	setHighlightedNote: React.Dispatch<React.SetStateAction<number>>,
	isPlaying: boolean,
}) {
	async function onPlay() {
		if (sources == null || isPlaying == true)
			return;
		setIsPlaying(true);
		console.log("playing");
		
		// Stop all current audios
		for (let i = 0; i < sources.length; i++)
			await sources[i].sound.stopAsync()
		

		for (let i = 0; i < sources.length; i++) {
			setHighlightedNote(i);
			const sound = sources[i].sound;
			await sound.setVolumeAsync(1);
			await sound.playAsync()
			await new Promise((resolve) => setTimeout(resolve, 750));
			fadeSound(sound)
		}
		setIsPlaying(false);
		setHighlightedNote(-1);
	}
	return (
		<AntDesign onPress={onPlay} name="play" size={34} color="white" />
  	)
}
