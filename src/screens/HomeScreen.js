import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
  ListItem,
  TabBarIOS
} from 'react-native';

import { Fonts, Colors } from '../constants';
import Button from '../components/Button';
import {
  Text,
  Title,
} from '../components/StyledText';
/* import { Dropdown } from '../components'; */
import ToggleSwitch from 'toggle-switch-react-native'
import { CheckBox } from "react-native-elements";


export default function HomeScreen({ isExtended, setIsExtended }) {
  const rnsUrl = 'https://reactnativestarter.com';
  const handleClick = () => {
    Linking.canOpenURL(rnsUrl).then(supported => {
      if (supported) {
        Linking.openURL(rnsUrl);
      } else {
        console.log("Don't know how to open URI: " + rnsUrl);
      }
    });
  };

  return (
    <View style={styles.container}>
    <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8557c6d2fba5366815ca9d77231da407&auto=format&fit=crop&w=1055&q=80' }}
    style={{width: '100%', height: '100%'}}
        resizeMode="cover">
        <View style={styles.section}>
        <Text size={20} white>Home</Text>
      </View>
      <View style={styles.section}>
{/*         <Text color="white" size={15}>The smartest Way to build your mobile app</Text>
 */}        <Text size={50} bold white style={styles.title}>Friend Field</Text>
      </View>
      <View style={[styles.section, styles.sectionLarge]}>
{/*         <Text color="white" hCenter size={15} style={styles.description}>Choose an option below</Text>
 */}        <View style={styles.priceContainer}>
          <TabBarIOS>

            </TabBarIOS>
          {/* <View style={{ flexDirection: 'row' }}>
            <Text white bold size={50} style={styles.price}>{isExtended ? 'Fruits' : 'Vegetables'}</Text>
          </View>
          <TouchableOpacity style={styles.priceLink} onPress={() => isExtended ? setIsExtended(false) : setIsExtended(true)}>
            <Text white size={14}>{isExtended ? 'Other Options' : 'Other Options'}</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      

      {/* <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Select</Text>

        <Dropdown
          style={{ width: 200, alignSelf: 'center' }}
          onSelect={() => {}}
          items={['Fruits', 'Vegetables']}
        />
      </View> */}
       <View style={styles.section}>
        <Button
          style={{ alignSelf: 'stretch' }}
          primary
          rounded
          bgColor="black"
          textColor={Colors.primary}
          caption="Swipe to See what's Available"
          onPress={handleClick}
        />
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  componentsSection: {
    backgroundColor: Colors.white,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  componentSectionHeader: {
    fontFamily: Fonts.primaryRegular,
    color: '#686868',
    fontSize: 20,
    marginBottom: 20,
  }
});
