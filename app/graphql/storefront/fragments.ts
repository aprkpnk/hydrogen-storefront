export const MEDIA_FRAGMENT = `#graphql
  fragment Media on MediaImage {
    __typename
    mediaContentType
    alt
    previewImage {
      url
    }
    id
    image {
      id
      url
      width
      height
    }
  }
`

export const PRODUCT_CARD_FRAGMENT = `#graphql
  fragment ProductCard on Product {
    id
    title
    publishedAt
    handle
    vendor
    options {
      id
      optionValues {
        id
        name
        # this returns null so I added custom metafield to get color hex value
        swatch {
          color
        }
        firstSelectableVariant {
          id
          availableForSale
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          media:metafield(namespace:"custom",key:"media") {
            references(first: 5) {
              nodes {
                ...Media
              }
            }
          }
          colorHex:metafield(namespace:"custom",key:"color_hex") {
            value
          }
        }
      }
    }
    variants(first: 10) {
      nodes {
        id
        availableForSale
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
        selectedOptions {
          name
          value
        }
        media:metafield(namespace:"custom",key:"media") {
          references(first: 5) {
            nodes {
              ...Media
            }
          }
        }
        colorHex:metafield(namespace:"custom",key:"color_hex") {
          value
        }
      }
    }
  }

  ${MEDIA_FRAGMENT}
` as const
