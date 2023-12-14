import { createStackNavigator } from "@react-navigation/stack";
import inicial from 'Ppdm-2023/src/screens/inicial.js';
import cadastro from 'Ppdm-2023/src/screens/cadastro.js';
import home from 'Ppdm-2023/src/screens/home.js';
import { NavigationContainer } from "@react-navigation/native";

export default function navegacao() {
    var Stack = createStackNavigator()
    return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="inicial"component={inicial}
            options={{headerShown: false}}/>
            <Stack.Screen name="login"component={login}
            options={{headerShown: false}}/>
            <Stack.Screen name="cadastro"component={cadastro}
            options={{headerShown: false}}/>
            <Stack.Screen name="home"component={home}
            options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
        
        )
}
