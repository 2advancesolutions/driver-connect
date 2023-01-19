
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './routes/Login';
import { Passenger } from './routes/Passenger';
import { BookRide } from './routes/BookRide'


export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      <Passenger/>
   
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
});
