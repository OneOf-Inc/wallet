import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useTranslation } from 'react-i18next'

import ScanButton from '../components/buttons/ScanButton'
import SettingsMenu from '../components/buttons/SettingsMenu'
import { useTheme } from '../contexts/theme'
import Pay from '../screens/Pay'
import { PayStackParams, Screens } from '../types/navigators'

import { createDefaultStackOptions } from './defaultStackOptions'

//TODO: Modify Pay Stack
const PayStack: React.FC = () => {
  const Stack = createStackNavigator<PayStackParams>()
  const theme = useTheme()
  const { t } = useTranslation()
  const defaultStackOptions = createDefaultStackOptions(theme)

  return (
    <Stack.Navigator screenOptions={{ ...defaultStackOptions }}>
      <Stack.Screen
        name={Screens.Pay}
        component={Pay}
        options={() => ({
          title: t('Screens.Pay'),
          headerRight: () => <ScanButton />,
          headerLeft: () => <SettingsMenu />,
        })}
      />
    </Stack.Navigator>
  )
}

export default PayStack
