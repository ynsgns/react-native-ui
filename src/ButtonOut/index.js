import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Text from '../Text';
import Icon from '../Icon';

export default function App(props) {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: props.width
          ? isNaN(props.width)
            ? props.width
            : props.width + '%'
          : '100%',
      }}
      onPress={() => (props.onPress ? props.onPress() : null)}>
      <View style={{marginRight: 5}}>
        <Icon name="help_g" size={18} />
      </View>
      <Text style={{fontSize: 13}}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contanier: {
    overflow: 'hidden',
    alignItems: 'center',
    margin: 1,
  },
  button: {
    paddingVertical: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    // fontStyle: "italic",
    color: 'rgba(255,255,255,0.7)',
    textShadowColor: '#0E1277',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
