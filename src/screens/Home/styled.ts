import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 22,
    color: '#111111',
  },
});
