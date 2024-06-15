import DashboardContainer from "./components/dashboard/dashboardContainer";
import Menu from "./components/menu";

export default function Home() {
    return (
        <>
            <Menu />
            <DashboardContainer />
            <div className="hola">hola</div>
            <div className="hola">hola</div>
            <div className="hola">hola</div>
            <div className="hola">hola</div>
            <div id="target-section" className="hola">
                hola
            </div>
        </>
    );
}
