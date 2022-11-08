import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ClientsCreate from '../../screens/client-add'
import ClientsList from '../../screens/client-list'
import { ClientsStack } from './clients.routes'

const Stack = createStackNavigator<ClientsStack>()

const ClientsRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={'Create'}>
    <Stack.Screen name="List" component={ClientsList} />
    <Stack.Screen name="Create" component={ClientsCreate} />
  </Stack.Navigator>
)

export default ClientsRoutes