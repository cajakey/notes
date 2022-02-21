import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

import Item from './components/Item';
import Input from './components/Input';

export default function App() {
  const [text, setText] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const outputHandler = enteredText => {
    if (enteredText.length === 0) {
      return;
    }
    setText(currentText => [
      ...currentText, 
      { id: Math.random().toString(), value: enteredText }
    ]);
    setIsAddMode(false);
  };

  const removeHandler = textID => {
    setText(currentText => {
      return currentText.filter((text) => text.id !== textID);
    });
  };
  
  const cancelHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Note" onPress={() => setIsAddMode(true)} />
      <Input
        visible={isAddMode}
        onAdd={outputHandler}
        onCancel={cancelHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={text}
        renderItem={itemData => (
          <Item
            id={itemData.item.id}
            onDelete={removeHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});