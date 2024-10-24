import { icons } from '@/constants'
import { Tabs } from 'expo-router'
import { Image, View } from 'react-native'
import React from 'react'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'grayLight',
        tabBarStyle: {
          height: 60, // Adjust the height to match the pixel-perfect design
          paddingBottom: 10, // Add some padding for a clean bottom spacing
          paddingTop: 10,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View className='items-center'>
              <Image
                source={icons.home}
                className={`w-16 h-[52px] ${
                  focused ? 'tint-purple-500' : 'tint-gray-400'
                }`}
                tintColor={focused ? 'purple' : 'grayLight'}
              />
              {focused && (
                <View className='w-[52px] h-1 bg-purple  rounded-full' />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='article'
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View className='items-center'>
              <Image
                source={icons.article}
                className={`w-16 h-[52px] ${
                  focused ? 'tint-purple-500' : 'tint-gray-400'
                }`}
                tintColor={focused ? 'purple' : 'grayLight'}
              />
              {focused && (
                <View className='w-[52px] h-1 bg-purple rounded-full' />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='graph'
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View className='items-center'>
              <Image
                source={icons.graph}
                className={`w-16 h-[52px] ${
                  focused ? 'tint-purple-500' : 'tint-gray-400'
                }`}
                tintColor={focused ? 'purple' : 'grayLight'}
              />
              {focused && (
                <View className='w-[52px] h-1 bg-purple  rounded-full' />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='chart'
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View className='items-center'>
              <Image
                source={icons.chart}
                className={`w-16 h-[52px] ${
                  focused ? 'tint-purple-500' : 'tint-gray-400'
                }`}
                tintColor={focused ? 'purple' : 'grayLight'}
              />
              {focused && (
                <View className='w-[52px] h-1 bg-purple  rounded-full' />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  )
}
