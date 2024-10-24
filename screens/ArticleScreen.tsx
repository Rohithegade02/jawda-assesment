import { ScrollView, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import SearchBarWithDropdown from '@/components/SearchBar'
import Blog from '@/components/Blog'
import BlogCard from '@/components/BlogCard'
import { FlashList } from '@shopify/flash-list'
import { blogData } from '@/constants'

const ArticleScreen = () => {
  return (
    <View className='py-2 gap-y-6 px-[18px] bg-white flex-1'>
      <Header />
      <SearchBarWithDropdown className='-mt-2.5' />
      <Blog />
      <ScrollView showsVerticalScrollIndicator={false} className='flex-1'>
        <FlashList
          data={blogData}
          renderItem={({ item }) => <BlogCard {...item} />}
          keyExtractor={item => item.id.toString()}
          estimatedItemSize={200}
          numColumns={2}
        />
      </ScrollView>
    </View>
  )
}

export default ArticleScreen
