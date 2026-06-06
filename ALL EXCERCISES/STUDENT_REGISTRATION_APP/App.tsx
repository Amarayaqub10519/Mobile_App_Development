import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>introduction to React Native with TypeScript and Expo</Text>
      <StatusBar style="auto" />

        <View style={styles2.container_1}>
          <Text>This is the class of 2026-2027 with react native</Text>
        </View>

        <View style={styles3.container_3}>
          <Text>By the end of this course, you will have a solid understanding of React Native development.</Text>
        </View>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    borderRadius: 19,
    margin: 20,
    fontSize: 20,
  

  },
});

const styles2 = StyleSheet.create({
  container_1: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
   backgroundColor: 'lightblue',
    borderWidth: 2,
    height: 50,
    borderRadius: 19,
    margin: 20,
    width: 200,
    maxHeight: 150,
  },
});

const styles3 = StyleSheet.create({
  container_3: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    backgroundColor: 'lightgreen',
    borderWidth: 2,
    height: 50,
    borderRadius: 19,
    margin: 20,
    width: 200,
    maxHeight: 150,
  },
});