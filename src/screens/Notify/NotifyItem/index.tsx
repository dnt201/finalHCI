import { StyleSheet } from 'react-native'
import React from 'react'
import { Box, HStack, Text, View, Square, VStack } from 'native-base'
import { iNotifyItem } from '../type'
import { Circle } from 'react-native-svg'

const NotifyItem: React.FC<iNotifyItem> = (props) => {
    const { title, des, Svg } = props;
    return (
        <HStack px={4} py={4} rounded={12} bgColor={'#fff'} space={'16px'} alignItems={'center'}>
            <View display='flex' alignItems={'center'} justifyContent={'center'} p={'16px'} bgColor={'#2e2e2e'} rounded={10000}><Svg fill={'#fff'} /></View>
            <VStack justifyContent={'space-between'}>
                <Text fontSize={16} fontWeight={'600'}>{title}</Text>
                <Text fontSize={12} fontWeight={'300'}>{des}</Text>
            </VStack>
        </HStack>
    )
}

export default NotifyItem

const styles = StyleSheet.create({})