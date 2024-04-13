import React from 'react'
import { StyleSheet, View,  } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';
import StaffNote from './staffnote';
import { Source } from '@/constants/Source';

export default function Staff({ sources, highlightedNoteIndex, selected }: { 
	sources?: Source[],
	highlightedNoteIndex?: number,
	selected: string[],
}) {	
  return (
		<View style={{ height: 124, paddingTop: 24 }}>
			<View style={{ position: 'absolute', left: 7, top: 28 , zIndex: 10 
			}}>
				<FontAwesome6 name="staff-snake" size={64} color='white' />
			</View>
			<View style={{ gap: 20, alignItems: 'center' }}> 
				<View style={[styles.line, { top: 0 * 18 }]} />
				<View style={[styles.line, { top: 1 * 18 }]} />
				<View style={[styles.line, { top: 2 * 18 }]} />
				<View style={[styles.line, { top: 3 * 18 }]} />
				<View style={[styles.line, { top: 4 * 18 }]} />
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '85%', left: 48}}>
				<StaffNote highlightedNoteIndex={highlightedNoteIndex} noteName={selected[0]} index={0}/>
				<StaffNote highlightedNoteIndex={highlightedNoteIndex} noteName={selected[1]} index={1}/>
				<StaffNote highlightedNoteIndex={highlightedNoteIndex} noteName={selected[2]} index={2}/>
				<StaffNote highlightedNoteIndex={highlightedNoteIndex} noteName={selected[3]} index={3}/>
		</View>
		</View>
	)
}

const styles = StyleSheet.create({ 
	line: {
		width: "90%",
		backgroundColor: '#888',
		height: 2,
		position: 'absolute',
	}
})
