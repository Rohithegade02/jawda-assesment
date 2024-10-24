import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  Image,
  TextInput,
  Platform,
  Keyboard,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { InputFieldProps } from '@/types/type'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

const InputField = ({
  label,
  labelStyle,
  icon,
  placeholder,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  isEditIcon,
  showIsVerifiedStatus,
  statusValue,

  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            {showIsVerifiedStatus ? (
              <IsVerified status={statusValue} />
            ) : (
              <TextInput
                className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                {...props}
              />
            )}
            {isEditIcon && (
              <TouchableOpacity>
                <AntDesign name='edit' size={20} style={{ marginRight: 20 }} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableNativeFeedback>
    </KeyboardAvoidingView>
  )
}
const IsVerified = (status: { status: string | null | undefined }) => {
  return (
    <View
      className={`w-32 h-8 flex-row my-3 mx-3  px-5 items-center rounded-2xl ${
        status?.status === 'verified'
          ? 'bg-green-100 border border-green-400'
          : 'bg-red-100 border border-red-400'
      }  `}
    >
      <MaterialIcons name='check' size={16} />
      <View className='w-2' />
      <Text className='font-JakartaMedium text-base -mt-1 text-[#333}'>
        {status?.status === 'verified' ? 'Verified' : 'UnVerified'}
      </Text>
    </View>
  )
}
export default InputField
