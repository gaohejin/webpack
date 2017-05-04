import _ from 'lodash';
import numRef from './ref.json';

class NumTransalator {
  numtoword (num) {
    return num < 0 || num > 5 ? 'This is a failure' : this.converttoword(num);
  }
  wordtonum (word) {
    const num = this.converttonum(word);
    return num === -1 ? 'This is a failure' : num;
  }
  converttoword (num) {
    return _.reduce(numRef, (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    }, '');
  }
  converttonum (word) {
    return _.reduce(numRef, (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
  }
}

export default NumTransalator