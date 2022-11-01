import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ReactNativeFusionCharts from 'react-native-fusioncharts';

const chartData = [
  { label: 'Venezuela', value: '250' },
  { label: 'Saudi', value: '260' },
  { label: 'Canada', value: '180' },
  { label: 'Iran', value: '140' },
  { label: 'Russia', value: '115' },
  { label: 'UAE', value: '100' },
  { label: 'US', value: '30' },
  { label: 'China', value: '30' },
];

const chartConfig = {
  type: 'column2D',
  width: '100%',
  height: '400',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Countries With Most Oil Reserves [2017-18]',
      subCaption: 'In MMbbl = One Million barrels',
      xAxisName: 'Country',
      yAxisName: 'Reserves (MMbbl)',
      numberSuffix: 'K',
      theme: 'fusion',
      exportEnabled: 1,
    },
    data: chartData,
  },
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ReactNativeFusionCharts chartConfig={chartConfig} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default App;
