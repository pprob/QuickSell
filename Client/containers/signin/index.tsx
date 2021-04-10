import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputWithIcon from '../../components/InputWithIcon';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleEmailChange = (text: string) => {
    let value = text.toLowerCase().trim();
    return setEmail(value);
  };

  const handleUsernameChange = (text: string) => {
    return setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    return setPassword(text);
  };

  return (
    <View style={styles.container}>
      <InputWithIcon
        icon=""
        handleInputChange={handleEmailChange}
        value={email}
        placeholder="Enter your email"
      />
      <InputWithIcon
        icon=""
        handleInputChange={handleUsernameChange}
        placeholder="Please enter your username"
        value={username}
      />
      <InputWithIcon
        icon=""
        handleInputChange={handlePasswordChange}
        placeholder="Enter your password"
        value={password}
      />
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

export default Signin;
