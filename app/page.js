import AboutMeEntry from "./components/about_section/aboutMeEntry";
import CertificationsEntry from "./components/certifications/certificationsEntry";
import ContactEntry from "./components/contact_section/contactEntry";
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
            <CertificationsEntry />
            <LetsConnect />
            <ContactEntry />
            <ProjectsEntry />
        </>
    );
}
