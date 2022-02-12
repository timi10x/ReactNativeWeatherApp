import { StatusBar } from 'expo-status-bar';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  TextInput, 
  View,
  KeyboardAvoidingView
} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.green}>
        Open up App.js to start working on your app uuiuiu!
        </Text>
      <Text>This is a good way to start This</Text>
      <TextInput style={{backgroundColor: 'red'}} placeholder="Password" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ?  'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  },
  green: {
    color: 'green'
  }
});
