import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import ReactNativeModal from 'react-native-modal'

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [verification, setVerification] = useState({
    state: 'default',
    error: '',
    code: '',
  })
  const onSignUpPress = () => {}
  const onPressVerify = () => {}
  return (
    <ScrollView className='flex-1 bg-white'>
      <Image
        source={images.signIn}
        className='z-0 w-full h-[250px] bg-purple'
      />
      <View className=' absolute top-64  rounded-t-[30px] w-full bg-white p-5 '>
        <Text className='text-2xl text-black font-InterSemiBold  '>
          Create Your Account
        </Text>
      </View>
      <View className='p-5'>
        <InputField
          label={'Name'}
          placeholder='Enter your Name'
          icon={icons.person}
          value={form.name}
          onChangeText={(value: string) => setForm({ ...form, name: value })}
        />
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
          title='Sign Up'
          className='mt-6'
          onPress={onSignUpPress}
        />
        <Link
          href='/sign-in'
          className='text-lg text-center text-general-200 mt-2'
        >
          <Text className='font-InterMedium text-base'>
            {' '}
            Already have an account?{' '}
          </Text>
          <Text className='font-InterSemiBold text-base text-primary-500'>
            Log In
          </Text>
        </Link>
      </View>
      {/* Verification*/}
      {/* <ReactNativeModal
          onModalHide={() =>
            setVerification({ ...verification, state: 'success' })
          }
          isVisible={verification.state === 'pending'}
        >
          <View className='bg-white px-7 py-9 rounded-2xl min-h-[300px]'>
            <Text className='text-2xl font-InterExtraBold mb-2'>
              Verification
            </Text>
            <Text className='font-InterMedium mb-5'>
              We've sent a verification code to{' '}
              <Text className='font-InterBold'>{form.email}</Text>
            </Text>
            <InputField
              label='Code'
              icon={icons.lock}
              placeholder='12345'
              value={verification.code}
              keyboardType='numeric'
              onChangeText={code => setVerification({ ...verification, code })}
            />
            {verification.error && (
              <Text className='text-red-500 text-sm mt-1'>
                {verification.error}
              </Text>
            )}
            <CustomButton
              title='Verify Email'
              className='mt-5 bg-success-500'
              onPress={onPressVerify}
            />
          </View>
        </ReactNativeModal> */}
      <ReactNativeModal isVisible={verification.state === 'success'}>
        <View className='bg-white px-3 py-9 rounded-2xl min-h-[300px]'>
          <Image
            source={icons.check}
            className='w-[110px] h-[110px] mx-auto my-5'
          />
          <Text className='text-3xl font-InterBold text-center'>Verified</Text>
          <Text className='text-[14px] text-gray-400 font-InterMedium text-center mt-2'>
            You have successfully verified your account.
          </Text>
          <CustomButton
            title='Browse Home'
            onPress={() => router.replace('/(tabs)/')}
            className='mt-5 '
          />
        </View>
      </ReactNativeModal>
    </ScrollView>
  )
}

export default SignUp
