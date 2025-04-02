import {View, StyleSheet, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Discipline: undefined;
  Statistics: undefined;
  Settings: undefined;
};

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export default function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <>
      <View style={style.view}></View>
    </>
  );
}

const style = StyleSheet.create({
  view: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingBottom: 25,
  },
  text: {
    color: 'white',
    marginTop: 50,
    fontSize: 20,
  },
});
