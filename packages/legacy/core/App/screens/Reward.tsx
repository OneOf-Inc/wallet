import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '../contexts/theme'
import { RewardStackParams, Screens } from '../types/navigators'

type RewardProps = StackScreenProps<RewardStackParams, Screens.Reward>

const offset = 25
const Reward: React.FC<RewardProps> = () => {
  const { HomeTheme } = useTheme()
  const { t } = useTranslation()

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: offset,
      paddingBottom: offset * 3,
    },

    messageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 35,
      marginHorizontal: offset,
    },
  })
  return (
    <>
      <View style={[styles.messageContainer]}>
        <Text adjustsFontSizeToFit style={[HomeTheme.welcomeHeader, { marginTop: offset, marginBottom: 20 }]}>
          {t('Reward.Latest')}
        </Text>
      </View>
      <View style={[styles.messageContainer]}>
        <Text style={[HomeTheme.credentialMsg, { marginTop: offset, textAlign: 'center' }]}>{t('Reward.Points')}</Text>
      </View>
    </>
  )
}

export default Reward
