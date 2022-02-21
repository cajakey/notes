import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const Input = props => {
  const [enteredText, setEnteredText] = useState("");

  const inputHandler = (input) => {
    setEnteredText(input);
  };

  const outputHandler = () => {
    props.onAdd(enteredText);
    setEnteredText('');
  };

  const cancel = () => {
    setEnteredText('');
    props.onCancel();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder=""
          multiline={true}
          style={styles.input}
          onChangeText={inputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={cancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={outputHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default Input;