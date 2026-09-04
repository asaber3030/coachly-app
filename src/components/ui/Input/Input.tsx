import { TextInput, type TextInputProps } from 'react-native';

import { styles } from './Input.styles';

export function Input(props: TextInputProps) {
  return <TextInput {...props} style={[styles.input, props.style]} />;
}