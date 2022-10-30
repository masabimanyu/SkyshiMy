import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 18,
    alignItems: 'center',
  },
  titleNull: {
    fontWeight: '600',
    fontSize: 22,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    borderBottomColor: '#D8D8D8',
    marginTop: 5,
    marginBottom: 14,
    color: '#111111',
  },
  title: {
    fontWeight: '600',
    fontSize: 22,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 14,
    color: '#111111',
  },
  titleModal: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 15,
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
