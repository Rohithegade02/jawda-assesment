import { View, TextInput, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { icons } from '@/constants'

const SearchBarWithDropdown = ({ className }: { className: string }) => {
  return (
    <View
      className={` flex-row items-center gap-x-8  justify-between   ${className}`}
    >
      {/* Left Input Field */}
      <View className='flex-1 h-9 rounded-2xl bg-grayInput border border-grayBorder px-2 justify-between text-gray-600 flex-row items-center space-x-2'>
        <TextInput
          placeholder='Afterglow'
          placeholderTextColor='grayText'
          className='font-InterMedium'
        />
        <Pressable className='flex-row items-center'>
          <Image
            source={icons.dropdown}
            className='w-5 h-5'
            tintColor='grayText'
          />
        </Pressable>
      </View>

      {/* Right Text and Dropdown */}
      <View className='flex-row items-center space-x-2'>
        <Text className='text-grayText font-InterMedium'>Scenario</Text>
        <Pressable className='flex-row items-center border border-[#fff] pl-2 py-1 rounded-xl'>
          <Text className='text-grayDark font-InterMedium'>Default</Text>
          <Image
            source={icons.dropdown}
            className='w-5 h-5'
            tintColor='grayText'
          />
        </Pressable>
      </View>
    </View>
  )
}

export default SearchBarWithDropdown
