import { colors } from '@/constants/colors'
import { Stack } from 'expo-router'
import React from 'react'

export default function _layout() {
  return (
	<Stack
		screenOptions={{
			headerStyle: {
				backgroundColor: colors.background,
			},
			headerTintColor: colors.foreground,
		}}
	>
		<Stack.Screen name='index' 					options={{ title: 'Home', headerTitleAlign: 'center' }} />
		<Stack.Screen name='instruments/bouzouki'  	options={{ title: 'Bouzouki' }} />
		<Stack.Screen name='instruments/violin' 	options={{ title: 'Violin' }} />
		<Stack.Screen name='playground'	 	options={{ title: 'Playground'}} />
	</Stack>
	)
}
