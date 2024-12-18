import Card from "./Card";
import data from "../utils/data.json";

function Project() {
  return (
    <div className="dark:bg-gray-900 bg-[#ffffff] w-full" id="Project">
      <div className="flex flex-col-reverse items-center justify-between px-8 pt-8 pb-16 md:flex-row sm:px-16">
        <div className="flex flex-col space-y-3 sm:space-y-6 items-start text-[#5C637C] xl:border-l-8 xl:pl-8 xl:border-gray-200 py-8">
          <h4 className="ml-8 mb-8 text-3xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Project
          </h4>

          {/* Grid Layout for Projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {data[2].project.map((pro, i) => (
              <Card
                key={pro.id}
                title={pro.title}
                description={pro.description}
                photo={pro.url}
                link={pro.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
