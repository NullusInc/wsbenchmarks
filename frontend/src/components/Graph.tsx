"use client"

import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

interface StockData {
  date: Date
  value: number
  percentageGrowth: number
  symbol: string
}

type DateRange = "1D" | "1W" | "1M" | "3M" | "1Y" | "ALL";

const stockSymbols = ["Stock A", "Stock B"]
const colors = ["#4ade80", "#ef4444"]

const generateDummyData = (days: number, symbol: string): StockData[] => {
  const data: StockData[] = []
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - days)
  let value = 10000 // Starting with $10,000 invested

  for (let i = 0; i <= days; i++) {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)
    const dailyChange = (Math.random() - 0.5) * 200 // Random daily change
    value += dailyChange
    const percentageGrowth = ((value - 10000) / 10000) * 100 // Calculate percentage growth
    data.push({ date, value, percentageGrowth, symbol })
  }

  return data
}

export default function StockGraph() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dateRange, setDateRange] = useState<DateRange>("1M");
  const [data, setData] = useState<StockData[]>([]);

  useEffect(() => {
    const daysMap: Record<DateRange, number> = {
      "1D": 1, "1W": 7, "1M": 30, "3M": 90, "1Y": 365, "ALL": 1825
    }
    const newData = stockSymbols.flatMap(symbol => 
      generateDummyData(daysMap[dateRange], symbol)
    );
    setData(newData);
  }, [dateRange]);

  useEffect(() => {
    if (data.length === 0) return

    const margin = { top: 20, right: 80, bottom: 30, left: 60 }
    const width = Math.min(1200, window.innerWidth - 40) - margin.left - margin.right
    const height = 500 - margin.top - margin.bottom

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .html(null) // Clear previous content
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)

    const xScale = d3.scaleTime()
      .domain(d3.extent(data, d => d.date) as [Date, Date])
      .range([0, width])

    const yScale = d3.scaleLinear()
      .domain([d3.min(data, d => d.value) as number, d3.max(data, d => d.value) as number])
      .range([height, 0])

    const colorScale = d3.scaleOrdinal<string>()
      .domain(stockSymbols)
      .range(colors)

    const line = d3.line<StockData>()
      .x(d => xScale(d.date))
      .y(d => yScale(d.value))

    const groupedData = d3.group(data, d => d.symbol)

    groupedData.forEach((stockData, symbol) => {
      svg.append("path")
        .datum(stockData)
        .attr("fill", "none")
        .attr("stroke", colorScale(symbol))
        .attr("stroke-width", 2)
        .attr("d", line)
    })

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .attr("color", "#718096")

    svg.append("g")
      .call(d3.axisLeft(yScale).tickFormat(d => `$${d}`))
      .attr("color", "#718096")

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("fill", "#E2E8F0")
      .text("Total Invested Amount ($)")

    const focus = svg.append("g")
      .attr("class", "focus")
      .style("display", "none")

    focus.append("line")
      .attr("class", "x-hover-line hover-line")
      .attr("y1", 0)
      .attr("y2", height)
      .style("stroke", "#718096")
      .style("stroke-width", "1px")
      .style("stroke-dasharray", "3,3")

    stockSymbols.forEach((symbol, index) => {
      focus.append("circle")
        .attr("r", 5)
        .attr("fill", colorScale(symbol))
        .attr("class", `circle-${symbol.replace(" ", "-")}`)

      focus.append("text")
        .attr("class", `text-${symbol.replace(" ", "-")}`)
        .attr("x", 15)
        .attr("dy", `${1.2 + index * 1.2}em`)
        .style("fill", colorScale(symbol))
    })

    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .style("fill", "none")
      .style("pointer-events", "all")
      .on("mouseover", () => focus.style("display", null))
      .on("mouseout", () => focus.style("display", "none"))
      .on("mousemove", mousemove)

    function mousemove(event: MouseEvent) {
      const bisect = d3.bisector((d: StockData) => d.date).left
      const x0 = xScale.invert(d3.pointer(event)[0])
      
      stockSymbols.forEach(symbol => {
        const stockData = groupedData.get(symbol) || []
        const i = bisect(stockData, x0, 1)
        const d0 = stockData[i - 1]
        const d1 = stockData[i]
        if (d0 && d1) {
          const d = x0.getTime() - d0.date.getTime() > d1.date.getTime() - x0.getTime() ? d1 : d0
          focus.select(`.circle-${symbol.replace(" ", "-")}`)
            .attr("transform", `translate(${xScale(d.date)},${yScale(d.value)})`)
          focus.select(`.text-${symbol.replace(" ", "-")}`)
            .text(`${symbol}: $${d.value.toFixed(2)} (${d.percentageGrowth.toFixed(2)}%)`)
            .attr("transform", `translate(${xScale(d.date)},${yScale(d.value)})`)
        }
      })

      focus.select(".x-hover-line").attr("transform", `translate(${d3.pointer(event)[0]},0)`)
    }

  }, [data]);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-100">Stock Growth Comparison</h2>
      <svg ref={svgRef} className="w-full h-full"></svg>
      <div className="flex flex-row flex-nowrap p-1 rounded-3xl bg-primary-light justify-between items-center w-1/2 mx-auto">
        {["1D", "1W", "1M", "3M", "1Y", "ALL"].map((range) => (
          <div
            key={range}
            onClick={() => setDateRange(range as DateRange)}
            className={`px-3 py-1 rounded ${
              dateRange === range ? "bg-secondary text-white" : " text-white"
            }`}
          >
            {range}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        {stockSymbols.map((symbol, index) => (
          <div key={symbol} className="flex items-center">
            <div className={`w-4 h-4 rounded-full mr-2`} style={{backgroundColor: colors[index]}}></div>
            <span className="text-black">{symbol}</span>
          </div>
        ))}
      </div>
    </div>
  );
}