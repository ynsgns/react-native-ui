import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Text from '../Text';
import {wp, hp} from '../Screen';

export default function App(props) {
  let [tabs, settabs] = useState([]);
  const [selectedValue, setselectedValue] = useState(0);

  useEffect(() => {
    settabs((tabs = []));
    if (props.selectTab) {
      props.tabs.forEach((element, index) => {
        if (element == props.selectTab) {
          setselectedValue(index);
        }
      });
    }
    settabs(props.tabs);
    return () => {};
  }, []);
  function changeTab(item, index) {
    setselectedValue(index);

    return props.changeTabs(index, item);
  }
  return (
    <View style={styles.card}>
      {tabs.map((item, index) => {
        return (
          <View
            key={index}
            style={selectedValue == index ? styles.activeTab : styles.tab}>
            <TouchableOpacity
              style={{alignItems: 'center', flex: 1,justifyContent:'center'}}
              onPress={() => changeTab(item, index)}>
              <Text
                style={
                  selectedValue == index ? styles.activeTitle : styles.title
                }>
                {item}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  activeTab: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(128,0,0,1)',
  },
  title: {
    color: 'rgba(128,0,0,1)',
    fontSize: 18,
    textAlign: 'center',
  },
  activeTitle: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  card: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginBottom: 5,
    overflow: 'hidden',
    width: wp('97'),
    height: hp('5'),
  },
  intup: {
    width: '100%',
    color: '#C22049',
    fontSize: 20,
    marginTop: 10,
    padding: 0,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(128,0,0,1)',
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
