import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import { blue } from 'ansi-colors';
// import console from 'console';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.text}>Hello World</Text>
        
        <View style={styles.box}>
          <Image
            source={require('./assets/avataaars.png')}
            style={{width: 200, height: 200}}
          />
        </View>
        
        <Text style={styles.subtext}>Welcome to React Native</Text>

        <TouchableHighlight
          style={styles.button}
          onPress={console.log('HERE!!')}
        >
          <Text style = {styles.buttonText}> LETS GO >> </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Cochin',
  },
  text : { 
    fontSize: 48,
    color: 'pink',
  },
  subtext : { 
    fontSize: 22,
    color: 'pink',
  },
  box: {
    width: 200,
    height: 200,
    margin: 40,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 15,
    margin: 30,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  }
});
