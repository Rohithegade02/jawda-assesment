import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants'
import InputField from '@/components/InputField'
import { Link } from 'expo-router'
import CustomButton from '@/components/CustomButton'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const onSignInPress = () => {}
  return (
    <View className='flex-1 bg-white'>
      <Image
        source={images.signIn}
        className='z-0 w-full h-[250px] bg-purple '
      />
      <View className='absolute top-64  rounded-t-[30px] w-full bg-white p-5'>
        <Text className='text-2xl  text-black font-InterSemiBold '>
          Welcome 👋
        </Text>
        <View className='mt-10'>
          <InputField
            label={'Email'}
            placeholder='Enter your Email'
            icon={icons.email}
            value={form.email}
            onChangeText={(value: string) => setForm({ ...form, email: value })}
          />
          <InputField
            label={'Password'}
            placeholder='Enter your Password'
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value: string) =>
              setForm({ ...form, password: value })
            }
          />
          <CustomButton
            title='Sign In'
            className='mt-6'
            onPress={onSignInPress}
          />
          <Link
            href='/sign-up'
            className='text-lg text-center text-general-200 mt-2'
          >
            <Text className='font-InterMedium text-base'>
              {' '}
              Don't have an account?{' '}
            </Text>
            <Text className='font-InterSemiBold text-base text-primary-500'>
              Sign Up
            </Text>
          </Link>
        </View>
      </View>
    </View>
  )
}

export default SignIn
