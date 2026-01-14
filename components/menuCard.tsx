import { appwriteConfig } from '@/lib/appwrite'
import { globalStyles, theme } from '@/styles/theme'
import { MenuItem } from '@/type'
import { View, Text, TouchableOpacity, Image } from 'react-native'
export default function MenuCard({ item: { $id, image_url, name, price }}: { item: MenuItem}) {
    const imageUrl=`${image_url}?project=${appwriteConfig.projectId}`
    return (
        <TouchableOpacity style={[globalStyles.menuCard]}>
            <Image
                source={{uri:imageUrl}}
                style={{
                    width:128,
                    height:128,
                    position:"absolute",
                    top:-40
                }}
                resizeMode='contain'
            />
            <Text style={[globalStyles.paragraphBold, {textAlign:"center",marginBottom:8}]} numberOfLines={1}>{name}</Text>
            <Text style={[globalStyles.paragraphMedium, {textAlign:"center",marginBottom:8}]} numberOfLines={1}>From ${price}</Text>
            <TouchableOpacity>
                <Text style={[globalStyles.paragraphBold,{color:theme.colors.primary}]}>Add to Cart</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
