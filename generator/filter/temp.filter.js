export default function () {
  return function (text = '') {
    return text.replace(/u/g, 'bbb');
  }
}
