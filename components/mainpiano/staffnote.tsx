import React from 'react'
import { View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Text from '../ui/text';
import { FontAwesome } from '@expo/vector-icons';

export default function StaffNote({ noteName, highlightedNoteIndex, index}: {
	noteName: string,
	highlightedNoteIndex: number | undefined,
	index: number,
}) {
	let isSharp = false;
	if (noteName && noteName.includes('s')) 
		isSharp = true;	

	const noteHeightOnStaff = notesMap.get(noteName);
	if (noteName == undefined) {
		return (
			<View style={{ position: 'relative', top: noteHeightOnStaff, zIndex: 10, width: 24}} >
				<FontAwesome name="question-circle" style={{ position: 'relative', top: 18 * 2 - 12}} size={24} color={highlightedNoteIndex == index ? 'green' : 'white'}/>
				{/* <Text style={{ position: 'absolute', top:52, color: 'white' }} >{noteName}</Text> */}
			</View>
		)
	}

	return (
		<View style={{ position: 'relative', top: noteHeightOnStaff, zIndex: 10, width: 24}}>
				<Entypo name="note" size={32} color={highlightedNoteIndex == index ? 'green' : 'white'} />
				{isSharp && 
					<MaterialIcons name="grid-3x3" size={24} style={{ position: 'relative', bottom: 14}} color={highlightedNoteIndex == index ? 'green' : 'white'} />
				}
				{/* <Text style={{ position: 'absolute', top:52, color: 'white' }} >{noteName}</Text> */}
		</View>
	)
}


export const notesMap: Map<string, number> =  new Map([
	[	"A3", 	18 * 4.5	],
	[	"A#3", 	18 * 4.5	],
	[	"B3", 	18 * 4		],
	[	"C4", 	18 * 3.5	],
	[	"C#4", 	18 * 3.5	],
	[	"D4",	18 * 3		],
	[	"D#4",	18 * 3		],
	[	"E4", 	18 * 2.5	],
	[	"F4", 	18 * 2		],
	[	"F#4", 	18 * 2		],
	[	"G4", 	18 * 1.5	],
	[	"G#4", 	18 * 1.5	],
	[	"A4", 	18 * 1		],
	[	"A#4", 	18 * 1		],
	[	"B4", 	18 * 0.5	],
	[	"C5", 	18 * 0		],
	[	"C#5", 	18 * 0		],
	[	"D5",	18 * -0.5	],
	[	"D#5",	18 * -0.5	],
	[	"E5", 	18 * -1		],
	[	"F5", 	18 * -1.5	],
	[	"F#5", 	18 * -1.5	],
	[	"G5", 	18 * -2		],
	[	"G#5", 	18 * -2		],
	[	"A5", 	18 * -2.5	],
	[	"A#5", 	18 * -2.5	],
	[	"B5", 	18 * -3		],
	[	"C6", 	18 * -3.5		],
	[	"C#6", 	18 * -3.5	],
	[	"D6",	18 * -4	],
	[	"D#6",	18 * -4	],
	[	"E6", 	18 * -4.5		],
	[	"F6", 	18 * -5	],
	[	"F#6", 	18 * -5	],
	[	"G6", 	18 * -5.5		],
	[	"G#6", 	18 * -5.5	],
	[	"A6", 	18 * -6	],
	[	"A#6", 	18 * -6	],
	[	"B6", 	18 * -6.5		],


])