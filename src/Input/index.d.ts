import React from 'react';
import { StyleProp, ViewStyle, TextStyle, TextInputProps, NativeSyntheticEvent, TextInputFocusEventData, TextInputEndEditingEventData, ReturnKeyTypeOptions, KeyboardTypeOptions } from 'react-native';

export interface IconsProps {
  containerStyle?:ViewStyle,
  InputStyle?:ViewStyle,
  value?:string, 
  placeholder?:string,  
  placeholderTextColor?:string,  
  secureTextEntry?:boolean,
  onBlur?:(v:NativeSyntheticEvent<TextInputFocusEventData>)=>void,
  onFocus?:(v:NativeSyntheticEvent<TextInputFocusEventData>)=>void,
  onEndEditing?:(v:NativeSyntheticEvent<TextInputEndEditingEventData>)=>void,
  returnKeyType?:ReturnKeyTypeOptions,
  keyboardType?:KeyboardTypeOptions,
  onChangeText?:(text:string)=>void,
}

declare const index: React.SFC<IconsProps>

export default index