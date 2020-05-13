import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
} from 'react-native';
import Text from '../Text';
import Icon from '../Icon';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placaText: '',
      showPassword: this.props.secureTextEntry,
    };
  }

  focus() {
    this.textInput.focus();
  }
  render() {
    return (
      <View style={[styles.inputView, this.props.containerStyle]}>
        <View style={{width: '100%'}}>
          {this.props.value == '' ? (
            <View />
          ) : (
            <View style={{position: 'absolute', top: 0}}>
              <Text style={{color: 'gray'}}>{this.props.placeholder}</Text>
            </View>
          )}
          <TextInput
            ref={(input) => (this.textInput = input)}
            placeholderTextColor={
              this.props.placeholderTextColor
                ? this.props.placeholderTextColor
                : 'rgba(123,33,128,0.4)'
            }
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            placeholder={this.props.placeholder}
            style={[this.props.InputStyle, styles.InputStyle]}
            secureTextEntry={this.state.showPassword}
            onBlur={this.props.onBlur}
            onFocus={this.props.onFocus}
            onEndEditing={this.props.onEndEditing}
            returnKeyType={this.props.returnKeyType}
            onSubmitEditing={this.props.onSubmitEditing}
            keyboardType={this.props.keyboardType}
            autoCorrect={false}
          />
        </View>
        <View style={styles.btnForgot}>
          {this.props.secureTextEntry ? (
            <TouchableOpacity
              onPress={() =>
                this.setState({showPassword: !this.state.showPassword})
              }>
              {this.state.showPassword ? (
                <Icon name="hidePass" />
              ) : (
                <Icon name="showPass" />
              )}
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  InputStyle: {
    width: '100%',
    color: '#0E1277',
    fontSize: 20,
    marginTop: 10,
    padding: 0,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(23,33,238,1)',
  },
  imgContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '80%',
  },
  btnForgot: {
    position: 'absolute',
    alignItems: 'flex-end',
    right: 5,
    bottom: 15,
  },
});
