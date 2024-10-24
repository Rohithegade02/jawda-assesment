import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "InterThin": require('../assets/fonts/Inter-Thin.ttf'),          
    "InterExtraLight": require('../assets/fonts/Inter-ExtraLight.ttf'), 
    "InterLight": require('../assets/fonts/Inter-Light.ttf'),         
    "InterRegular": require('../assets/fonts/Inter-Regular.ttf'),    
    "InterMedium": require('../assets/fonts/Inter-Medium.ttf'),       
    "InterSemiBold": require('../assets/fonts/Inter-SemiBold.ttf'),   
    "InterBold": require('../assets/fonts/Inter-Bold.ttf'),           
    "InterExtraBold": require('../assets/fonts/Inter-ExtraBold.ttf'), 
    "InterBlack": require('../assets/fonts/Inter-Black.ttf'),        
  });
  

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
}
