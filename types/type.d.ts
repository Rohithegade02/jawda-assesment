import { TextInputProps, TouchableOpacityProps } from 'react-native'
import { ImageSourcePropType } from 'react-native'

export interface BlogProps {
  id: number
  title: String
  description: String
  date: String
  image: ImageSourcePropType
}

declare interface InputFieldProps extends TextInputProps {
  label: string
  icon?: any
  secureTextEntry?: boolean
  labelStyle?: string
  containerStyle?: string
  inputStyle?: string
  iconStyle?: string
  className?: string
  isEditIcon?: boolean
  showIsVerifiedStatus?: boolean
  statusValue?: VerificationStatus | null | undefined
}
declare interface ButtonProps extends TouchableOpacityProps {
  title: string
  bgVariant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'success'
  textVariant?: 'primary' | 'default' | 'secondary' | 'danger' | 'success'
  IconLeft?: React.ComponentType<any>
  IconRight?: React.ComponentType<any>
  className?: string
}
