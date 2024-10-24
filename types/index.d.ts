import { ImageSourcePropType } from 'react-native'

export interface BlogProps {
  id: number
  title: String
  description: String
  date: String
  image: ImageSourcePropType
}
