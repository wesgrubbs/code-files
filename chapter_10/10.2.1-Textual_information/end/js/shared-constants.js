// Chart
const margin = {top: 110, right: 50, bottom: 130, left: 70};
const width = 1200;
const height = 650;
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
let innerChart;

// Selectors
const cetaceanFilters = [
  { id: "all", label: "All cetaceans", isActive: true },
  { id: "north", label: "Living in the northern hemisphere", isActive: false },
  { id: "south", label: "Living in the southern hemisphere", isActive: false },
  { id: "both", label: "Traveling through both hemispheres", isActive: false },
];

// Conservation status
const conservationStatuses = [
  { id: "LC", label: "Least Concern", color: "#20BF55" },
  { id: "NT", label: "Near Threatened", color: "#5EB1BF" },
  { id: "VU", label: "Vulnerable", color: "#ECC30B" },
  { id: "EN", label: "Endangered", color: "#EF7B45" },
  { id: "CR", label: "Critically Endangered", color: "#E9360D" },
];

// Scales
let yScale;
let colorScale;
let xScale;
let rScale;
const fontSizeScale = d3.scaleLinear()
  .domain([315, 1200])
  .range([53, 15])
  .clamp(true);
const axisLabelsScale = d3.scaleLinear()
  .domain([315, 1200])
  .range([60, 18])
  .clamp(true);