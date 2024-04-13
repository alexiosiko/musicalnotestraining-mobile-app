import React from 'react'
import { Pressable, View } from 'react-native'
import { colors } from '@/constants/colors'
import { Source } from '@/constants/Source'
import Text from '../ui/text'
import Staff from './staff'
import Header from '../ui/header'

export default function Results({ sources, selected, showResults, setShowResults }: {
	sources: Source[],
	selected: string[],
	showResults: boolean,
	setShowResults: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
	<View style={{
		position: 'absolute',
		paddingTop: 12,
		display: showResults ? 'flex' : 'none',
		backgroundColor: colors.accent,
		flexDirection: 'column',
		zIndex: 25, width: '80%', height: '50%', left: '10%'
		}}>
			<Header>Correct answer:</Header>
			<Staff selected={selected} />
			<Header>Your answer:</Header>
			<Staff selected={selected} />
	</View>

	)
}
