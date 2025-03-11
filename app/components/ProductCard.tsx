import {flattenConnection} from '@shopify/hydrogen';

import type {ProductCardFragment} from 'storefrontapi.generated';

export function ProductCard({
  product,
  className,
  onClick,
}: {
  product: ProductCardFragment;
  className?: string;
  onClick?: () => void;
}) {
  if (!product?.variants?.nodes?.length) return null;

  const firstVariant = flattenConnection(product.variants)[0];

  if (!firstVariant) return null;

  return <div>${product.title}</div>;
}
