import { Provider } from "react-redux";
import store from "./config/store";
import { sagaMiddleware } from "./config/middleware";
import rootSaga from "./config/sagas";
import MainContainer from "./containers/MainContainer";
import { ThemeProvider } from "styled-components";

const theme = {
  main: "#1fa4ce",
  secondary: "#f2f0fd",
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainContainer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

sagaMiddleware.run(rootSaga);
