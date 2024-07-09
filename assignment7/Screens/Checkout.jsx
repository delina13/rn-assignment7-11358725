import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Pressable, FlatList } from 'react-native';
import { CartContext } from '../CartContext';
import Header from '../Components/Header';
import CartItem from '../Components/CartItem';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
    console.log('Total amount to be paid is $' + calculateTotal());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Header showMenu={false} />
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>CHECKOUT</Text>
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
          <Image source={require('../assets/diamond.png')} style={styles.diamond} />
        </View>
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>There are no items in the cart.</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={({ item }) => <CartItem product={item} />}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}

      {cartItems.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>EST. TOTAL</Text>
          <Text style={styles.totalAmount}>${calculateTotal()}</Text>
        </View>
      )}

      <Pressable style={styles.checkoutButton} onPress={handleCheckout}>
        <Image source={require('../assets/shoppingBag.png')} style={styles.bagIcon} />
        <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  subHeader: {
    alignItems: 'center',
    marginTop: 20,
  },
  subHeaderText: {
    fontSize: 24,
    fontFamily: 'New Times Roman',
    letterSpacing: 3,
  },
  lineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    backgroundColor: '#c3c3c3',
    height: 1,
    width: 120,
  },
  diamond: {
    width: 24,
    height: 24,
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: 10,
  },
  totalText: {
    fontSize: 18,
    fontFamily: 'New Times Roman',
    letterSpacing: 3
  },
  totalAmount: {
    fontSize: 20,
    color: 'red',
    fontFamily: 'New Times Roman',
    letterSpacing: 3
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 5,
    // marginTop: 20,
    marginBottom: 10,
    marginHorizontal: -30
  },
  bagIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
    marginRight: 10,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'New Times Roman',
    letterSpacing: 5
  },
});

export default Checkout;
