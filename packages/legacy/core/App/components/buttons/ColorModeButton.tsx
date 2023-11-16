import React, { useState } from 'react'

import HeaderButton, { ButtonLocation } from './HeaderButton'

const ColorModeButton: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handlePress = () => {
    setDarkMode(!darkMode)
    // eslint-disable-next-line no-console
    console.log('Changed Theme')
  }

  return (
    <HeaderButton
      buttonLocation={ButtonLocation.Right}
      accessibilityLabel="Scan" // Replace with translation function if needed
      testID="ColorModeButton"
      onPress={handlePress}
      icon={darkMode ? 'moon-waning-crescent' : 'weather-sunny'}
    />
  )
}

export default ColorModeButton
