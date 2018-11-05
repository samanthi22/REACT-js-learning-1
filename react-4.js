import React from 'react'
import {StyleSheet, Text} from 'react-native'

const styles = StyleSheet.create([
    text: {fontSize: 72},
})
    
export const num = 50 

const Count = props => (
    <Text style = {styles.text}>{props.count}</Text>
)

export default Count
    