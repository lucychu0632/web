import Test from './components/Test';

if (module.hot) {
  module.hot.accept('./library', function() {
    console.log('Accepting the updated library module!');
    Library.log();
  })
}