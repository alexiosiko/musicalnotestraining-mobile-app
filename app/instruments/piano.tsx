import Instrument from '@/components/instrument/instrument'
import { pianoMap } from '@/constants/sounds'
import React from 'react'

export default function Piano() {
	return <Instrument notesMap={pianoMap} />
}



