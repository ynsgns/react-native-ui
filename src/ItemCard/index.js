import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Text from '../Text';
export default function App(props) {
  return (
    <View style={[styles.card, styles.shadow, props.styleContainer]}>
      <View style={styles.header}>
        <Image source={props.image} style={styles.img} />
      </View>
      <View style={styles.main}>
        <Text numberOfLines={1} style={styles.title}>
          {props.title}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {props.description}
        </Text>
        <Text style={styles.time}>{props.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '95%',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 5,
    flexDirection: 'row',
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    marginTop: 5,
    fontSize: 11,
  },
  main: {
    flex: 8,
    paddingLeft: 10,
    width: '100%',
    justifyContent: 'center',
  },

  description: {
    textAlign: 'justify',
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
    height: 60,
    resizeMode: 'contain',
  },
});
