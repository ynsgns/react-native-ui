import React from 'react';
import { ImageSourcePropType } from 'react-native';

export interface IconsProps {
    visible?:boolean; 
    title?:string; 
    description?:string;
    okFunction?:() => void;  
    cancel?:boolean;


    style?: StyleProp<ViewStyle>;
}

declare const Icons: React.SFC<IconsProps>

export default Icons