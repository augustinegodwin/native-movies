import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/theme'
import { images } from '@/constants'

const CartButton = () => {
    const totalItems=10
    return (
        <TouchableOpacity style={globalStyles.cartBtn}>
            <Image
                source={images.cart}
                style={{width:24,height:24}}
                resizeMode='contain'
                tintColor={"#000"}
            />
            {
                totalItems >0 && (
                    <View style={globalStyles.cartBadge}>
                        <Text style={[globalStyles.smallBold, {color:"white"}]}>{totalItems}</Text>
                    </View>
                )
            }
        </TouchableOpacity>
    )
}

export default CartButton