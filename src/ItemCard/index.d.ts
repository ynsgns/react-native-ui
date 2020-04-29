import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface IconsProps {
  styleContainer?:ViewStyle,
  image?:ImageSourcePropType,
  title?:string,
  description?:string,
  time?:string,
}

declare const index: React.SFC<IconsProps>

export default index