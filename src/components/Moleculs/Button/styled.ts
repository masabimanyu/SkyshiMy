import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    borderRadius: 45,
    backgroundColor: '#16ABF8',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  containerTitle: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: '#fff',
    paddingHorizontal: 9.5,
    paddingVertical: 9,
  },
  iconTitle: {
    fontWeight: '600',
    fontSize: 22,
    color: '#fff',
    paddingHorizontal: 3,
    paddingVertical: 4,
  },
});
