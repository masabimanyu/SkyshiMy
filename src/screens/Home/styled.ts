import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 28,
    color: '#111111',
  },
  titleModal: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 15,
    color: '#111111',
  },
  titleSuccess: {
    fontWeight: '500',
    fontSize: 18,
    marginLeft: 15,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#111111',
  },
  input: {
    borderColor: '#E5E5E5',
    height: 52,
    margin: 12,
    borderRadius: 6,
    borderWidth: 1,
    padding: 10,
  },
});
