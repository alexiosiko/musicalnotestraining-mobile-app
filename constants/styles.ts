import { StyleSheet } from "react-native"
import { colors } from "./colors"



export const styles = StyleSheet.create({
	button: {
		padding: 10,
		borderRadius: 10,
		alignSelf: 'center',
		backgroundColor: colors.secondary,
		color: colors.secondaryforeground,
	},
	buttonOutline: {
		padding: 10,
		alignSelf: 'center',
		borderColor: colors.foreground,
		borderRadius: 10,
		borderWidth: 1,
	},
	buttonDestructive: {
		paddingLeft: 10,
		paddingRight: 10,
		alignSelf: 'center',
		borderRadius: 10,
		backgroundColor: colors.destructive,
		color: colors.foreground,
		textAlign: 'center',
	},
	title: {
		color: colors.foreground,
		fontSize: 40,
		fontWeight: "500", 
		textAlign: 'center',
	},
	header: {
		color: colors.foreground,
		fontSize: 20,
		textAlign: 'center',
	},
	background: {
		backgroundColor: colors.background,
		color: colors.foreground,
		height: '100%',
	}
})