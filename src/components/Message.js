import { Text, View, StyleSheet,ScrollView } from 'react-native';
import { COLORS } from '../constants/color';

export const Message = ({ text }) => {
  return (
    <ScrollView style={styles.contentBox} showsVerticalScrollIndicator={false}>
      <Text style={styles.text}>{text}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    maxHeight: 500, // Set a maximum height for scrolling
    width: 300,
    backgroundColor: COLORS.LBLUE,
    borderColor: COLORS.DARK, 
    borderWidth: 3, 
    padding: 12,
    margin: 15,
  },
  text: {
    fontSize: 16,
  },
});

