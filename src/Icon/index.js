import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';

export default class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: {
        arrow_b: require('./icons/arrow_b.png'),
        back_gray: require('./icons/back_gray.png'),
        back_w: require('./icons/back_w.png'),
        basket_gray: require('./icons/basket_gray.png'),
        calender_b: require('./icons/calender_b.png'),
        camere_w: require('./icons/camere_w.png'),
        checked: require('./icons/checked.png'),
        close_r: require('./icons/close_r.png'),
        documents: require('./icons/documents.png'),
        down_b: require('./icons/down_b.png'),
        exit: require('./icons/exit.png'),
        file_g: require('./icons/file_g.png'),
        galery_w: require('./icons/galery_w.png'),
        help_g: require('./icons/help_g.png'),
        hidePass: require('./icons/hidePass.png'),
        home_g: require('./icons/home_g.png'),
        negative_b: require('./icons/negative_b.png'),
        play_w: require('./icons/play_w.png'),
        plus_b: require('./icons/plus_b.png'),
        'power-off': require('./icons/power-off.png'),
        right: require('./icons/right.png'),
        search: require('./icons/search.png'),
        search_gray: require('./icons/search_gray.png'),
        send: require('./icons/send.png'),
        setting_gray: require('./icons/setting_gray.png'),
        showPass: require('./icons/showPass.png'),
        test: require('./icons/test.png'),
        time: require('./icons/time.png'),
        users: require('./icons/users.png'),
        'user-secret': require('./icons/user-secret.png'),
        warn: require('./icons/warn.png'),
      },
    };
  }

  render() {
    return (
      <Image
        source={
          this.props.uri
            ? {uri: this.props.uri}
            : this.state.icon[this.props.name]
        }
        style={[
          {
            width: this.props.size ? this.props.size : 25,
            height: this.props.size ? this.props.size : 25,
          },
          this.props.style,
        ]}
        resizeMode="center"
      />
    );
  }
}
