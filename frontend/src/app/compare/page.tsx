import Search from "@/components/Search";
import Graph from "@/components/Graph";
import Output from "@/components/Output";

export default function ComparisonPage() {
  return (
    <>
        <div className="flex flex-row justify-between">
            <Search />
            <Graph />
            <Output />
        </div>
    </>
  );
}
