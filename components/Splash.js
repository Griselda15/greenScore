import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('QuestionCard');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/splash.json')}
        autoPlay
        loop={false}
        style={styles.lottie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bbde76',
  },
  lottie: {
    width: 150,
    height: 150,
  },
});

export default Splash;
