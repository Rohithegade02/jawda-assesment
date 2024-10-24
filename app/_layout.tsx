import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
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
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
