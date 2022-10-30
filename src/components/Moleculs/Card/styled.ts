import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 22, height: 24},
    shadowOpacity: 12,
    shadowRadius: 3,
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    color: '#111111',
    paddingHorizontal: 13,
    paddingVertical: 15,
  },
});
