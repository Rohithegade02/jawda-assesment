import React from 'react'
import { Redirect } from 'expo-router'

const Home = () => {
  //   const { isSignedIn } = useAuth()
  //   console.log("isSignedIn", isSignedIn)
  //   if (isSignedIn) {
  //     return <Redirect href={"/(root)/(tabs)/home"} />
  //   }
  return <Redirect href={'/(auth)/sign-in'} />
}

export default Home