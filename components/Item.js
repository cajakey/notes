import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Item = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default Item;