import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Button } from "react-native";

export default function home() {
    const navigation = useNavigation();
    function inicial () {
        navigation.navigate('inicial')
    }
    return (
        <View style={style.centrali}>
            <Text>Farm de mine </Text>
            <Button onPress={() => inicial()} title="Sair da conta"/>
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