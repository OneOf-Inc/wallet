import { NavigationProp, ParamListBase } from '@react-navigation/native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

import ColorModeButton from '../components/buttons/ColorModeButton'
import { useTheme } from '../contexts/theme'

interface ThemeProps {
  navigation: NavigationProp<ParamListBase>
}

const Theme: React.FC<ThemeProps> = () => {
  const { ColorPallet, TextTheme } = useTheme()
  const { t } = useTranslation()
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: ColorPallet.brand.primaryBackground,
    },
    title: {
      ...TextTheme.headingTwo,
      marginBottom: 15,
    },
    pageContent: {
      marginTop: 30,
      paddingLeft: 25,
      paddingRight: 25,
    },
    buttonView: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.pageContent}
        directionalLockEnabled
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.title}>{t('Theme.Title')}</Text>
        <Text style={TextTheme.normal}>{t('Theme.Preamble')}</Text>
        <View style={styles.buttonView}>
          <ColorModeButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Theme
