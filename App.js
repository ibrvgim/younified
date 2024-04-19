import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/MainScreens/HomeScreen';
import NewsScreen from './src/screens/MainScreens/NewsScreen';
import ServicesScreen from './src/screens/MainScreens/ServicesScreen';
import SettingsScreen from './src/screens/MainScreens/SettingsScreen';
import MainHeaderIcons from './src/components/MainHeaderIcons';
import VotingScreen from './src/screens/SecondaryScreens/VotingScreen';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from './src/constants/colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import TutorialsScreen from './src/screens/TertiaryScreens/TutorialsScreen';
import VoipScreen from './src/screens/TertiaryScreens/VoipScreen';
import GeneralScreen from './src/screens/TertiaryScreens/GeneralScreen';
import ExecutivesScreen from './src/screens/SecondaryScreens/ExecutivesScreen';
import ProfileScreen from './src/screens/SecondaryScreens/ProfileScreen';
import PerksScreen from './src/screens/SecondaryScreens/PerksScreen';
import CallUsScreen from './src/screens/SecondaryScreens/CallUsScreen';
import VotingQuestionsScreen from './src/screens/TertiaryScreens/VotingQuestionsScreen';

const TopTabs = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const navigationStyle = {
  headerRight: () => <MainHeaderIcons />,
  headerStyle: { height: 120 },
  tabBarStyle: { height: 90 },
  tabBarIconStyle: { marginTop: 5 },
};

const headerLogo = {
  headerLeft: () => (
    <Image
      style={{ marginHorizontal: 30 }}
      source={require('./assets/images/header_icon.png')}
    />
  ),
};

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <Navigation />
    </>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthenticatedScreens />
    </NavigationContainer>
  );
}

function AuthenticationScreens() {
  return (
    <Stack.Navigator initialRouteName='SignIn'>
      <Stack.Screen
        name='SignIn'
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedScreens() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.blue100,
        ...headerLogo,
        ...navigationStyle,
        headerTitle: '',
      }}
    >
      <Tabs.Screen
        name='HomeSecondaryScreens'
        component={HomeSecondaryScreens}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='home' size={size} color={color} />
          ),
          title: 'Home',
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name='News'
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='newspaper-outline' size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='ServicesSecondaryScreens'
        component={ServicesSecondaryScreens}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='customerservice' size={size} color={color} />
          ),
          title: 'Services',
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='setting' size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

function SecondaryScreensPattern({ name, component, children }) {
  return (
    <Stack.Navigator
      screenOptions={{
        ...navigationStyle,
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen
        name={name}
        component={component}
        options={{
          ...headerLogo,
          ...navigationStyle,
          headerTitle: '',
        }}
      />
      {children}
    </Stack.Navigator>
  );
}

function HomeSecondaryScreens() {
  return (
    <SecondaryScreensPattern name='Home' component={HomeScreen}>
      <Stack.Screen name='Documents' component={TopTabsScreens} />
      <Stack.Screen name='Executives' component={ExecutivesScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Perks' component={PerksScreen} />
    </SecondaryScreensPattern>
  );
}

function ServicesSecondaryScreens() {
  return (
    <SecondaryScreensPattern name='Services' component={ServicesScreen}>
      <Stack.Screen name='Voting' component={VotingScreen} />
      <Stack.Screen
        name='CallUs'
        component={CallUsScreen}
        options={{
          title: 'Call Us',
        }}
      />
      <Stack.Screen name='VotingQuestions' component={VotingQuestionsScreen} />
    </SecondaryScreensPattern>
  );
}

function TopTabsScreens() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'transparent' },
      }}
    >
      <TopTabs.Screen name='Tutorials' component={TutorialsScreen} />
      <TopTabs.Screen name='VOIP' component={VoipScreen} />
      <TopTabs.Screen name='General' component={GeneralScreen} />
    </TopTabs.Navigator>
  );
}
