/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';

export type CollectionDetailsQueryVariables = StorefrontAPI.Exact<{
  handle: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type CollectionDetailsQuery = {
  collection?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Collection,
      'id' | 'handle' | 'title' | 'description'
    > & {
      seo: Pick<StorefrontAPI.Seo, 'description' | 'title'>;
      image?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Image, 'id' | 'url' | 'width' | 'height' | 'altText'>
      >;
      products: {
        nodes: Array<
          Pick<
            StorefrontAPI.Product,
            'id' | 'title' | 'publishedAt' | 'handle' | 'vendor'
          > & {
            variants: {
              nodes: Array<
                Pick<
                  StorefrontAPI.ProductVariant,
                  'id' | 'availableForSale'
                > & {
                  price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
                  compareAtPrice?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                  >;
                  selectedOptions: Array<
                    Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
                  >;
                  media?: StorefrontAPI.Maybe<{
                    references?: StorefrontAPI.Maybe<{
                      nodes: Array<
                        {__typename: 'MediaImage'} & Pick<
                          StorefrontAPI.MediaImage,
                          'mediaContentType' | 'alt' | 'id'
                        > & {
                            previewImage?: StorefrontAPI.Maybe<
                              Pick<StorefrontAPI.Image, 'url'>
                            >;
                            image?: StorefrontAPI.Maybe<
                              Pick<
                                StorefrontAPI.Image,
                                'id' | 'url' | 'width' | 'height'
                              >
                            >;
                          }
                      >;
                    }>;
                  }>;
                }
              >;
            };
          }
        >;
        pageInfo: Pick<
          StorefrontAPI.PageInfo,
          'hasPreviousPage' | 'hasNextPage' | 'endCursor' | 'startCursor'
        >;
      };
    }
  >;
};

export type MediaFragment = {__typename: 'MediaImage'} & Pick<
  StorefrontAPI.MediaImage,
  'mediaContentType' | 'alt' | 'id'
> & {
    previewImage?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>>;
    image?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Image, 'id' | 'url' | 'width' | 'height'>
    >;
  };

export type ProductCardFragment = Pick<
  StorefrontAPI.Product,
  'id' | 'title' | 'publishedAt' | 'handle' | 'vendor'
> & {
  variants: {
    nodes: Array<
      Pick<StorefrontAPI.ProductVariant, 'id' | 'availableForSale'> & {
        price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        compareAtPrice?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
        selectedOptions: Array<
          Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
        >;
        media?: StorefrontAPI.Maybe<{
          references?: StorefrontAPI.Maybe<{
            nodes: Array<
              {__typename: 'MediaImage'} & Pick<
                StorefrontAPI.MediaImage,
                'mediaContentType' | 'alt' | 'id'
              > & {
                  previewImage?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.Image, 'url'>
                  >;
                  image?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.Image, 'id' | 'url' | 'width' | 'height'>
                  >;
                }
            >;
          }>;
        }>;
      }
    >;
  };
};

export type LayoutQueryVariables = StorefrontAPI.Exact<{
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
  headerMenuHandle: StorefrontAPI.Scalars['String']['input'];
  footerMenuHandle: StorefrontAPI.Scalars['String']['input'];
}>;

export type LayoutQuery = {
  shop: Pick<StorefrontAPI.Shop, 'id' | 'name' | 'description'> & {
    primaryDomain: Pick<StorefrontAPI.Domain, 'url'>;
    brand?: StorefrontAPI.Maybe<{
      logo?: StorefrontAPI.Maybe<{
        image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>>;
      }>;
    }>;
  };
  headerMenu?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Menu, 'id'> & {
      items: Array<
        Pick<
          StorefrontAPI.MenuItem,
          'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
        > & {
          items: Array<
            Pick<
              StorefrontAPI.MenuItem,
              'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
            >
          >;
        }
      >;
    }
  >;
  footerMenu?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Menu, 'id'> & {
      items: Array<
        Pick<
          StorefrontAPI.MenuItem,
          'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
        > & {
          items: Array<
            Pick<
              StorefrontAPI.MenuItem,
              'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
            >
          >;
        }
      >;
    }
  >;
};

export type ShopFragment = Pick<
  StorefrontAPI.Shop,
  'id' | 'name' | 'description'
> & {
  primaryDomain: Pick<StorefrontAPI.Domain, 'url'>;
  brand?: StorefrontAPI.Maybe<{
    logo?: StorefrontAPI.Maybe<{
      image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>>;
    }>;
  }>;
};

export type MenuItemFragment = Pick<
  StorefrontAPI.MenuItem,
  'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
>;

export type ChildMenuItemFragment = Pick<
  StorefrontAPI.MenuItem,
  'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
>;

export type ParentMenuItemFragment = Pick<
  StorefrontAPI.MenuItem,
  'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
> & {
  items: Array<
    Pick<
      StorefrontAPI.MenuItem,
      'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
    >
  >;
};

export type MenuFragment = Pick<StorefrontAPI.Menu, 'id'> & {
  items: Array<
    Pick<
      StorefrontAPI.MenuItem,
      'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
    > & {
      items: Array<
        Pick<
          StorefrontAPI.MenuItem,
          'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
        >
      >;
    }
  >;
};

export type SitemapProductsQueryVariables = StorefrontAPI.Exact<{
  page: StorefrontAPI.Scalars['Int']['input'];
}>;

export type SitemapProductsQuery = {
  sitemap: {
    resources?: StorefrontAPI.Maybe<{
      items: Array<
        | Pick<StorefrontAPI.SitemapResource, 'handle' | 'updatedAt'>
        | Pick<StorefrontAPI.SitemapResourceMetaobject, 'handle' | 'updatedAt'>
      >;
    }>;
  };
};

export type SitemapCollectionsQueryVariables = StorefrontAPI.Exact<{
  page: StorefrontAPI.Scalars['Int']['input'];
}>;

export type SitemapCollectionsQuery = {
  sitemap: {
    resources?: StorefrontAPI.Maybe<{
      items: Array<
        | Pick<StorefrontAPI.SitemapResource, 'handle' | 'updatedAt'>
        | Pick<StorefrontAPI.SitemapResourceMetaobject, 'handle' | 'updatedAt'>
      >;
    }>;
  };
};

export type SitemapArticlesQueryVariables = StorefrontAPI.Exact<{
  page: StorefrontAPI.Scalars['Int']['input'];
}>;

export type SitemapArticlesQuery = {
  sitemap: {
    resources?: StorefrontAPI.Maybe<{
      items: Array<
        | Pick<StorefrontAPI.SitemapResource, 'handle' | 'updatedAt'>
        | Pick<StorefrontAPI.SitemapResourceMetaobject, 'handle' | 'updatedAt'>
      >;
    }>;
  };
};

export type SitemapPagesQueryVariables = StorefrontAPI.Exact<{
  page: StorefrontAPI.Scalars['Int']['input'];
}>;

export type SitemapPagesQuery = {
  sitemap: {
    resources?: StorefrontAPI.Maybe<{
      items: Array<
        | Pick<StorefrontAPI.SitemapResource, 'handle' | 'updatedAt'>
        | Pick<StorefrontAPI.SitemapResourceMetaobject, 'handle' | 'updatedAt'>
      >;
    }>;
  };
};

export type SitemapBlogsQueryVariables = StorefrontAPI.Exact<{
  page: StorefrontAPI.Scalars['Int']['input'];
}>;

export type SitemapBlogsQuery = {
  sitemap: {
    resources?: StorefrontAPI.Maybe<{
      items: Array<
        | Pick<StorefrontAPI.SitemapResource, 'handle' | 'updatedAt'>
        | Pick<StorefrontAPI.SitemapResourceMetaobject, 'handle' | 'updatedAt'>
      >;
    }>;
  };
};

export type SitemapMetaobjectsQueryVariables = StorefrontAPI.Exact<{
  page: StorefrontAPI.Scalars['Int']['input'];
}>;

export type SitemapMetaobjectsQuery = {
  sitemap: {
    resources?: StorefrontAPI.Maybe<{
      items: Array<
        | Pick<StorefrontAPI.SitemapResource, 'handle' | 'updatedAt'>
        | Pick<
            StorefrontAPI.SitemapResourceMetaobject,
            'type' | 'handle' | 'updatedAt'
          >
      >;
    }>;
  };
};

export type SitemapIndexQueryVariables = StorefrontAPI.Exact<{
  [key: string]: never;
}>;

export type SitemapIndexQuery = {
  products: {
    pagesCount?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Count, 'count'>>;
  };
  collections: {
    pagesCount?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Count, 'count'>>;
  };
  articles: {
    pagesCount?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Count, 'count'>>;
  };
  pages: {pagesCount?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Count, 'count'>>};
  blogs: {pagesCount?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Count, 'count'>>};
  metaObjects: {
    pagesCount?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Count, 'count'>>;
  };
};

interface GeneratedQueryTypes {
  '#graphql\n  query CollectionDetails(\n    $handle: String!\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    collection(handle: $handle) {\n      id\n      handle\n      title\n      description\n      seo {\n        description\n        title\n      }\n      image {\n        id\n        url\n        width\n        height\n        altText\n      }\n      products(\n        first: 250\n      ) {\n        nodes {\n          ...ProductCard\n        }\n        pageInfo {\n          hasPreviousPage\n          hasNextPage\n          endCursor\n          startCursor\n        }\n      }\n    }\n  }\n  #graphql\n  fragment ProductCard on Product {\n    id\n    title\n    publishedAt\n    handle\n    vendor\n    variants(first: 10) {\n      nodes {\n        id\n        availableForSale\n        price {\n          amount\n          currencyCode\n        }\n        compareAtPrice {\n          amount\n          currencyCode\n        }\n        selectedOptions {\n          name\n          value\n        }\n        media:metafield(namespace:"custom",key:"media") {\n          references(first: 5) {\n            nodes {\n              ...Media\n            }\n          }\n        }\n      }\n    }\n  }\n\n  #graphql\n  fragment Media on MediaImage {\n    __typename\n    mediaContentType\n    alt\n    previewImage {\n      url\n    }\n    id\n    image {\n      id\n      url\n      width\n      height\n    }\n  }\n\n\n': {
    return: CollectionDetailsQuery;
    variables: CollectionDetailsQueryVariables;
  };
  '#graphql\n  query layout(\n    $language: LanguageCode\n    $headerMenuHandle: String!\n    $footerMenuHandle: String!\n  ) @inContext(language: $language) {\n    shop {\n      ...Shop\n    }\n    headerMenu: menu(handle: $headerMenuHandle) {\n      ...Menu\n    }\n    footerMenu: menu(handle: $footerMenuHandle) {\n      ...Menu\n    }\n  }\n  fragment Shop on Shop {\n    id\n    name\n    description\n    primaryDomain {\n      url\n    }\n    brand {\n      logo {\n        image {\n          url\n        }\n      }\n    }\n  }\n  fragment MenuItem on MenuItem {\n    id\n    resourceId\n    tags\n    title\n    type\n    url\n  }\n  fragment ChildMenuItem on MenuItem {\n    ...MenuItem\n  }\n  fragment ParentMenuItem on MenuItem {\n    ...MenuItem\n    items {\n      ...ChildMenuItem\n    }\n  }\n  fragment Menu on Menu {\n    id\n    items {\n      ...ParentMenuItem\n    }\n  }\n': {
    return: LayoutQuery;
    variables: LayoutQueryVariables;
  };
  '#graphql\n    query SitemapProducts($page: Int!) {\n      sitemap(type: PRODUCT) {\n        resources(page: $page) {\n          items {\n            handle\n            updatedAt\n          }\n        }\n      }\n    }\n': {
    return: SitemapProductsQuery;
    variables: SitemapProductsQueryVariables;
  };
  '#graphql\n    query SitemapCollections($page: Int!) {\n      sitemap(type: COLLECTION) {\n        resources(page: $page) {\n          items {\n            handle\n            updatedAt\n          }\n        }\n      }\n    }\n': {
    return: SitemapCollectionsQuery;
    variables: SitemapCollectionsQueryVariables;
  };
  '#graphql\n    query SitemapArticles($page: Int!) {\n      sitemap(type: ARTICLE) {\n        resources(page: $page) {\n          items {\n            handle\n            updatedAt\n          }\n        }\n      }\n    }\n': {
    return: SitemapArticlesQuery;
    variables: SitemapArticlesQueryVariables;
  };
  '#graphql\n    query SitemapPages($page: Int!) {\n      sitemap(type: PAGE) {\n        resources(page: $page) {\n          items {\n            handle\n            updatedAt\n          }\n        }\n      }\n    }\n': {
    return: SitemapPagesQuery;
    variables: SitemapPagesQueryVariables;
  };
  '#graphql\n    query SitemapBlogs($page: Int!) {\n      sitemap(type: BLOG) {\n        resources(page: $page) {\n          items {\n            handle\n            updatedAt\n          }\n        }\n      }\n    }\n': {
    return: SitemapBlogsQuery;
    variables: SitemapBlogsQueryVariables;
  };
  '#graphql\n    query SitemapMetaobjects($page: Int!) {\n      sitemap(type: METAOBJECT) {\n        resources(page: $page) {\n          items {\n            handle\n            updatedAt\n            ... on SitemapResourceMetaobject {\n              type\n            }\n          }\n        }\n      }\n    }\n': {
    return: SitemapMetaobjectsQuery;
    variables: SitemapMetaobjectsQueryVariables;
  };
  '#graphql\nquery SitemapIndex {\n  products: sitemap(type: PRODUCT) {\n    pagesCount {\n      count\n    }\n  }\n  collections: sitemap(type: COLLECTION) {\n    pagesCount {\n      count\n    }\n  }\n  articles: sitemap(type: ARTICLE) {\n    pagesCount {\n      count\n    }\n  }\n  pages: sitemap(type: PAGE) {\n    pagesCount {\n      count\n    }\n  }\n  blogs: sitemap(type: BLOG) {\n    pagesCount {\n      count\n    }\n  }\n  metaObjects: sitemap(type: METAOBJECT) {\n    pagesCount {\n      count\n    }\n  }\n}\n': {
    return: SitemapIndexQuery;
    variables: SitemapIndexQueryVariables;
  };
}

interface GeneratedMutationTypes {}

declare module '@shopify/hydrogen' {
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
