import { Source } from '@/constants/Source';
import { pianoMap } from '@/constants/sounds';
import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Text from '../ui/text';

export const pianoWhiteKeyWidth = 42;
const offset = pianoWhiteKeyWidth / 1.8;

export function PianoKey({ position, noteName, notes, setSelected }: {
	noteName: string,
	position?: number,
	notes: string[],
	setSelected: React.Dispatch<React.SetStateAction<string[]>>
}) {
	const [source, setSource] = useState<Source>();
	const [isTouching, setIsTouching] = useState<boolean>(false);
	const [asyncing, setAsyncing] = useState<boolean>(false);
	const [isInScope, setIsInScope] = useState<boolean>(false);

	useEffect(() => {
		async function GetSource() {
			try {
				const sound = new Audio.Sound;
				await sound.loadAsync(pianoMap.get(noteName))
				const source = new Source(sound, 0, noteName);
				setSource(source);
			} catch (e) {
				console.error(e);
			}
		}
		GetSource();
	}, [])
	
	useEffect(() => {
		if (notes.includes(noteName))
			setIsInScope(true);
		else
			setIsInScope(false);
	}, [notes, noteName])

	function onTouch() {
		if (isInScope == false)
			return;
		setIsTouching(true);
		Play();
		setSelected((prevSelected) => {
			if (prevSelected.length === 4)
				return prevSelected;
			else
				return [...prevSelected, noteName];
		})
	}

	async function Play() {
		if (asyncing)
			return;
		setAsyncing(true);
		try {
			await source?.sound.stopAsync();
			await source?.sound.setPositionAsync(1);
			await source?.sound.playAsync();
		} finally {
			setAsyncing(false);
		}
	}

	const pianoBlackKeyWidth = pianoWhiteKeyWidth * 0.9;
	if (position == undefined) // If set position, that means it's a black key
		return (
			<View onTouchStart={onTouch} onTouchEnd={() => setIsTouching(false)} onTouchCancel={() => setIsTouching(false)} style={{
				width: pianoWhiteKeyWidth,
				height: '100%',
				backgroundColor: isInScope ? (isTouching ? 'dimgrey' : 'white') : '#888',
				borderWidth: 1
			}}>
				<Text style={{textAlign: 'center', width: '100%', position: 'absolute', bottom: 16 }} dark>{noteName}</Text>
			</View>
		)
	else
		return (
			<View onTouchStart={onTouch} onTouchEnd={() => setIsTouching(false)} onTouchCancel={() => setIsTouching(false)} style={{ 
				backgroundColor: isInScope ? (isTouching ? '#888' : 'black') : '#666',
				width: pianoBlackKeyWidth,
				height: '50%',
				position: 'absolute',
				left: pianoWhiteKeyWidth * position + offset,
				zIndex: 1,
				borderRadius: 7,
				borderTopLeftRadius: 0,
				borderTopRightRadius: 0,
			}}>
				<Text style={{textAlign: 'center', width: '100%', position: 'absolute', bottom: 4 }}>{noteName}</Text>

			</View>
		)
}
