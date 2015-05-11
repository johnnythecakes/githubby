var React = require('react-native');
var Main = require('./App/Components/Main');

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

class playtime extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute={{
          title: 'Playtime',
          component: Main,
        }}/>
    );
  }
};


AppRegistry.registerComponent('playtime', () => playtime);
