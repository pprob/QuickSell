import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Load splash page, redirect to signin if not loggedin

const Splash = ({navigation}: any) => {
  useEffect((): any => {
    setTimeout(() => {
      navigation.navigate('Signin');
    }, 5000);
  });
  return (
    <View style={styles.container}>
      <Text>Welcome to QuickSell</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
