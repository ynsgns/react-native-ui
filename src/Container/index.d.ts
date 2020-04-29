import React from 'react';
import { ImageSourcePropType } from 'react-native';

export interface IconsProps {
    modalVisible?:boolean;
    modalTitle?:string;
    modalDescription?:string;
    modalOkFunction?:() => void; 
    goBackFunction?:()=>void;
    ProfileImg?:ImageSourcePropType;
    logOutFunction?:()=>void;
    title?:string; 


    style?: StyleProp<ViewStyle>;
}

declare const Icons: React.SFC<IconsProps>

export default Icons