import { View, type ViewProps } from 'react-native';

import { styles } from './Card.styles';

export function Card({ style, ...props }: ViewProps) {
  return <View {...props} style={[styles.card, style]} />;
}