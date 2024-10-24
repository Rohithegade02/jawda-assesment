import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons, images } from '@/constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = () => {
  return (
    <SafeAreaView className='flex-row items-center justify-between'>
      <Image
        source={icons.dropdown}
        tintColor={'#6C5DD3'}
        className='w-8 h-8 rotate-90'
      />
      <Image source={images.logo} className='w-[75px] h-5' />
      <View className='flex-row items-center gap-x-4'>
        <Image source={icons.search} className='w-5 h-5' />
        <Image source={images.man} className='w-[42px] h-[42px]' />
      </View>
    </SafeAreaView>
  )
}

export default Header
