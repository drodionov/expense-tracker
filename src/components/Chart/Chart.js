import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = ({dataPoints}) => {

  const totalMax = Math.max(...dataPoints.map(point => point.value))

  const chartBars = dataPoints.map(
      dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value}
                             maxValue={totalMax} label={dataPoint.label}/>)

  return (
      <div className={'chart'}>{chartBars}</div>
  )
}

export default Chart