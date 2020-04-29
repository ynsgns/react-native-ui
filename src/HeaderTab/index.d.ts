import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface IconsProps {
  changeTabs?:(index:number, value:string)=>void,
  selectTab?:string,
  tabs?:Array<title>,
}

declare const index: React.SFC<IconsProps>

export default index