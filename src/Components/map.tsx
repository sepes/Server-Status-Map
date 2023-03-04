import { ResponsiveChoropleth } from "@nivo/geo";
import countries from '../data/world_countries.json';
import importMe from "../data/data";

function ServerStatusMap () {
  return <div className="map"><ResponsiveChoropleth
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

      // Ok this part is sketchy. Nivo just didn't read Data field how it was supposed to.. 
      // also somehow the data.id field does not work in feat.feature.
      const serverData = []
      importMe.forEach((d) => {if(d.value === feat.feature.value){serverData.push(d.data)}
      })
      const featData = serverData[0]
      // ---

      return <div
        className="statusHover"
      >
        <div className="class1">Server: {feat.feature.label}</div>
        <div className="class2">Service: {featData.name}</div>
        <div className="class2">Updated: {featData.updated}</div>
        <div className="class2">Region: {featData.aws_region}</div>
        <div className="class3">Server status: {featData?.state}</div>
      </div>
    }



    }
  /></div>
  };

  export default ServerStatusMap;