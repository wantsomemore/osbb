import { Provider } from 'react-redux'
import { store } from './store/index'
import Navigator from './navigation/Routes'

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

export default App
