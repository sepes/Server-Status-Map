
import data from "../data/data";

function StatusBar () {

return <div className="status-bar">
  <div></div>
  <div>{data.map((d)=> {return <div className="status-bar-item">
<div className="status-name">{d.data.server}</div>
<div className={'status-state ' + d.data.state}>{d.data.state.toLocaleUpperCase()}</div>
<div className="status-info">
        <div className="info">Service: {d.data.name}</div>
        <div className="info">Updated: {d.data.updated}</div>
        <div className="info">Region: {d.data.aws_region}</div>
        <div className="info">Server status: {d.data?.state}</div>
</div>
</div>}
)}</div>
  </div>
  };

  export default StatusBar;