import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function TextComp(props) {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      style={[
        props.style,
        props.title ? styles.title : {},
        props.description ? styles.description : {},
        props.center ? styles.center : {},
      ]}>
      {props.children}
    </Text>
  );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    width: '95%',
    textAlign: 'left',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'justify',
    width: '95%',
    marginBottom: 10,
  },
  center: {
    textAlign: 'center',
  },
});
