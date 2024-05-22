import React, { useContext } from "react";
import { AuthContext } from "../Context/auth";
import Login from "../Login";

const Services = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <div className="services bg-white text-gray-800 py-12 px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">
            Our Data Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card rounded-lg shadow-md p-6 bg-purple-100 text-gray-700">
              <h3>Big Data Services</h3>
              <p>
                We specialize in Big Data services, offering consulting,
                analytics, and data management solutions to help businesses
                unlock insights and make data-driven decisions at scale.
              </p>
            </div>
            <div className="service-card rounded-lg shadow-md p-6 bg-purple-100 text-gray-700">
              <h3>Data Analytics Services</h3>
              <p>
                Our expert Data Analytics services transform raw data into
                actionable insights, helping optimize operations, identify
                opportunities, and make informed decisions with advanced
                techniques and tools.
              </p>
            </div>
            <div className="service-card rounded-lg shadow-md p-6 bg-purple-100 text-gray-700">
              <h3>Managed Analytics Services</h3>
              <p>
                We provide Managed Analytics services, offering end-to-end data
                management, integration, and analysis for your business to
                unlock valuable insights and drive strategic growth.
              </p>
            </div>
            <div className="service-card rounded-lg shadow-md p-6 bg-purple-100 text-gray-700">
              <h3>Business Intelligence Solutions</h3>
              <p>
                Our comprehensive Business Intelligence solutions help you gain
                actionable insights, visualize data trends, and make informed
                decisions to drive business success.
              </p>
            </div>
            <div className="service-card rounded-lg shadow-md p-6 bg-purple-100 text-gray-700">
              <h3>Data Science Solutions</h3>
              <p>
                Our expert Data Science solutions help harness data's potential,
                enabling valuable insights, data-driven decisions, and
                innovation through advanced analytics and machine learning
                expertise, leading to transformative outcomes and a competitive
                edge.
              </p>
            </div>
            <div className="service-card rounded-lg shadow-md p-6 bg-purple-100 text-gray-700">
              <h3>Data Management Solutions</h3>
              <p>
                Our Data Management solutions maximize the potential of your
                data, streamlining processes for efficiency and accuracy from
                acquisition to governance and quality assurance.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Services;
