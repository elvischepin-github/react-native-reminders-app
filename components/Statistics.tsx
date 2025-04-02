import {View, Text, StyleSheet} from 'react-native';
export default function Statistics() {
  return (
    <View style={style.view}>
      <Text style={style.text}>📊 STATISTICS 📊</Text>
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
