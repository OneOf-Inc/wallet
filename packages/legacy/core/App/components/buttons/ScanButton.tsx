import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { Screens, Stacks } from '../../types/navigators'

import HeaderButton, { ButtonLocation } from './HeaderButton'

const ScanButton: React.FC = () => {
  const navigation = useNavigation()

  const handlePress = () => {
    // TODO: Reverify Flow
    navigation.getParent()?.navigate(Stacks.ConnectStack, {
      screen: Screens.Scan,
      params: { defaultToConnect: true },
    })
  }

  return (
    <HeaderButton
      buttonLocation={ButtonLocation.Right}
      accessibilityLabel="Scan" // Replace with translation function if needed
      testID="ScanButton"
      onPress={handlePress}
      icon="qrcode"
    />
  )
}

export default ScanButton
