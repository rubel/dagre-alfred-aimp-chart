import { assetList } from "./chartData";
import D3TopologyDiagram from "./D3TopologyDiagram";

const App = () => {
  return <div className="app">
    <D3TopologyDiagram allAssets={assetList} backButtonHandler={()=>{}} />
  </div>;
};

export default App;
