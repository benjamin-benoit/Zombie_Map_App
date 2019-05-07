// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   StatusBar
// } from 'react-native';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar
//           barStyle="light-content"
//           backgroundColor="#4F6D7A"
//         />
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#4F6D7A',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: '#F5FCFF',
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#F5FCFF',
//     marginBottom: 5,
//   },
// });

import React from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import Login from './src/screens/Login'
import Secured from './src/screens/Secured'
import Game from './src/screens/Game'

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Secured: {
    screen: Secured,
  },
  Game: {
    screen: Game,
  }
}, {
  initialRouteName: 'Login',
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;


// import React, { Component } from 'react';
// import {
//   AppRegistry
// } from 'react-native';

// import Login from './src/screens/Login';
// import Secured from './src/screens/Secured';

// export default class App extends React.Component {

//   state = {
//     isLoggedIn: false
//   }

//   render() {

//     if (this.state.isLoggedIn) 
//       return <Secured 
//           onLogoutPress={() => this.setState({isLoggedIn: false})}
//         />;
//     else 
//       return <Login 
//           onLoginPress={() => this.setState({isLoggedIn: true})}
//         />;
//   }

// }