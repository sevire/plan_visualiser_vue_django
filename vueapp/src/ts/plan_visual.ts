import { ActivityData, PlotConfig } from "@/ts/interfaces";

const plotConfig: PlotConfig = {
  margin: 20,
  trackHeight: 20,
  milestoneWidth: 15,
  milestoneTextGap: 10,
  trackGap: 5,
  dayWidth: 300,
  dateMin: new Date("2022-01-01"),
  plotWidth: -1, // Initial value which will be overwritten
};

const canvas_background = "rgb(238,234,211)";
const activity_colour = "rgb(241,202,151)";
const milestone_colour = "rgb(92,126,191)";
const activity_text = "rgb(34,69,191)";

export function drawVisual(planData: ActivityData[]): void {
  console.log("Draw Visual");
  console.log(planData);
  console.log("dateMin", plotConfig.dateMin);

  const canvas: HTMLCanvasElement = document.getElementById(
    "plan-visual"
  ) as HTMLCanvasElement;
  const context: CanvasRenderingContext2D = canvas.getContext(
    "2d"
  ) as CanvasRenderingContext2D;

  console.log("Canvas width, height", canvas.width, canvas.height);
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = canvas_background;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = "15px Arial";

  plotConfig.plotWidth = canvas.width - 2 * plotConfig.margin;

  planData.forEach((activity) => {
    console.log("activity", activity);
    const startDate = new Date(activity.start_date);
    const endDate = new Date(activity.end_date);

    if (activity.duration == 0) {
      plotMilestone(
        startDate,
        activity.trackNum,
        activity.name,
        plotConfig,
        context
      );
    } else {
      plotActivity(
        startDate,
        endDate,
        activity.trackNum,
        activity.name,
        plotConfig,
        context
      );
    }
  });
}

function dayDiff(startDate: Date, endDate: Date) {
  console.log("dayDiff", startDate, endDate);
  const timeDiff = endDate.getTime() - startDate.getTime();
  return timeDiff / (1000 * 3600 * 24);
}

function plotActivity(
  startDate: Date,
  endDate: Date,
  trackNumber: number,
  text: string,
  config: PlotConfig,
  ctx: CanvasRenderingContext2D
) {
  console.log("plotActivity (dateMin)", config.dateMin);
  const daysFromLeft = dayDiff(config.dateMin, startDate);
  const activityDayWidth = dayDiff(startDate, endDate);
  const activityPlotWidth =
    (activityDayWidth / config.dayWidth) * config.plotWidth;

  const x = config.margin + (daysFromLeft / config.dayWidth) * config.plotWidth;
  const y = trackNumToOffset(trackNumber, config);

  ctx.fillStyle = activity_colour;
  ctx.fillRect(x, y, activityPlotWidth, config.trackHeight);

  ctx.fillStyle = activity_text;
  ctx.fillText(text, x + 5, y + config.trackHeight - 5);
}

function trackNumToOffset(trackNum: number, config: PlotConfig) {
  return config.margin + (config.trackHeight + config.trackGap) * trackNum;
}

function plotMilestone(
  startDate: Date,
  trackNumber: number,
  text: string,
  config: PlotConfig,
  ctx: CanvasRenderingContext2D
) {
  console.log("plotMilestone (dateMin)", config.dateMin);
  const daysFromLeft = dayDiff(config.dateMin, startDate);
  const x =
    config.margin +
    (daysFromLeft / config.dayWidth) * config.plotWidth -
    config.milestoneWidth / 2;
  const y = trackNumToOffset(trackNumber, config);

  plotDiamond(
    ctx,
    milestone_colour,
    x,
    y,
    config.milestoneWidth,
    config.trackHeight
  );
  ctx.fillStyle = milestone_colour;
  ctx.fill();

  ctx.fillStyle = activity_text;
  ctx.fillText(
    text,
    x + config.milestoneWidth / 2 + config.milestoneTextGap,
    y + config.trackHeight - 5
  );
}

function plotDiamond(
  ctx: CanvasRenderingContext2D,
  fillStyle: string,
  left: number,
  top: number,
  width: number,
  height: number
) {
  const point_1_x = left;
  const point_1_y = top + height / 2;
  const point_2_x = left + width / 2;
  const point_2_y = top;
  const point_3_x = left + width;
  const point_3_y = top + height / 2;
  const point_4_x = left + width / 2;
  const point_4_y = top + height;

  ctx.beginPath();
  ctx.moveTo(point_1_x, point_1_y);
  ctx.lineTo(point_2_x, point_2_y);
  ctx.lineTo(point_3_x, point_3_y);
  ctx.lineTo(point_4_x, point_4_y);
  ctx.lineTo(point_1_x, point_1_y);
  ctx.closePath();
}
