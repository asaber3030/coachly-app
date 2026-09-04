import { Text, View } from 'react-native';

export function Header({ title }: { title: string }) {
  return <View><Text>{title}</Text></View>;
}