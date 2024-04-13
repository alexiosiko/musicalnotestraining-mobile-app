import { Link, router } from 'expo-router'
import React from 'react'
import { Button, Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native'
import Header from '../ui/header'
import { styles } from '@/constants/styles'
import { colors } from '@/constants/colors'

export default function InstrumentItem({ href, header }: {
	href: string,
	header: string
}) {
	function onPress() {
		router.push(href as any)
	}
  return (
	<TouchableOpacity onPress={onPress}  style={[styles.button]}>
			<Header style={{width: 100, color: colors.secondaryforeground}}>{header}</Header>
	</TouchableOpacity>
  )
}
