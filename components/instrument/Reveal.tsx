"use client"

import { Source } from "@/constants/Source";
import { colors } from "@/constants/colors";
import React, { Dispatch, SetStateAction } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Title from "../ui/title";
import { Ionicons } from "@expo/vector-icons";
import Text from "../ui/text";
import SuperScript from "../ui/superscript";

export default function Reveal({ sources, reveal, setReveal }: { 
	sources: Source[] | undefined,
	reveal: boolean,
	setReveal: Dispatch<SetStateAction<boolean>>,
}) {
	const onClick = () => setReveal(!reveal);
	function sourcesToNotesArray(): string[] {
		let notes: string[] = [];
		sources?.map(source => {
			const note = source.note.substring(0, source.note.length - 1);
			notes.push(note);
		});
		return notes;
	}

	return (
		<TouchableOpacity
			onPress={onClick}
			style={[localStyles.reveal]}
			>
				{reveal ?
					<Title>
						{sourcesToNotesArray().map((note, index) =>
							<Text key={index} style={{fontSize: 50, marginRight: 24}}>{note} </Text>
						)}
					</Title> 
					:
					<View style={{ marginLeft: 'auto', marginRight: 'auto' }}>

						<Ionicons name="eye-off" color={colors.foreground} size={100}/>
					</View>
				}
		</TouchableOpacity>
	)
}

const localStyles = StyleSheet.create({
	reveal: {
		display: 'flex',
		justifyContent: 'center',
		height: '50%',
	}
})