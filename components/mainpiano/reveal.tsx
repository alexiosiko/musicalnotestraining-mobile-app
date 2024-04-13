import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Reveal({ onReveal }: {
	onReveal: () => void,
}) {
	return (
		<AntDesign onPress={onReveal} name="checkcircle" size={34} color="white" />
	)
}
