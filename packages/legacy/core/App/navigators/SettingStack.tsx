import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DeviceEventEmitter } from 'react-native'

import SearchBar from '../components/inputs/SearchBar'
import { EventTypes } from '../constants'
import { useConfiguration } from '../contexts/configuration'
import { useTheme } from '../contexts/theme'
import DataRetention from '../screens/DataRetention'
import Language from '../screens/Language'
import NameWallet from '../screens/NameWallet'
import Onboarding from '../screens/Onboarding'
import { createCarouselStyle } from '../screens/OnboardingPages'
import PINCreate from '../screens/PINCreate'
import Settings from '../screens/Settings'
import Theme from '../screens/Theme'
import Tours from '../screens/Tours'
import UseBiometry from '../screens/UseBiometry'
import { Screens, SettingStackParams } from '../types/navigators'
import { testIdWithKey } from '../utils/testable'

import { createDefaultStackOptions } from './defaultStackOptions'

const SettingStack: React.FC = () => {
  const Stack = createStackNavigator<SettingStackParams>()
  const theme = useTheme()
  const [biometryUpdatePending, setBiometryUpdatePending] = useState<boolean>(false)
  const { t } = useTranslation()
  const { pages, terms, developer } = useConfiguration()
  const defaultStackOptions = createDefaultStackOptions(theme)
  const OnboardingTheme = theme.OnboardingTheme
  const carousel = createCarouselStyle(OnboardingTheme)
  const [search, setSearch] = useState('')

  const updateSearch = (search) => {
    setSearch(search)
  }

  useEffect(() => {
    const handleBiometry = DeviceEventEmitter.addListener(EventTypes.BIOMETRY_UPDATE, (value: boolean) => {
      setBiometryUpdatePending(value)
    })

    return () => {
      handleBiometry.remove()
    }
  }, [])

  return (
    <Stack.Navigator screenOptions={{ ...defaultStackOptions }}>
      <Stack.Screen
        name={Screens.Settings}
        component={Settings}
        options={{
          title: t('Screens.Settings'),
          headerBackTestID: testIdWithKey('Back'),
          headerTitle: () => (
            <SearchBar
              clicked={false}
              setSearchPhrase={function (arg0: string): void {
                throw new Error(`Function not implemented. ${arg0}`)
              }}
              setClicked={function (arg0: boolean): void {
                throw new Error(`Function not implemented. ${arg0}`)
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name={Screens.NameWallet}
        component={NameWallet}
        options={{ title: t('Screens.NameWallet'), headerBackTestID: testIdWithKey('Back') }}
      />
      <Stack.Screen
        name={Screens.Theme}
        component={Theme}
        options={{ title: t('Screens.Theme'), headerBackTestID: testIdWithKey('Back') }}
      />
      <Stack.Screen
        name={Screens.Language}
        component={Language}
        options={{ title: t('Screens.Language'), headerBackTestID: testIdWithKey('Back') }}
      />
      <Stack.Screen
        name={Screens.DataRetention}
        component={DataRetention}
        options={{ title: t('Screens.DataRetention'), headerBackTestID: testIdWithKey('Back') }}
      />
      <Stack.Screen
        name={Screens.Tours}
        component={Tours}
        options={{ title: t('Screens.Tours'), headerBackTestID: testIdWithKey('Back') }}
      />
      <Stack.Screen
        name={Screens.UseBiometry}
        component={UseBiometry}
        options={{
          title: t('Screens.Biometry'),
          headerLeft: biometryUpdatePending ? () => null : undefined,
          headerBackTestID: testIdWithKey('Back'),
        }}
      />
      <Stack.Screen
        name={Screens.CreatePIN}
        component={PINCreate}
        options={{ title: t('Screens.ChangePIN'), headerBackTestID: testIdWithKey('Back') }}
      />
      <Stack.Screen
        name={Screens.Terms}
        component={terms}
        options={{ title: t('Screens.Terms'), headerBackTestID: testIdWithKey('Back') }}
      />
      <Stack.Screen
        name={Screens.Developer}
        component={developer}
        options={{ title: t('Screens.Developer'), headerBackTestID: testIdWithKey('Back') }}
      />
      <Stack.Screen name={Screens.Onboarding} options={{ title: t('Screens.Onboarding') }}>
        {(props) => (
          <Onboarding
            {...props}
            nextButtonText={t('Global.Next')}
            previousButtonText={t('Global.Back')}
            pages={pages(() => null, OnboardingTheme)}
            style={carousel}
            disableSkip={true}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default SettingStack
