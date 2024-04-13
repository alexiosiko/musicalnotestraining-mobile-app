import { Source } from "@/constants/Source";
import { Dispatch, SetStateAction } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Sound } from "expo-av/build/Audio";
import { colors } from "@/constants/colors";
import { fadeSound } from "@/lib/sounds";


export default function Play({ sources, isPlaying, setIsPlaying }: { 
	sources: Source[] | undefined,
	isPlaying: boolean,
	setIsPlaying: Dispatch<SetStateAction<boolean>>,
}) {
	async function onPlay() {
		if (sources == null)
			return;
	
		// Stop all current audios
		for (let i = 0; i < sources.length; i++)
			await sources[i].sound.stopAsync()

		setIsPlaying(true);

		for (let i = 0; i < sources.length; i++) {
			const sound = sources[i].sound;
			await sound.setVolumeAsync(1);
			await sound.playAsync()
			await new Promise((resolve) => setTimeout(resolve, 750));
			fadeSound(sound)
		}
		setIsPlaying(false);
	}
	return (
		<TouchableOpacity onPress={onPlay} >
			<Ionicons name="play" color={colors.foreground}  size={60} />
		</TouchableOpacity>
	);
}


