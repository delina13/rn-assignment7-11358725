import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { CartContext } from '../CartContext';
import Header from '../Components/Header';

const ProductDisplay = ({ route }) => {

  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Header />
      <Image source={{uri: product.image}} style={styles.productImage}/>
      <View>
        <Text></Text>
        <Image />
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View>
          <View>
            <Image />
            <Text></Text>
          </View>
          <View>
            <Image />
            <Text></Text>
          </View>
          <View>
            <Image />
            <Text></Text>
          </View>
          <View>
            <Image />
            <Text></Text>
          </View>
        </View>
        <View></View>
        <View>
          <Image />
          <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
          <Image />
        </View>
        <Pressable>
          <View>
            <View>
              <Image />
              <Text>ADD TO BASKET</Text>
            </View>
            <Pressable>
              <Image />
            </Pressable>
          </View>
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  productImage: {
    width: '100%',
    height: 300,
    marginTop: 20
  }
})

export default ProductDisplay
