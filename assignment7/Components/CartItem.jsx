import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { CartContext } from '../CartContext';

const CartItem = ({ product }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const decreaseQuantity = () => {
    if (product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    }
  };

  const increaseQuantity = () => {
    updateQuantity(product.id, product.quantity + 1);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.description}>{product.category}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <View style={styles.quantityContainer}>
          {product.quantity > 1 && (
            <Pressable onPress={decreaseQuantity}>
              <Text style={styles.quantityButton}>-</Text>
            </Pressable>
          )}
          <Text style={styles.quantityText}>{product.quantity}</Text>
          <Pressable onPress={increaseQuantity}>
            <Text style={styles.quantityButton}>+</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => removeFromCart(product.id)} style={styles.removeButton}>
          <Image source={require('../assets/remove.png')} style={styles.removeIcon} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 90,
    height: 120,
  },
  details: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },
  description: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'Times New Roman',
  },
  price: {
    fontSize: 16,
    color: 'red',
    fontFamily: 'Times New Roman',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityButton: {
    fontSize: 20,
    width: 30,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  removeButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  removeIcon: {
    width: 20,
    height: 20,
  },
});

export default CartItem;
