import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loader from "../helper/Loader";

const BaseLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Trigger loading state whenever route changes
  useEffect(() => {
    setLoading(true); // Set loader to true when location changes
  }, [location]);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false); // Hide loader after 1 second
      }, 1000); // Adjust the duration as needed
      return () => clearTimeout(timer); // Clean up the timeout on unmount
    }
  }, [loading]);
  {
    /* <Loader />; */
  }
  return <div>{loading ? <Outlet /> : <Outlet />} </div>;
};

export default BaseLayout;
