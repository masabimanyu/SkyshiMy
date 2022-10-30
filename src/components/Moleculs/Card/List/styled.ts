import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  dot: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  dotHigh: {
    borderRadius: 90,
    height: 8,
    width: 8,
    backgroundColor: '#ED4C5C',
  },
  dotMidHigh: {
    borderRadius: 90,
    height: 8,
    width: 8,
    backgroundColor: '#FFCE31',
  },
  dotNormal: {
    borderRadius: 90,
    height: 8,
    width: 8,
    marginVertical: 190,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#43C4E3',
  },
  dotLow: {
    borderRadius: 90,
    height: 8,
    width: 8,
    alignSelf: 'center',
    backgroundColor: '#00A790',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 22, height: 24},
    shadowOpacity: 12,
    shadowRadius: 3,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    color: '#111111',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 13,
  },
});
