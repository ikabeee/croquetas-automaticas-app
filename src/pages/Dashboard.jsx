import BarChartComp from "../components/BarChartComp";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="chart-container">
                <BarChartComp/>
            </div>
        </div>
    )
}