import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface IconsProps {
  numberOfLines?:number,
  title?:boolean,
  description?:boolean,
  center?:boolean,
  style?:TextStyle, 
}

declare const index: React.SFC<IconsProps>

export default index