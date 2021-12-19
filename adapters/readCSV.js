import _ from 'lodash';
import RNFS from 'react-native-fs';

export const readCSV = async (filename, converters = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await RNFS.readFile(filename, 'utf8');
      data = _.map(data.split('\n'), d => d.split(','));
      data = _.dropRightWhile(data, val => _.isEqual(val, ['']));
      console.log(data);
      const headers = _.first(data);

      data = _.map(data, (row, index) => {
        if (index === 0) {
          return row;
        }
        return _.map(row, (element, index) => {
          if (converters[headers[index]]) {
            const converted = converters[headers[index]](element);
            return _.isNaN(converted) ? element : converted;
          }

          const result = parseFloat(element.replace('"', ''));
          return _.isNaN(result) ? element : result;
        });
      });

      data = _.slice(data, 1, data.length);

      resolve({data, headers, error: null});
    } catch (err) {
      reject({data: null, headers: null, error: err});
    }
  });
};
