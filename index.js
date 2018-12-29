// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// import library
import React from 'react'
import {AppRegistry, View, Platform } from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'


// create component
const App = () => {
	console.log({Platform})
	return (
	<View style={{flex:1}}>
		<Header headerText={'Albums'}/>
		<AlbumList/>
	</View>
	)
}

// Render it to device
AppRegistry.registerComponent('albums', () => App);