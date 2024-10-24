import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants'
import { BlogProps } from '@/types'

const BlogCard = ({ id, title, description, date, image }: BlogProps) => {
  return (
    <View
      key={id}
      className='rounded-[10px] mb-2 w-[165px]  py-4 px-2.5 flex gap-y-2.5 bg-white shadow'
    >
      <Image
        source={image}
        className='w-44 h-[70px] mx-auto'
        resizeMode='contain'
      />

      <Text className='text-black text-sm font-InterMedium'>{title}</Text>
      <Text className='text-[#9D9DAA] text-xs font-Inter'>{description}</Text>
      <View className='flex-row items-center gap-x-1.5'>
        <Image
          source={icons.calendar}
          className='w-4 h-4'
          resizeMode='contain'
          tintColor={'#9D9DAA'}
        />
        <Text className='text-[#9d9daa] text-[10px] font-InterSemiBold'>
          {date}
        </Text>
      </View>
    </View>
  )
}

export default React.memo(BlogCard)
