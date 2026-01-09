import { Redirect, Slot } from 'expo-router'
import { View, Text } from 'react-native'

const _Layout = () => {
    const isAuthenticated=false
    if (!isAuthenticated) return <Redirect href={"/sign-in"}/>
  return (
    <Slot/>
  )
}

export default _Layout