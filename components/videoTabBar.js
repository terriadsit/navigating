import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    StyleSheet
 } from 'react-native';

export default function VideoTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View style={styles.tab}>
              <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tab: {
        height: 60,
        width: 100,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        marginBottom: 8,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingTop: 5,
        alignSelf: 'center',
        backgroundColor: '#ebeff1',
        borderRadius: 10,
        shadowOffset: { width: 1, height: 1 },  // how much down and right shadow is
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
    }
})



