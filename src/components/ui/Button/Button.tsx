import { Pressable, Text, type PressableProps } from 'react-native';

import { styles } from './Button.styles';

type ButtonProps = PressableProps & { title: string };

export function Button({ title, disabled, ...props }: ButtonProps) {
  return <Pressable {...props} disabled={disabled} style={[styles.button, disabled && styles.disabled]}><Text style={styles.label}>{title}</Text></Pressable>;
}