import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Button from '../Button';
import Text from '../Text';
import Icon from '../Icon';

export default function App(props) {
  return (
    <View style={[styles.card, styles.shadow, props.style]}>
      <View style={styles.header}>
        <View style={{flex: 9}}>
          <Text bold numberOfLines={1} style={styles.title}>
            {props.title}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <ShareButton title={props.title} type="activity" id={props.id} /> */}
        </View>
      </View>

      <View style={styles.main}>
        {props.img ? <Image style={styles.img} source={props.img} /> : <></>}
        <View style={styles.descriptionView}>
          <Text style={[styles.description, props.descriptionStyle]}>
            {props.description}
          </Text>
        </View>
        <View style={{width: '100%'}}>{props.children}</View>
      </View>

      <View style={styles.footer}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            {props.footerLeftComponent}
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            {props.footerCenterComponent}
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            {props.footerRightComponent}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '95%',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 5,
  },
  header: {
    paddingVertical: 13,
    paddingLeft: 10,
    width: '100%',
    flexDirection: 'row',
  },
  title: {
    fontSize: 23,
    fontWeight:'bold'
  },
  main: {
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
  },
  footer: {
    width: '95%',
  },
  descriptionView: {
    marginBottom: 5,
    width: '95%',
  },
  description: {
    textAlign: 'justify',
    fontSize: 15,
    color: 'gray',
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
  img: {
    width: '100%',
    height: 200,
  },
});
