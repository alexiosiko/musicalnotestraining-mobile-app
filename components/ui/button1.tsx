import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import Text from './text';
import { styles } from '@/constants/styles';

export default function Button({ children, onPress, style }: {
	children: React.ReactNode;
	onPress?: () => void,
	style?: StyleProp<ViewStyle>
}) {
	
	if (typeof children == 'string') {
		return (
			<View onTouchStart={onPress} style={[styles.button, style]}>
				<Text style={{ textAlign: 'center', fontSize: 24}}>{children}</Text>
			</View>
		)
	}

	return (
		<View>{children}</View>

  )
}

