import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from '../../layout';

export const Login = () => {
	const [
		email,
		setEmail
	] = useState('youremail@gmail.com');

	const [
		password,
		setPassword
	] = useState('password123');

	const [
		typePassword,
		setTypePassword
	] = useState(true);

	return (
		<SafeAreaView>
			<View style={styles.login}>
				<Header />
				<View style={styles.sectionTop}>
					<Text style={styles.textLogin}>Login</Text>
					<Text style={styles.descriptionLogin}>Enter your login details to access your account</Text>
				</View>
				<View>
					<TextInput style={styles.textInput} onChangeText={(text) => setEmail(text)} value={email} />
					<TextInput
						secureTextEntry={typePassword}
						style={styles.textInput}
						onChangeText={(text) => setPassword(text)}
						value={password}
					/>
					<TouchableOpacity
						onPress={() =>
							alert(`
								email: ${email}
								password: ${password}
							`)}
						style={styles.btnStarted}
					>
						<Text style={styles.btnText}>Log in</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	login: {
		marginTop: 24,
		padding: 21
	},
	sectionTop: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		marginBottom: 18,
		alignItems: 'center'
	},
	textLogin: {
		fontSize: 14,
		color: '#205072',
		marginBottom: 10
	},
	descriptionLogin: {
		fontSize: 11,
		color: '#68B2A0',
		width: 130,
		textAlign: 'center'
	},
	textInput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 36,
		paddingLeft: 11,
		marginBottom: 5
	},
	btnStarted: {
		backgroundColor: '#7BE495',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		height: 50,
		borderRadius: 48,
		marginTop: 7,
		marginRight: 4,
		marginLeft: 4
	},
	btnText: {
		fontSize: 20,
		color: '#fff',
		textTransform: 'uppercase'
	}
});
