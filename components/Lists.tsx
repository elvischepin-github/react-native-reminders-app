import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

import {
  darkContrast,
  lightContrast,
  nonFocusText,
  additional,
  toggleOff,
  toggleOn,
} from '../styles.js';

interface itemsType {
  id: number;
  task: string;
}

export default function Lists() {
  const [items, setItems] = useState<itemsType[]>([
    {id: 0, task: 'Walk the dog'},
    {id: 1, task: 'Eat breakfast'},
    {id: 2, task: 'Exercise'},
    {id: 3, task: 'Call a friend'},
  ]);

  const [input, setInput] = useState('');

  const onChange = (typedText: string) => {
    setInput(typedText);
  };

  const onPress = () => {
    console.log(input);
    setInput('');
  };

  return (
    <View style={style.background}>
      <View style={style.container}>
        <View style={style.inputContainer}>
          <TextInput
            keyboardType="default"
            placeholder="New activity"
            style={style.input}
            value={input}
            onChangeText={onChange}
          />
          <TouchableOpacity style={style.button}>
            <Button color={toggleOn} title="Add" onPress={onPress} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text style={style.text}>{item.task}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  background: {
    backgroundColor: darkContrast,
    flex: 1,
  },
  container: {
    backgroundColor: darkContrast,
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    color: darkContrast,
    height: 40,
    width: 300,
    paddingLeft: 20,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'white',
    height: 40,
  },
  text: {
    backgroundColor: lightContrast,
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
    padding: 10,
    paddingLeft: 50,
  },
});
