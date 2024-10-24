import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Blog = () => {
  return (
    <View className='flex-row justify-between items-center'>
      <Text className='text-base font-InterMedium text-black'>Blog</Text>
      <View className='flex-row items-center gap-x-4'>
        <Text className='text-sm text-purple font-InterMedium'>Add new</Text>
        <Pressable className='bg-purple w-[74px] h-[30px] flex justify-center items-center rounded-2xl'>
          <Text className='text-white font-InterMedium text-center text-sm'>
            Preview
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Blog
