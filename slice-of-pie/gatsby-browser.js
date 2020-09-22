import React from "react";
import { Layout } from "./src/components/index";
export function wrapPageElement({ element, props }) {
  return <Layout>{element}</Layout>;
}
