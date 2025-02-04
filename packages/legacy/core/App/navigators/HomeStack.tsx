import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useTranslation } from 'react-i18next'

import ScanButton from '../components/buttons/ScanButton'
import SettingsMenu from '../components/buttons/SettingsMenu'
import { useTheme } from '../contexts/theme'
import Home from '../screens/Home'
import { HomeStackParams, Screens } from '../types/navigators'

import { createDefaultStackOptions } from './defaultStackOptions'

const HomeStack: React.FC = () => {
  const Stack = createStackNavigator<HomeStackParams>()
  const theme = useTheme()
  const { t } = useTranslation()
  const defaultStackOptions = createDefaultStackOptions(theme)

  return (
    <Stack.Navigator screenOptions={{ ...defaultStackOptions }}>
      <Stack.Screen
        name={Screens.Home}
        component={Home}
        options={() => ({
          title: t('Screens.Home'),
          headerRight: () => <ScanButton />,
          headerLeft: () => <SettingsMenu />,
        })}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
