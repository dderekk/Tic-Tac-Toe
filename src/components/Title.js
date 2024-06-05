import { Text, View, StyleSheet, Platform } from 'react-native';
import { COLORS } from '../constants/color'

export const Title = ({ text, backgroundColor=COLORS.Title_xLBlue,height=60,width=300, fontSize=30}) => {
  const titleContainer = { ...styles.container,backgroundColor,height,width}
  const textSize = {...styles.text,fontSize}
  return (
    <View style={titleContainer}>
      <Text style={textSize}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin:10,
    height: 60, 
    width: 300, 
    backgroundColor: COLORS.Title_xLBlue,
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 10,
    borderRadius: 10, 
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
      },
    }),
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

