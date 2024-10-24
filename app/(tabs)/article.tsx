import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import SearchBarWithDropdown from '@/components/SearchBar'

const Article = () => {
  return (
    <View className='py-2 gap-y-6 px-[18px] bg-white flex-1'>
      <Header />
      <SearchBarWithDropdown className='-mt-2.5' />
    </View>
  )
}

export default Article
