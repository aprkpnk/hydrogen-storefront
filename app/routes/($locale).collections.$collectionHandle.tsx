import {type MetaArgs, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {Analytics, getSeoMeta} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';

import {seoPayload} from '~/lib/seo.server';
import {COLLECTION_QUERY} from '~/graphql';
import {ProductCard} from '~/components/ProductCard';
import type {ProductCardFragment} from 'storefrontapi.generated';

export async function loader({params, request, context}: LoaderFunctionArgs) {
  const {collectionHandle} = params;
  const locale = context.storefront.i18n;

  invariant(collectionHandle, 'Missing collectionHandle param');

  const {collection} = await context.storefront.query(COLLECTION_QUERY, {
    variables: {
      handle: collectionHandle,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  if (!collection) {
    throw new Response('collection', {status: 404});
  }

  const seo = seoPayload.collection({collection, url: request.url});

  return {
    collection,
    seo,
  };
}

export const meta = ({matches}: MetaArgs<typeof loader>) => {
  return getSeoMeta(...matches.map((match) => (match.data as any).seo));
};

export default function Collection() {
  const {collection} = useLoaderData<typeof loader>();

  return (
    <>
      <div>Collection</div>
      {collection?.products?.nodes?.map((product: ProductCardFragment) => (
        <ProductCard product={product} key={product.id} />
      ))}
      <Analytics.CollectionView
        data={{
          collection: {
            id: collection.id,
            handle: collection.handle,
          },
        }}
      />
    </>
  );
}
