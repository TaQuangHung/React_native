import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Footer = () => {
	return (
		<View style={styles.footer}>
			<Text style={styles.text}>Footer</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	footer: {
		height: 50,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex'
	},
	text: {
		color: 'white',
		fontSize: 18
	}
});
