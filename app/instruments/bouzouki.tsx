import React from 'react'
import Instrument from '@/components/instrument/instrument';

export default function Bouzouki() {
	return <Instrument notesMap={bouzoukiMap} />
}
const bouzoukiMap: Map<string, any> = new Map([
	["A4" ,require("@/assets/notes/bouzouki/A.mp3")],
	["A#4",require("@/assets/notes/bouzouki/A#.mp3")],
	["B4" ,require("@/assets/notes/bouzouki/B.mp3")],
	["C4" ,require("@/assets/notes/bouzouki/C.mp3")],
	["C#4",require("@/assets/notes/bouzouki/C#.mp3")],
	["D4" ,require("@/assets/notes/bouzouki/D.mp3")],
	["D#4",require("@/assets/notes/bouzouki/D#.mp3")],
	["E4" ,require("@/assets/notes/bouzouki/E.mp3")],
	["F4" ,require("@/assets/notes/bouzouki/F.mp3")],
	["F#4",require("@/assets/notes/bouzouki/F#.mp3")],
	["G4" ,require("@/assets/notes/bouzouki/G.mp3")],
	["G#4",require("@/assets/notes/bouzouki/G#.mp3")],
])