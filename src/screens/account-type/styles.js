import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'
import L from '../../constants/layout'

export default StyleSheet.create({
  container: {
    flex: 1,
    height: L.window.height,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  selectUserText: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 50,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedText: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  button: {
    marginBottom: 20,
  },
})
