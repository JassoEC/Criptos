import React from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';
import Header from './src/components/Header';
import Form from './src/components/Form';
const App = () => {
  return (
    <>
      <Header />
      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.formContainer}>
        <Form />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  formContainer: {
    marginHorizontal: '2.5%',
  }
});

export default App;