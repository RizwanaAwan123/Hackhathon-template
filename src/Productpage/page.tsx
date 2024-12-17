import Card from "@/app/components/card/Product/card";
import Product from "@/app/components/card/Product/singleProduct/feature";

import Footer from "@/app/components/Footer";
import React from "react";

export default function page() {
  return (
    <div>
      <Card />
      <Product />
      <Footer />
    </div>
  );
}
