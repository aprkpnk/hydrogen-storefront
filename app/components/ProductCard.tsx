import { flattenConnection, Image } from '@shopify/hydrogen'
import { useEffect, useMemo, useState } from 'react'

import type { ProductCardFragment } from 'storefrontapi.generated'
import { convertToNum } from '~/lib/utils'

export const ProductCard = ({
  product,
  className,
  onClick
}: {
  product: ProductCardFragment
  className?: string
  onClick?: () => void
}) => {
  const variants = flattenConnection(product.variants)
  const options = product?.options?.[0].optionValues

  if (!variants?.length || !options) return null

  const [selectedVariant, setSelectedVariant] = useState(variants[0])

  const mainImg = useMemo(
    () => selectedVariant?.media?.references?.nodes?.[0]?.image,
    [selectedVariant]
  )
  const imgOnHover = useMemo(
    () => selectedVariant?.media?.references?.nodes?.[1]?.image,
    [selectedVariant]
  )

  useEffect(() => {
    setImage(mainImg)
  }, [mainImg])

  const [image, setImage] = useState(mainImg)

  return (
    <div
      className={`p-productCard bg-white text-gray-900 font-roboto max-w-369 ${className}`}
    >
      <div className="relative p-5 border border-e8e8e8 rounded-10">
        <div className="absolute top-5 left-5 p-badge text-red-600 border border-red-600 rounded-full text-base font-gothic leading-base">
          On Sale!
        </div>

        {image && (
          <Image
            data={image}
            onMouseEnter={() => setImage(imgOnHover)}
            onMouseOut={() => setImage(mainImg)}
            className={`h-301 w-auto aspect-productCard ${
              image.url === imgOnHover?.url ? 'object-contain' : 'object-cover'
            }`}
          />
        )}
      </div>

      <div className="flex gap-5px text-sm mt-4">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() =>
              setSelectedVariant(option?.firstSelectableVariant || variants[0])
            }
            className={`cursor-pointer w-6 h-6 rounded-full flex items-center justify-center ${
              selectedVariant.id === option?.firstSelectableVariant?.id
                ? 'border border-blue-700'
                : ''
            }`}
          >
            <div
              className="w-5 h-5 rounded-full"
              style={{
                backgroundColor:
                  option.firstSelectableVariant?.colorHex?.value ||
                  'transparent'
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1.5 mt-[15px]">
        <div className="text-sm leading-base">{product.vendor}</div>
        <div className="text-blue-800 text-base leading-base font-medium">
          {product.title}
        </div>
        <div className="text-sm leading-4">
          <span className="line-through mr-2">
            ${convertToNum(selectedVariant?.compareAtPrice?.amount)}{' '}
          </span>

          <span className="text-red-600">
            ${convertToNum(selectedVariant?.price?.amount)}
          </span>
        </div>
      </div>
    </div>
  )
}
