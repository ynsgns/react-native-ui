import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Text from '../Text';
import Icon from '../Icon';
import {wp, hp} from '../Screen';
import AlertModal from '../AlertModal';
export default function App(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <AlertModal
          visible={props.modalVisible}
          title={props.modalTitle}
          description={props.modalDescription}
          okFunction={() =>
            props.modalOkFunction ? props.modalOkFunction() : null
          }
        />
        <View style={styles.header}>
          <ImageBackground
            source={require('../img/header_bg.png')}
            resizeMethod="auto"
            resizeMode="stretch"
            style={styles.img}>
            {props.goBackFunction ? (
              <TouchableOpacity
                style={{position: 'absolute', zIndex: 9999, top: 35, left: 15}}
                onPress={() => props.goBackFunction()}>
                <Icon name="back_w" size={35} />
              </TouchableOpacity>
            ) : (
              <></>
            )}

            <View
              style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
              {props.ProfileImg ? (
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    overflow: 'hidden',
                  }}>
                  <Image
                    source={props.ProfileImg}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                    }}
                  />
                </View>
              ) : (
                <></>
              )}
              {props.logOutFunction ? (
                <View
                  style={{
                    position: 'absolute',
                    top: 40,
                    right: 10,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{alignItems: 'center'}}
                    onPress={() => props.logOutFunction()}>
                    <Icon name="back_w" size={35} />
                    <Text style={{color: 'rgba(255,255,255,0.7)'}}>
                      Çıkış yap
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <></>
              )}
              <Text bold style={styles.title}>
                {props.title}
              </Text>
            </View>
            <View style={{flex: 1}}></View>
          </ImageBackground>
        </View>
        <View style={styles.main}>
          <ScrollView
            style={{flex: 1, width: '100%'}}
            contentContainerStyle={{alignItems: 'center'}}
            showsHorizontalScrollIndicator={false}>
            {props.children}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    flex: 2.5,
    width: '100%',
  },
  img: {
    flex: 1,
  },
  main: {
    flex: 7,
    width: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 35,
    //  fontStyle: "italic",
    color: 'rgba(255,255,255,0.7)',
    textShadowColor: 'rgba(28,33,172, 0.2)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    textAlign: 'center',
    //  fontWeight: "bold",
  },
});
