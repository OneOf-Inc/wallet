import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useTranslation } from 'react-i18next'

import ScanButton from '../components/buttons/ScanButton'
import SettingsMenu from '../components/buttons/SettingsMenu'
import { useTheme } from '../contexts/theme'
import Reward from '../screens/Reward'
import { RewardStackParams, Screens } from '../types/navigators'

import { createDefaultStackOptions } from './defaultStackOptions'

//TODO: Modify Pay Stack
const RewardStack: React.FC = () => {
  const Stack = createStackNavigator<RewardStackParams>()
  const theme = useTheme()
  const { t } = useTranslation()
  const defaultStackOptions = createDefaultStackOptions(theme)

  return (
    <Stack.Navigator screenOptions={{ ...defaultStackOptions }}>
      <Stack.Screen
        name={Screens.Reward}
        component={Reward}
        options={() => ({
          title: t('Screens.Reward'),
          headerRight: () => <ScanButton />,
          headerLeft: () => <SettingsMenu />,
        })}
      />
    </Stack.Navigator>
  )
}

export default RewardStack
