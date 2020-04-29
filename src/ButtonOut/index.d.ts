import React from 'react';
import { StyleProp, ViewStyle, ColorSchemeName } from 'react-native';

export interface IconsProps {
   title?:string,
  onPress?:()=>void,
  width?:string|number
}

declare const index: React.SFC<IconsProps>

export default index