import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Text from '../Text';

export default function App(props) {
  return (
    <View
      style={[
        styles.contanier,
        props.width
          ? {width: isNaN(props.width) ? props.width : props.width + '%'}
          : {width: '100%'},
        {borderRadius: props.isCircular ? 100 : 5},
        {
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : '#0E1277',
        },
      ]}>
      <TouchableOpacity
        disabled={props.disable}
        onPress={() => {
          props.onPress ? props.onPress() : null;
        }}
        style={[
          styles.button,
          props.disable == true ? {backgroundColor: 'gray'} : {},
        ]}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={props.loading == true || props.icon ? {flex: 2} : {flex: 0}}>
            {props.icon ? (
              <View style={{marginRight: 5}}>{props.icon}</View>
            ) : (
              <></>
            )}
            {props.loading == true ? (
              <View style={{marginRight: 5, justifyContent: 'center'}}>
                <ActivityIndicator color="rgba(255,255,255,0.6)" size={25} />
              </View>
            ) : (
              <></>
            )}
          </View>
          <View style={{flex: 8, alignItems: 'center'}}>
            <Text
              des
              style={[
                styles.title,
                {fontSize: props.fontSize ? props.fontSize : 16},
                {
                  color: props.textColor
                    ? props.textColor
                    : 'rgba(255,255,255,0.7)',
                },
              ]}>
              {props.title}
            </Text>
          </View>
          <View
            style={
              props.loading == true || props.icon ? {flex: 2} : {flex: 0}
            }></View>
        </View>
      </TouchableOpacity>
    </View>
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
    textShadowColor: 'rgba(14,18,119, 0.2)',
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
