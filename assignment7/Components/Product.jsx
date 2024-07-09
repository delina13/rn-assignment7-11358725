import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { CartContext } from '../CartContext';
import { useNavigation } from '@react-navigation/native';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('ProductDisplay', { product })}>
      <View>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Pressable 
          style={styles.plusContainer}
          onPress={() => addToCart(product)}
        >
          <Image source={require('../assets/add_circle.png')} />
        </Pressable>
      </View>
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
  },
  plusContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    fontFamily: 'Times New Roman',
  },
  category: {
    fontSize: 14,
    marginTop: 3,
    fontFamily: 'Times New Roman',
  },
  price: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
    fontFamily: 'Times New Roman',
  },
});

export default Product;
