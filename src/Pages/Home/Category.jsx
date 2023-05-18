import { Link, NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  return (
    <div className="container my-container my-20">
      <h1 className="text-3xl text-center font-bold my-4">Sample Website</h1>
      <Tabs className="border">
        <TabList className="flex  mb-4 border">
          <Tab className=" text-black px-4 py-4 rounded-lg border">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-700 font-bold text-black px-4 py-4 rounded-lg border"
                  : "font-bold"
              }
            >
              Section 1
            </NavLink>
          </Tab>
          <Tab className=" text-black px-4 py-4 rounded-lg border">
            <Link>Section 2</Link>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="bg-gray-100 p-4">
            <h2 className="text-xl font-bold mb-2">Section 1 Content</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              placerat varius orci ac semper. Donec feugiat nisi id facilisis
              lobortis.
            </p>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="bg-gray-100 p-4">
            <h2 className="text-xl font-bold mb-2">Section 2 Content</h2>
            <p>
              Quisque commodo aliquam erat, at semper felis pellentesque eget.
              Ut in velit ac turpis tempor cursus.
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
