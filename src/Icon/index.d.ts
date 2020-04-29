import React from 'react';

export interface IconsProps {
    name?: "arrow_b"|
    "back_gray"|
    "back_w"|
    "basket_gray"|
    "calender_b"|
    "camere_w"|
    "checked"|
    "close_r"|
    "documents"|
    "down_b"|
    "exit"|
    "file_g"|
    "galery_w"|
    "help_g"|
    "hidePass"|
    "home_g"|
    "negative_b"|
    "play_w"|
    "plus_b"|
    "power-off"|
    "right"|
    "search"|
    "search_gray"|
    "send"|
    "setting_gray"|
    "showPass"|
    "test"|
    "time"|
    "users"|
    "user-secret"|
    "warn";
    size?: number;
    style?: StyleProp<ViewStyle>;
}

declare const Icons: React.SFC<IconsProps>

export default Icons