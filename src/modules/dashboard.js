import React from "react";
import { Bar } from "react-chartjs-2";
import LayoutContent from "../components/layout/layout";

const Dashboard = () => {
  const blogData = [
    {
      heading: "New Feature Interface",
      description:
        "Today on the 14th September I added a new feature to the dashboard application",
    },
    {
      heading: "Fix styling on layout",
      description:
        "Fixed the styling for layout components on the dashboard page",
    },
    {
      heading: "",
      description: "",
    },
    {
      heading: "",
      description: "",
    },
  ];

  return (
    <LayoutContent>
      <div className="flex flex-col gap-4">
        <div className="bg-white shadow-md shadow-[#1478FC3A] rounded-md w-full h-auto flex flex-col gap-4 p-6">
          <div className="flex flex-col w-full gap-4">
            <h2 className="font-bold text-2xl text-[#0178FF]">Activities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full gap-6 h-full">
              {blogData &&
                blogData.map((m, i) => {
                  return (
                    <div
                      className="rounded-md bg-gradient-to-l from-[#0178FF] to-[#0178ffa9] p-5 h-40"
                      key={i}
                    >
                      <div className="flex flex-col justify-center h-full gap-4">
                        <h2
                          className={
                            m.heading
                              ? "text-white text-xl font-semibold"
                              : "animate-pulse bg-slate-100 m-0 h-2 rounded-md w-full"
                          }
                        >
                          {m.heading}
                        </h2>
                        <p
                          className={
                            m.description
                              ? "text-white m-0"
                              : "animate-pulse bg-slate-100 m-0 h-2 rounded-md w-full"
                          }
                        >
                          {m.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md shadow-[#1478FC3A] rounded-md w-full h-auto flex flex-col gap-4 p-6">
          <div className="grid grid-cols-2 w-full gap-4">
            <div>
              <h2 className="font-bold text-2xl text-[#0178FF]">Charts</h2>
              <div>
                {/* <Bar/> */}
              </div>
            </div>
            <div>
              <h2 className="font-bold text-2xl text-[#0178FF]">Github Data</h2>
            </div>
          </div>
        </div>
      </div>
    </LayoutContent>
  );
};

export default Dashboard;
