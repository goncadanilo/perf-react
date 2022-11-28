export interface AddProductsToWishlistProps {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

export function AddProductsToWishlist({
  onAddToWishlist,
  onRequestClose,
}: AddProductsToWishlistProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
