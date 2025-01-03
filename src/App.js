import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/appStore";
import {Provider} from "react-redux";

function App() {
  return (
    <div >
      <Provider store={appStore}>
      <Header/>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
