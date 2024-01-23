import { View, Pressable, StyleSheet, Text } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const IconButton = ({ icon, label, onPress }) => {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color={'#fff'} />
            <Text style={styles.iconButtonText}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonText: {
        color: '#fff',
        marginTop: 12,
    }
})

export default IconButton