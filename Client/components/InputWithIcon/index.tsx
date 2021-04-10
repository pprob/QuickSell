import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import config from '../../styles/config';

interface props {
  placeholder?: string;
  handleInputChange(text: string): any;
  icon: string;
  value: any;
}

const InputWithIcon = ({
  placeholder,
  handleInputChange,
  icon,
  value,
}: props) => {
  const handleOnChange = (text: string) => {
    handleInputChange(text);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleOnChange}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {},
  input: {
    height: 40,
    width: config.deviceWidth * 0.8,
    margin: 12,
    borderWidth: 1,
  },
});

export default InputWithIcon;
