import { colors } from '@/constants/colors';
import { styles } from '@/constants/styles';
import React from 'react'
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown'
import Text from '../ui/text';
import Title from '../ui/title';
import Header from '../ui/header';

export default function DropDown({ setKey }: {
	setKey: React.Dispatch<React.SetStateAction<string>>
}) {
	function onChange(item: { label: string, value: string }) {
		setKey(item.value)
	}
  return (
	<View style={{flexDirection: 'row', alignItems: 'center', padding: 6}}>
		<Header>Key: </Header>

		<Dropdown style={{flexGrow: 1}}
			placeholderStyle ={[ styles.header ,{ textAlign: 'center'}]}
			selectedTextStyle={[ styles.header ,{ textAlign: 'center'}]} 
			labelField='label' data={data}
			placeholder='Select Key'
			valueField={'label'}
			onChange={onChange} 
			/>
	</View>
  )
}

const data = [
    { label: 'A', 	value: 'A4' },
    { label: 'A#', 	value: 'A#4' },
    { label: 'B', 	value: 'B4' },
    { label: 'C', 	value: 'C4' },
    { label: 'C#', 	value: 'C#4' },
    { label: 'D', 	value: 'D4' },
    { label: 'D#', 	value: 'D#4' },
    { label: 'E', 	value: 'E4' },
    { label: 'F', 	value: 'F4' },
    { label: 'F#', 	value: 'F#4' },
    { label: 'G',	value: 'G4' },
    { label: 'G#', 	value: 'G#4' },
  ];