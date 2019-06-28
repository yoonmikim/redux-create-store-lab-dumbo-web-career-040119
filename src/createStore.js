export default function createStore(reducer) {
  // add your code here
  const store = createStore(reducer, window.STATE_FROM_SERVER)
  return store
}

function render() {
  const container = document.getElementById('container');
}
