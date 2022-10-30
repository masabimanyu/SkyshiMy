import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    borderRadius: 45,
    flexWrap: 'wrap',
    backgroundColor: '#16ABF8',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  containerDisable: {
    opacity: 0.4,
    borderRadius: 45,
    flexWrap: 'wrap',
    backgroundColor: '#16ABF8',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  containerTitle: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    marginVertical: 3,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 2,
    paddingVertical: 6,
  },
  iconTitle: {
    fontWeight: '600',
    fontSize: 22,
    color: '#fff',
    paddingHorizontal: 2,
    paddingVertical: 3,
  },
});
