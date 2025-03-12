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
      }
    }
  }

  ${MEDIA_FRAGMENT}
` as const
