import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native';
import { styles } from "@/constants/styles";

export default function Header({ children, style }: {
	children: React.ReactNode,
	style?: StyleProp<TextStyle>
}) {
  return (
	<Text style={[styles.header, style]}>{children}</Text>
  )
}
