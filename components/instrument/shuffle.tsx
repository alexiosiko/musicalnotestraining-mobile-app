import { colors } from "@/constants/colors";
import { styles } from "@/constants/styles";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Shuffle({ shuffle, isPlaying }: { 
	shuffle:  () => void,
	isPlaying: boolean,
}) {
	return (
		<TouchableOpacity 

			onPress={shuffle}>
				<Ionicons name="shuffle" color={colors.foreground} size={60} />
		</TouchableOpacity>
		
	)
}