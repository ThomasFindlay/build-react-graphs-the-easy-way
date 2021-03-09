import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-react-charts";
import { series } from "../fixtures/series";

const categories = ["January", "February", "March"];

const Line = props => {
  return (
    <Chart pannable zoomable style={{ height: 350 }}>
      <ChartTitle text="Application status - last 3 months" />
      <ChartLegend position="top" orientation="horizontal" />
      <ChartValueAxis>
        <ChartValueAxisItem title={{ text: "Quantity" }} min={0} />
      </ChartValueAxis>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={categories} startAngle={45} />
      </ChartCategoryAxis>
      <ChartSeries>
        {series.map((item, idx) => (
          <ChartSeriesItem
            key={idx}
            type="line"
            tooltip={{ visible: true }}
            data={item.data}
            name={item.name}
          />
        ))}
      </ChartSeries>
    </Chart>
  );
};

export default Line;
