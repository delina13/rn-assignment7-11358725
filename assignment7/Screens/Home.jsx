import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import Product from '../Components/Product'
import Header from '../Components/Header'
import axios from 'axios'


const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data)
            } catch (error) {
                console.error('Unable to get products', error);
            }
        };
    
        getProducts();
    }, [])

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.subHeader}>
                <Text style={styles.subHeaderText}>OUR STORY</Text>
                <View style={styles.subHeaderRight}>
                    <View style={styles.subHeaderRightContainer}>
                        <Image source={require('../assets/Listview.png')} />
                    </View>
                    <View style={styles.subHeaderRightContainer}>
                        <Image source={require('../assets/Filter.png')} />
                    </View>
                </View>
            </View>
            <FlatList
                data={products}
                renderItem={({ item }) => <Product product={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{ gap: 15 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 25
    },
    subHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    subHeaderText: {
        fontSize: 20,
        fontFamily: 'Times New Roman',
        letterSpacing: 4
    },
    subHeaderRight: {
        flexDirection: 'row',
        gap: 10
    },
    subHeaderRightContainer: {
        width: 30,
        height: 30,
        backgroundColor: '#f3f3f3',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Home
