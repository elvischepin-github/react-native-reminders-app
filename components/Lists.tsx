import {View, Text, StyleSheet} from 'react-native';
export default function Lists() {
  return (
    <View style={style.view}>
      <Text style={style.text}>📋 Lists 📋</Text>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
  },
});
