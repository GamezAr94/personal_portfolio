import AboutMeEntry from "./components/about_section/aboutMeEntry";
import DashboardContainer from "./components/dashboard/dashboardContainer";
import LetsConnect from "./components/letsConnect/letsConnect";
import Menu from "./components/menu";
import ProjectsEntry from "./components/projects_section/projectsEntry";

export default function Home() {
    return (
        <>
            <Menu />
            <DashboardContainer />
            <AboutMeEntry />
            <LetsConnect />
            <ProjectsEntry />
        </>
    );
}
