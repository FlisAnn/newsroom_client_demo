import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ArticleShow = ({article}) => {
  return (
    <View>
      <Text>{article.title}</Text>
    </View>
  )
}

export default ArticleShow

const styles = StyleSheet.create({})
