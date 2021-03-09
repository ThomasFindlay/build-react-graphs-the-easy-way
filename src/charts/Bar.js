import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
  exportVisual,
} from "@progress/kendo-react-charts";
import { exportPDF } from "@progress/kendo-drawing";
import { saveAs } from "@progress/kendo-file-saver";

import { series } from "../fixtures/series";

const categories = ["Jan", "Feb", "Mar"];

const seriesLabels = {
  visible: true,
  padding: 3,
  font: "normal 16px Arial, sans-serif",
  position: "center",
};

const Bar = props => {
  return (
    <Chart pannable zoomable>
      <ChartTitle text="Applications status - last 3 months" />
      <ChartLegend visible={true} position="top" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={categories}>
          <ChartCategoryAxisTitle text="Months" />
        </ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartSeries>
        {series.map((item, idx) => (
          <ChartSeriesItem
            key={idx}
            type="bar"
            gap={2}
            spacing={0.25}
            labels={seriesLabels}
            data={item.data}
            name={item.status}
            color={item.color}
          />
        ))}
      </ChartSeries>
    </Chart>
  );
};

export default Bar;
