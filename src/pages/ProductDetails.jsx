import PageHeader from "../components/PageHeader";
import ProductInfo from "../components/ProductInfo";
import ProductTabs from "../components/ProductTabs";
import RelatedGames from "../components/RelatedGames";
import { product } from "../data/product";

export default function ProductDetails() {
  return (
    <>
      <PageHeader
        title={product.headerTitle}
        crumbs={[{ label: "Shop", to: "/shop" }, { label: "Assassin Creed" }]}
      />
      <ProductInfo product={product} />
      <ProductTabs product={product} />
      <RelatedGames />
    </>
  );
}