import InstrumentItem from '@/components/instrument/instrumentItem'
import Header from '@/components/ui/header'
import Title from '@/components/ui/title'
import { colors } from '@/constants/colors'
import { styles } from '@/constants/styles'
import { Link } from 'expo-router'
import React from 'react'
import { Image, View } from 'react-native'

export default function Index() {
  return (
	<View style={[styles.background, {padding: 12 }]}>
		<Title style={styles.title} >Train Your Ear!</Title>
		<Image 
		source={require("@/assets/images/landingmain.png")}
		style={{ height: 300, width: '100%', borderRadius: 10}}
		/>
		<View style={{ gap: 12, paddingTop: 12, flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap', justifyContent: 'center'}}>
			<InstrumentItem header='Bouzouki' href='/instruments/bouzouki' />
			<InstrumentItem header='Piano' href='/instruments/piano' />
			{/* <InstrumentItem header='Violin' href='/instruments/violin' /> */}
		</View>
		<Link href="/piano" style={[styles.button, { marginTop: 24}]}>
			<Header style={[styles.button, {width: 100, color: colors.secondaryforeground}]}>Piano Playground</Header>
		</Link>
	</View>
  )
}
