import Instrument from '@/components/instrument/instrument'
import React from 'react'

export default function Piano() {
	return <Instrument notesMap={violinMap} />
}

const violinMap: Map<string, any> = new Map([
	["A4", require("@/assets/notes/violin/A4.mp3")],
	["A5", require("@/assets/notes/violin/A5.mp3")],
	["A6", require("@/assets/notes/violin/A6.mp3")],
	["C4", require("@/assets/notes/violin/C4.mp3")],
	["C5", require("@/assets/notes/violin/C5.mp3")],
	["C6", require("@/assets/notes/violin/C6.mp3")],
	["E4", require("@/assets/notes/violin/E4.mp3")],
	["E5", require("@/assets/notes/violin/E5.mp3")],
	["E6", require("@/assets/notes/violin/E6.mp3")],
	["G4", require("@/assets/notes/violin/G4.mp3")],
	["G5", require("@/assets/notes/violin/G5.mp3")],
	["G6", require("@/assets/notes/violin/G6.mp3")],
])