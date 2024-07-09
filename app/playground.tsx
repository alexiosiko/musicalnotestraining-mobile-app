import DropDown from '@/components/mainpiano/dropdown';
import Erase from '@/components/mainpiano/erase';
import { PianoKey } from '@/components/mainpiano/pianokey';
import Play from '@/components/mainpiano/play';
import Results from '@/components/mainpiano/results';
import Staff from '@/components/mainpiano/staff';
import Text from '@/components/ui/text';
import { Source } from '@/constants/Source';
import { pianoMap } from '@/constants/sounds';
import { styles } from '@/constants/styles'
import { getNote, randomSequenceOfArray} from '@/lib/notes';
import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react'
import { ScrollView, View, } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { fadeSound } from '@/lib/sounds';


export default function Piano() {
	const [key, setKey] = useState<string>("C4");
	const [scale, setScale] = useState<number[]>([0, 2, 4, 5, 7, 9, 11, 12]);
	const [notes, setNotes] = useState<string[]>([]);
	const [sources, setSources] = useState<Source[]>([]);	
	const [selected, setSelected] = useState<string[]>([]);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [highlightedNoteIndex, setHighlightedNoteIndex] = useState<number>(-1);
	const [showResults, setShowResults] = useState<boolean>(false);

	useEffect(() => {
		getNotes();
		getRandomSequence();
	}, [key])

	function getNotes() {
		let notes: string[] = []
		scale.forEach(scale => {
			notes.push(getNote(key, scale));
		})
		setNotes(notes);
	}

	function getRandomSequence() {
		const randNumArray: number[] = randomSequenceOfArray(scale, 4);
		let sources: Source[] = [];
		randNumArray.forEach(randNum => {
			const sound = new Audio.Sound;
			const note = getNote(key, randNum);
			const audioFile = pianoMap.get(note);
			sound.loadAsync(audioFile)
			const source = new Source(sound, 0.5, note);
			sources.push(source);
		})
		setSources(sources);
	}

	function onReveal() {
		setShowResults(true);
	}
	async function playSequence() {
		if (isPlaying)
			return;
		setIsPlaying(true);

		if (sources == null)
			return;
	
		// Stop all current audios
		for (let i = 0; i < sources.length; i++)
			await sources[i].sound.stopAsync()


		for (let i = 0; i < sources.length; i++) {
			const sound = sources[i].sound;
			await sound.setVolumeAsync(1);
			await sound.playAsync()
			await new Promise((resolve) => setTimeout(resolve, 750));
			fadeSound(sound)
		}
		setIsPlaying(false);
	}
	return (
		<View style={[styles.background, { flexDirection: 'column'}]}>
			{showResults && <Results  setShowResults={setShowResults} selected={selected} sources={sources} />}
			<View style={{ height: '40%', justifyContent: 'space-around'}} >
				<Text style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: 24 }}>{key}</Text>
				{/* <DropDown setKey={setKey} /> */}
				<Staff onPress={playSequence} selected={selected} highlightedNoteIndex={highlightedNoteIndex}	 sources={sources}  />
			</View>
			<View style={{ width: '100%', justifyContent: 'space-around', paddingBottom: 12, flexDirection: 'row' }}>
				<Erase setSelected={setSelected} />
				<Feather name="trash-2" size={34} color="white" />
				{/* <Play isPlaying={isPlaying} setHighlightedNote={setHighlightedNoteIndex} setIsPlaying={setIsPlaying} sources={sources} /> */}
				<AntDesign onPress={() => setShowResults(true)} name="checkcircleo" size={34} color="white" />
				</View>
			<ScrollView contentOffset={{ x: 0, y: 20 }} horizontal={true} >
			{/* <PianoKey setSelected={setSelected} notes={notes} noteName='C1'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='C#1' position={0} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='D1'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='D#1' position={1} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='E1'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='F1'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='F#1' position={3} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='G1'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='G#1' position={4} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='A1'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='A#1' position={5} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='B1'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='C2'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='C#2' position={7} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='D2'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='D#2' position={8} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='E2'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='F2'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='F#2' position={10} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='G2'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='G#2' position={11} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='A2'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='A#2' position={12} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='B2'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='C3'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='C#3' position={0} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='D3'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='D#3' position={1} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='E3'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='F3'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='F#3' position={3} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='G3'/> */}
				<PianoKey setSelected={setSelected} notes={notes} noteName='A3'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='A#3' position={0} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='B3'/> 
				<PianoKey setSelected={setSelected} notes={notes} noteName='C4'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='C#4' position={2} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='D4'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='D#4' position={3} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='E4'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='F4'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='F#4' position={5} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='G4'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='G#4' position={6} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='A4'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='A#4' position={7} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='B4'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='C5'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='C#5' position={9} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='D5'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='D#5' position={10} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='E5'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='F5'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='F#5' position={12} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='G5'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='G#5' position={13} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='A5'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='A#5' position={14} />
				<PianoKey setSelected={setSelected} notes={notes} noteName='B5'/>
				<PianoKey setSelected={setSelected} notes={notes} noteName='C6'/>
			</ScrollView>
		</View>
	)
}


function isSameArray(sources: Source[], selected: string[]): boolean {
	for (let i = 0; i < 4; i++) {
		const note1 = sources[i].note;
		const note2 = selected[i];
		if (note1 != note2)
			return false;
	}
	return true;
}