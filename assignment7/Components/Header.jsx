import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ showMenu = true, showShoppingBag = true }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {showMenu ? (
        <Image source={require('../assets/Menu.png')} />
      ) : (
        <View style={styles.placeholder} />
      )}
      <Image source={require('../assets/Logo.png')} style={{marginLeft:30}} />
      <View style={styles.iconContainer}>
        {showShoppingBag && (
          <Pressable onPress={() => navigation.navigate('Checkout')}>
            <Image source={require('../assets/shoppingBag.png')} />
          </Pressable>
        )}
        <Image source={require('../assets/Search.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  placeholder: {
    width: 24,
    height: 24,
    opacity: 0,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
});

export default Header;
