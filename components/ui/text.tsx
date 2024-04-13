import { colors } from '@/constants/colors';
import React from 'react'
import { Text as CustomText, StyleProp, TextStyle } from "react-native";

export default function Text({ children, style, light = true, dark }: {
	children: React.ReactNode;
	style?: StyleProp<TextStyle>,
	light?: boolean,
	dark?: boolean,
}) {
  return (
	<CustomText style={[style, {
		color: dark ? (colors.background) : colors.foreground
	}]}>{children}</CustomText>
  )
}

