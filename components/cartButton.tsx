import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/theme'
import { images } from '@/constants'

const CartButton = () => {
    const totalItems=10
    return (
        <TouchableOpacity style={globalStyles.cartBtn}>
            <Image
                source={images.bag}
                style={{width:20,height:20}}
                resizeMode='contain'
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