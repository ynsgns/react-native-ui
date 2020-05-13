import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Modal} from 'react-native';
import {wp, hp} from '../Screen';
import Text from '../Text';
import Icon from '../Icon';

export default function App(props) {
  const [visible, setvisible] = useState(props.visible);
  useEffect(() => {
    setvisible(props.visible==true?true:false);
  });
  function okFonk() {
    setvisible(true);
    props.okFunction();
  }

  return (
    <View>
      <Modal transparent visible={visible}>
        <View style={[styles.container, props.style]}>
          <View style={[styles.main, styles.shadow1]}>
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <Icon name="warn" size={35} color="gray" />
              </View>
              <View style={styles.headerRight}>
                <Text bold style={styles.title}>
                  {props.title}
                </Text>
              </View>
              <View style={styles.headerLeft} />
            </View>
            <View style={styles.body}>
              <Text style={styles.description}>{props.description}</Text>
            </View>
            <View style={styles.footer}>
              {props.cancel ? (
                <TouchableOpacity>
                  <Text bold style={styles.btnText}>
                    Vazgeç
                  </Text>
                </TouchableOpacity>
              ) : (
                <></>
              )}
              <TouchableOpacity style={styles.btn} onPress={() => okFonk()}>
                <Text bold style={styles.btnText}>
                  Tamam
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('100'),
    height: hp('110'),
    zIndex: 999,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
  },
  headerLeft: {flex: 1, alignItems: 'center'},
  headerRight: {flex: 9},
  main: {
    width: '85%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    padding: 10,
  },
  title: {
    fontSize: 23,
    textAlign: 'center',
  },
  body: {
    marginTop: 15,
    width: '85%',
  },
  description: {
    textAlign: 'justify',
    fontSize: 15,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnText: {
    color: '#0E1277',
  },
  btn: {
    marginLeft: 15,
  },
  shadow1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
