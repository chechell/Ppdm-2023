import { Button, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from "react-native-web";
export default function inicial() {
    const navigation = useNavigation();
    function cadastro() {
        navigation.navigate('Cadastro')
    }
    function login() {
        navigation.navigate('Login')
    }
    return (
        <View style={style.centrali}>
            <Button onPress={() => login()} title="login"/>
            <Button onPress={() => cadastro()} title="cadastro"/>
        </View>
    )
}
const style = StyleSheet.create({
    centrali:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
        
    }
})