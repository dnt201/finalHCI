import { Image, StyleSheet } from 'react-native'
import React from 'react'
import { HStack, Text } from 'native-base'
import Oops from '@assets/images/oops.png';

const HaveNoItem = () => {
    return (
        <HStack justifyContent="center" alignItems="center">
            <Image style={styles.imgOops} source={Oops} />
            <Text
                w={220}
                textAlign="center"
                fontSize={16}
                fontWeight={'600'}
                numberOfLines={2}>
                We have no item!{':(('}
            </Text>
        </HStack>
    )
}

export default HaveNoItem

const styles = StyleSheet.create({
    imgOops: {
        width: 120,
        height: 120,
    },
})