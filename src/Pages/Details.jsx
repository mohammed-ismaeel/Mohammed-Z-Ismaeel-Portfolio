import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Footer from "../components/Footer/Footer";

const Details = ({ onClick }) => {
  return (
    <div className="dark:bg-darkybg">
      <ProjectDetails onClick={onClick} />
    </div>
  );
};

export default Details;
