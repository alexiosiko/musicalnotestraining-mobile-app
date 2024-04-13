import React from 'react'
import { View } from 'react-native'
import Text from './text';
import { styles } from '@/constants/styles';

export default function Button({ children }: {
	children: React.ReactNode;
}) {
	
	if (typeof children == 'string') {
		return (
			<View style={styles.button}>
				<Text>{children}</Text>
			</View>
		)
	}

	return (
		<View>{children}</View>

  )
}

