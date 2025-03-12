import { flattenConnection, Image } from '@shopify/hydrogen'
import { useState } from 'react'

import type { ProductCardFragment } from 'storefrontapi.generated'

export function ProductCard({
  product,
  className,
  onClick
}: {
  product: ProductCardFragment
  className?: string
  onClick?: () => void
}) {
  const variants = flattenConnection(product.variants)

  if (!variants?.length) return null

  const [selectedVariant, setSelectedVariant] = useState(variants[0])

  return (
    <>
      {selectedVariant?.media?.references?.nodes?.[0]?.image ? (
        <Image
          src={selectedVariant?.media?.references?.nodes?.[0]?.image?.url}
        />
      ) : null}
      <div>
        {variants.map((variant) => (
          <div>Color: {variant.selectedOptions?.[0]?.name}</div>
        ))}
      </div>
      <div>{product.title}</div>
      <div>{product.vendor}</div>
      <div>{selectedVariant?.price?.amount}</div>
    </>
  )
}
