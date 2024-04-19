import React, { useState } from 'react';
import { Switch } from 'react-native';
import { colors } from '../constants/colors';

function Switcher() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      trackColor={{ false: colors.white400, true: colors.blue100 }}
      thumbColor='#fff'
      ios_backgroundColor={colors.white400}
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={{
        transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
        margin: -10,
      }}
    />
  );
}

export default Switcher;
