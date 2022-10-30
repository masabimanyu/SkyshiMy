import {StatusBar, StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    height: StatusBar.currentHeight * 2.1,
    backgroundColor: '#16ABF8',
    flexDirection: 'row',
  },
  title: {
    paddingHorizontal: 20,
    paddingVertical: 23,
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
  },
});
