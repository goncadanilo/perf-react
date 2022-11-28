import dynamic from "next/dynamic";
import { memo, useState } from "react";

import { Product } from "../types/product";
import { AddProductsToWishlistProps } from "./AddProductsToWishlist";

const AddProductsToWishlist = dynamic<AddProductsToWishlistProps>(
  () =>
    import("./AddProductsToWishlist").then((mod) => mod.AddProductsToWishlist),
  { loading: () => <span>Carregando...</span> }
);

interface ProductItemProps {
  product: Product;
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product?.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <AddProductsToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
