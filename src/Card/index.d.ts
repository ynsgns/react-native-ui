import React, { ComponentElement } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface IconsProps {
  style?:ViewStyle,
  title?:string,
  description?:string,
  descriptionStyle?:TextStyle,
  img?:ImageSourcePropType,
  detailFunction?:()=>void,
  buttonTittle?:string,
  buttonFunction?:()=>void,
  buttonDisable?:boolean,
  buttonFontSize?:number,
  buttonWidth?:number, 
  footerLeftComponent?:ComponentElement,
  footerCenterComponent?:ComponentElement,
  footerRightComponent?:ComponentElement,



}

declare const index: React.SFC<IconsProps>

export default index