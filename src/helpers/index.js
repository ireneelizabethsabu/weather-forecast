import moment from "moment-timezone";

const getHours = (timestamp, timezone) =>
  moment(timestamp * 1000)
    .tz(timezone)
    .format("HH");

const getMinutes = (timestamp, timezone) =>
  moment(timestamp * 1000)
    .tz(timezone)
    .format("mm");

const getmoonPhase = (phase) => {
  if (phase === 0 || phase === 1) return "New moon";
  else if (phase < 0.25) return "Waxing crescent";
  else if (phase === 0.25) return "First quarter";
  else if (phase < 0.5) return "Waxing gibious";
  else if (phase === 0.5) return "Full moon";
  else if (phase < 0.75) return "Waning gibious";
  else if (phase === 0.75) return "Last quarter";
  else if (phase < 1) return "Waning crescent";
};

const getuvIndex = (index) => {
  if(index < 3) return "Low";
  else if(index < 6) return "Moderate";
  else if(index < 8) return "High";
  else return "Very High";
}
    
const getDirection = (deg) => {
  //var arr = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
  var arr = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
  var val = Math.floor((deg / 22.5) + 0.5);
  return arr[val % 16];
}


export { getHours, getMinutes, getmoonPhase,getuvIndex,getDirection };
