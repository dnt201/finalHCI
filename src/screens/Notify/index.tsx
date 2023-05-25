import { StyleSheet } from 'react-native'
import React from 'react'
import HeaderBackLayout from '@layouts/HeaderBackLayout'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { IRootStackParamList } from '@navigator'
import { Account, Gift, Location, More, Profile, Wallet } from '@icons'
import { Box, ScrollView, Text, VStack } from 'native-base'
import NotifyItem from './NotifyItem'

interface iNotify
    extends NativeStackScreenProps<IRootStackParamList, 'Notify'> { }

const Notify: React.FC<iNotify> = ({ navigation }) => {
    return (
        <HeaderBackLayout title='Notify' goBack={() => navigation.goBack()} leftElement={<Box p={1} borderWidth={1} rounded={1000}><More width={14} height={14} /></Box>}>
            <ScrollView>
                <VStack space={'32px'}>
                    <VStack space={'4px'}>
                        <Text mb={'4px'} fontSize={18} fontWeight={'600'}>Today</Text>
                        <NotifyItem title='30% Special Discount!' des='Special promotion only valid today' Svg={Gift} />
                    </VStack>

                    <VStack space={'8px'}>
                        <Text mb={'4px'} fontSize={18} fontWeight={'600'}>Yesterday</Text>
                        <NotifyItem title='Top up E-Wallet Successful!' des='You have to top up your wallet' Svg={Wallet} />
                        <NotifyItem title='New service Available' des='Now you can track order in realtime' Svg={Location} />
                    </VStack>
                    <VStack space={'8px'}>
                        <Text mb={'4px'} fontSize={18} fontWeight={'600'}>Jan 01, 2001</Text>
                        <NotifyItem title='Credit Card Connected' des='Credit card have been linked!' Svg={Wallet} />
                        <NotifyItem title='Your Account Setup Successful!' des='Your account have been created!' Svg={Profile} />
                    </VStack>
                </VStack>
            </ScrollView>

        </HeaderBackLayout>
    )
}

export default Notify

const styles = StyleSheet.create({})