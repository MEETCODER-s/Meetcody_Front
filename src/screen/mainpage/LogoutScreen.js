import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Button, View, Text, SafeAreaView, AsyncStorage, } from 'react-native';
import   ActionBar  from 'react-native-action-bar';
import styles from './styles';
import MainActionBar from './MainActionBar';
import DeviceInfo from 'react-native-device-info';


export default function Logout({ navigation }) {
  const myContext = useContext(AppContext);
  const androidBool = Platform.OS === 'android' ? true : false;
  React.useEffect(()=>{
    AsyncStorage.removeItem('name');
    navigation.navigate('GoogleLogin');
  },[]);
  
    return (
      <SafeAreaView style={styles.mainSafeViewArea}>
      {androidBool === true ? (
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      ) : (
        <></>
      )}
      <MainActionBar navigation={navigation} title={'로그아웃'} />
        {/* <Text>로그아웃</Text> */}
        {/* <Button onPress={() => navigation.navigate('Home')} title="Go back home" /> */}
      </SafeAreaView>
    );
  }
  