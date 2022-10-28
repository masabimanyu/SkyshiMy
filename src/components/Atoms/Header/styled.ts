import {StatusBar, StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    height: StatusBar.currentHeight * 2,
    backgroundColor: '#16ABF8',
  },
  title: {
    paddingHorizontal: 20,
    paddingVertical: 19,
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
  },
});
