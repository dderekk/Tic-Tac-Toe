import { Text, Pressable, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/color';

export const ButtonPrototype = ({ label, icon, Bsize = 25, fn, style, disabled }) => {
  const buttonStyle = [styles.buttonBox, style]; // Combine the base style with any additional style
  return (
    <Pressable
      style={({ pressed }) => [
        buttonStyle,
        pressed ? styles.pressed : null, // Apply a different style when the button is pressed
        disabled ? styles.disabled : null, // Apply a different style when the button is disabled
      ]}
      onPress={fn}
      disabled={disabled}
    >
      {icon && <Ionicons name={icon} size={Bsize} color={COLORS.ButtonText} />}
      {label && <Text style={styles.text}>{label}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    flexDirection: 'row', // Align icon and text in a row
    padding: 15,
    backgroundColor: COLORS.LBLUE,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6, // for Android
    // boxShadow for web is set in the Platform.select below
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.ButtonText,
    marginLeft: 8, // Add space between the icon and the text
  },
  pressed: {
    opacity: 0.5,
  },
  disabled: {
    opacity: 0.3,
  },
});

// Platform-specific styles
Platform.select({
  web: {
    ...styles.buttonBox,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.6)',
  },
});
