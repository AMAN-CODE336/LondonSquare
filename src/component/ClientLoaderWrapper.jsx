"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function ClientLoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : children;
}
