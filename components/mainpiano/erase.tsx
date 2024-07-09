import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';

export default function Erase({ setSelected }: {
	setSelected: React.Dispatch<React.SetStateAction<string[]>>
}) {
	function onErase() {
		setSelected(prevSelected => {
			const newSelected = [...prevSelected];
			newSelected.pop();
			return newSelected;
		})
	}
	return (
		<View onTouchStart={onErase}>
			<FontAwesome5 name="undo" size={32} color="white" />
		</View>
	)
}
