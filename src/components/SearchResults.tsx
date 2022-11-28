import { List, ListRowRenderer } from "react-virtualized";

import { Product } from "../types/product";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Product[];
  totalPrice: number;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({
  results,
  totalPrice,
  onAddToWishlist,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }: any) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={90}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}
