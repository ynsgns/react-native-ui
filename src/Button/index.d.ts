import React from 'react';
import { StyleProp, ViewStyle, ColorSchemeName } from 'react-native';

export interface IconsProps {
  width?:number,
  fontSize?:number,
  icon?:string,
  title?:string,
  loading?:boolean,
  disable?:boolean,
  isCircular?:boolean,
  textColor?:string
  backgroundColor?:string
  onPress?:()=>void,
}

declare const index: React.SFC<IconsProps>

export default index