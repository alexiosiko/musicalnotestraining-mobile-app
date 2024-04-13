import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Audio } from 'expo-av'
import Play from '@/components/instrument/play';
import { Source, release } from '@/constants/Source';
import Shuffle from '@/components/instrument/shuffle';
import Reveal from '@/components/instrument/Reveal';
import Spinner from 'react-native-loading-spinner-overlay';
import { styles } from '@/constants/styles';
import { getNote, randomSequenceOfArray } from '@/lib/notes';

export default function Instrument({ notesMap }: {
	notesMap: Map<string, any>
}) {
	const [key] = useState<string>("C4");
	const [scale] = useState<number[]>([0, 2, 4, 5, 7, 9, 11, 12]);

	const [loading, setLoading] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [reveal, setReveal] = useState(false);
	const [sources, setSources] = useState<Source[]>([]);
	const [delay] = useState<number>(0.5);


	function getNotes() {
		let notes: string[] = []
		scale.forEach(scale => {
			notes.push(getNote(key, scale));
		})
	}

	useEffect(() => {
		getNotes();
		shuffle()
	}, []);

	async function shuffle() {
		setLoading(true);

		release(sources);
		setReveal(false);

		const newSources: Source[] = [];

		const randNumArray: number[] = randomSequenceOfArray(scale, 4);
		const randSequenceOfNotes: string[] = [];
		randNumArray.forEach(randNum => {
			randSequenceOfNotes.push(getNote(key, randNum))
		})
		randSequenceOfNotes.forEach(async sequence => {
			const sound = new Audio.Sound;
			await sound.loadAsync(notesMap.get(sequence));
			const newSource = new Source(sound, delay, sequence);
			newSources.push(newSource);
		})

		setSources(newSources);
		setLoading(false);
		console.log(randSequenceOfNotes);
	}
	return (
	<View style={[styles.background, { display: 'flex', flexDirection: 'column', height: '100%' ,justifyContent: 'space-around', padding: 12}]} >
		<Spinner visible={loading} size='large' color='white' />
		<Reveal sources={sources} reveal={reveal} setReveal={setReveal}/>
		<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
			<Shuffle isPlaying={isPlaying} shuffle={shuffle}/>
			<Play isPlaying={isPlaying} sources={sources} setIsPlaying={setIsPlaying} />
		</View>
	</View>
  )
}


