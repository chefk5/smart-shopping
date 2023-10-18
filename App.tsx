import Main from "./src/navigation/MainTab";
import { PaperProvider } from "react-native-paper";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </PaperProvider>
  );
}
