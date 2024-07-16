import AboutMeEntry from "./components/about_section/aboutMeEntry";
import DashboardContainer from "./components/dashboard/dashboardContainer";
import Menu from "./components/menu";

export default function Home() {
    return (
        <>
            <Menu />
            <DashboardContainer />
            <AboutMeEntry />
            <div className="main_sections">hola</div>
            <div className="main_sections">hola</div>
            <div className="main_sections">hola</div>
            <div className="main_sections">hola</div>
            <div id="target-section" className="main_sections">
                hola
            </div>
        </>
    );
}
