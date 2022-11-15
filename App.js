import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contacts from './components/Contacts/Contacts';
import { styles } from './styles';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!!</Text>
        <StatusBar style="auto" />
      </View>
      <Contacts></Contacts>
      <View style={styles.doubleContainer}>
        <Text>
          Container 2
        </Text>
      </View>
    </>
  );
}

