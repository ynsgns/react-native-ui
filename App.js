import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {
  Container,
  Text,
  Button,
  Card,
  ButtonOut,
  Input,
  HeaderTab,
  ItemCard,
} from './src';
const App = () => {
  const [text, settext] = useState('');
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <Container
      title="Home Screen"
      //   goBackFunction={() => alert('sdf')}
      //  ProfileImg={require('./src/img/profile.webp')}
      modalVisible={modalVisible}
      modalTitle="Alert"
      modalDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      modalOkFunction={() => setmodalVisible(!modalVisible)}>
      <Text title>Header Tabbar</Text>
      <HeaderTab
        selectTab="Setting"
        tabs={['Home', 'Setting', 'Profile']}
        changeTabs={(index, value) => alert(index + ' =>' + value)}
      />
      <Text title>Card</Text>
      <Card
        title="Card Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed tellus quis orci pellentesque vulputate. Vivamus vulputate elit nec vulputate volutpat. Praesent faucibus, tellus vel consequat tristique, tellus odio rhoncus urna, eu venenatis mi dolor id ipsum. Morbi sit amet tortor urna. Maecenas id nibh in sapien venenatis iaculis eu eu mi. Vestibulum orci turpis, accumsan eu convallis ut, auctor a lacus. Vivamus imperdiet mollis urna sed finibus. Nulla facilisi. Curabitur tincidunt eu metus id posuere."
        footerLeftComponent={<ButtonOut title="Help" width="60"  onPress={() => setmodalVisible(!modalVisible)}/>}
        footerRightComponent={<Button title="Detail" width="100" onPress={() => setmodalVisible(!modalVisible)} />}
      />
      <Text title>Item Card</Text>
      <ItemCard
        title="Yunus Güneş"
        image={require('./src/img/profile.webp')}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed tellus quis orci pellentesque vulputate."
      />
      <Text title>Button</Text>
      <View style={styles.row}>
        <Button
          title="Title"
          width="40"
          backgroundColor="gray"
          textColor="white"
          isCircular={false}
          onPress={() => setmodalVisible(!modalVisible)}
        />
        <Button
          isCircular
          title="Title"
          width="40"
          onPress={() => setmodalVisible(!modalVisible)}
        />
      </View>
      <Text title>TextInput</Text>
      <Input
        value={text}
        onChangeText={(t) => settext(t)}
        placeholder="Test Input"
      />
      <Text description center style={{marginVertical: 20}}>
        Design by Yunus Güneş
      </Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
});

export default App;
