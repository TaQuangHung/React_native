import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Header } from './../../layout/header/index';
import imgDoctor from '../../../assets/images/doctor.png';
// import SwiperControl from '../../libs/components/swiper';

export const Welcome = ({ navigation }: any) => {
	return (
		<SafeAreaView>
			<View style={styles.welcome}>
				<Header />
				<View style={styles.wrTitle}>
					<Text style={styles.title}>This is Health UX Kit, Welcome!</Text>
					<Text style={styles.description}>A health vertical UI kit made with love for Adobe XD</Text>
				</View>
				{/* <SwiperControl /> */}
				<View style={styles.wrDoctor}>
					<Image source={imgDoctor} style={styles.imgDoctor} />
				</View>
				<View style={styles.wrBtn}>
					<TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.btnStarted}>
						<Text style={styles.btnText}>Get started</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.wrDoctor}>
					<Text style={styles.textBottom}>Already have an account?</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Login')}>
						<Text style={styles.btnTextSignin}> Sign in</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	welcome: {
		marginTop: 24,
		marginBottom: 30,
		padding: 21
	},
	sectionTop: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 24
	},
	imgPlus: {
		width: 15,
		height: 16,
		marginRight: 1
	},
	wrTitle: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		color: '#205072',
		width: 165,
		fontSize: 18,
		marginBottom: 9,
		textAlign: 'center'
	},
	description: {
		color: '#68B2A0',
		fontSize: 11,
		marginBottom: 24,
		width: 140,
		textAlign: 'center'
	},
	wrDoctor: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	imgDoctor: {
		margin: 'auto'
	},
	wrBtn: {
		marginTop: 24,
		marginBottom: 10
	},
	btnStarted: {
		backgroundColor: '#7BE495',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		height: 50,
		borderRadius: 48
	},
	btnText: {
		fontSize: 20,
		color: '#fff',
		textTransform: 'uppercase'
	},
	textBottom: {
		color: '#68B2A0',
		fontSize: 11
	},
	btnTextSignin: {
		color: '#205072',
		fontSize: 11
	}
});
