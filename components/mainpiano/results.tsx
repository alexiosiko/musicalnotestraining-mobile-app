import React from 'react'
import { Modal, Pressable, View } from 'react-native'
import { colors } from '@/constants/colors'
import { Source } from '@/constants/Source'
import Text from '../ui/text'
import Staff from './staff'
import Header from '../ui/header'
import Button from '../ui/button1'
import { styles } from '@/constants/styles'

export default function Results({ sources, selected, setShowResults }: {
	sources: Source[],
	selected: string[],
	setShowResults: React.Dispatch<React.SetStateAction<boolean>>
}) {
	const sourcesToStrings = (): string[] => {
		const strings: string[] = [];
		sources.forEach(source =>  strings.push(source.note));
		return strings;
	}
	const handleOnContinue = () => {
		setShowResults(false)
		sources = [];
	}
	const isWin = (): boolean => {
		if (selected.length != sources.length)
			return false;

		for (let i = 0; i < selected.length; i++) {
			const a = selected[i]
			const b = sources[i].note;
			if (a != b)
				return false;
		}
		return true;
	}
  return (
	<Modal 
	animationType="slide" transparent={false} presentationStyle='pageSheet'>
		<View style={{ backgroundColor: colors.background, height: '100%', paddingTop: 24, justifyContent: 'space-evenly'}}>
			<View>
				<Text style={styles.title}>{isWin() ? "Success!" : "Uh Oh!"}</Text>
				<Header>Correct answer:</Header>
				<Staff selected={sourcesToStrings()} />
				<Header>Your answer:</Header>
				<Staff selected={selected} />
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
				<Button style={{ width: 124, backgroundColor: colors.destructive }} onPress={() => setShowResults(false)}>Back</Button>
				<Button style={{ width: 124 }} onPress={handleOnContinue}>Next</Button>
			</View>
		</View>
	</Modal>

	)
}
