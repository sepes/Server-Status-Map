import './App.css';
import { ResponsiveChoropleth } from "@nivo/geo";
import countries from './data/world_countries.json';
import importMe from "./data/data";

function App() {
  return (
    <div className="App">
      <div style={{ height: "800px" }}>
        <MyResponsiveChoropleth />
      </div>
    </div>
  );
}

const MyResponsiveChoropleth = () => (
  <ResponsiveChoropleth
    data={importMe}
    features={countries.features}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="nivo"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    projectionScale={200}
    projectionTranslation={[0.5, 0.8]}
    projectionRotation={[0, 0, 0]}
    graticuleLineColor="#dddddd"
    borderWidth={1}
    borderColor="#152538"
    tooltip={(feat, color) => {
      if (!feat.feature.label) return
      const featData = importMe[0].data
      return <div
        style={{
          padding: 12,
          color,
          background: "#ffffff"
        }}
      >
        <span>Server: {feat.feature.label}</span>
        <br />
        <span>Service: {featData.name}</span>
        <br />
        <span>Updated: {featData.updated}</span>
        <br />
        <span>Region: {featData.aws_region}</span>
        <br />
        <strong>
          <span>Server status: {featData?.state}</span>
        </strong>
        <br />
        <small>Value: {feat.feature.value}</small>
      </div>
    }



    }
  />
);

export default App;
