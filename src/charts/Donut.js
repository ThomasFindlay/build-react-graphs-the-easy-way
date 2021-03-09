import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import { COLORS } from "../constants";
import "hammerjs";

const applicationsInLastWeek = [
  {
    status: "Accepted",
    value: 5,
    color: COLORS.accepted,
  },
  {
    status: "Interviewing",
    value: 5,
    color: COLORS.interviewing,
  },
  {
    status: "Rejected",
    value: 15,
    color: COLORS.rejected,
  },
  {
    status: "Pending",
    value: 12,
    color: COLORS.pending,
  },
];

const labelContent = e => e.category;

const renderTooltip = context => {
  console.log("context", context);

  const { category, value } = context.point || context;
  return (
    <div>
      {category}: {value}%
    </div>
  );
};

<ChartTooltip render={renderTooltip} />;

const Charts = props => {
  return (
    <Chart>
      <ChartTitle text="Applications status - this month" />
      <ChartTooltip render={renderTooltip} />
      <ChartSeries>
        <ChartSeriesItem
          type="donut"
          data={applicationsInLastWeek}
          categoryField="status"
          field="value"
        >
          <ChartSeriesLabels
            color="#fff"
            background="none"
            content={labelContent}
          />
        </ChartSeriesItem>
      </ChartSeries>
      <ChartLegend visible={false} />
    </Chart>
  );
};

export default Charts;
