import ComingSoon from "../components/ComingSoon";
import ProductList from "../components/ProductList";
import About from "../components/About";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <ComingSoon />
      <Suspense>
        <ProductList />
      </Suspense>
      <About />
    </>
  );
}
