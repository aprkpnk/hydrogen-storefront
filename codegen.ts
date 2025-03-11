import type {CodegenConfig} from '@graphql-codegen/cli';
import {
  ApiType,
  pluckConfig,
  preset as adminPreset,
} from '@shopify/api-codegen-preset';
import {preset} from '@shopify/hydrogen-codegen';

export default {
  hooks: {afterOneFileWrite: ['prettier --write']},
  overwrite: true,
  pluckConfig,
  generates: {
    'storefrontapi.generated.d.ts': {
      preset,
      schema: 'node_modules/@shopify/hydrogen-react/storefront.schema.json',
      documents: [
        './app/graphql/**/*.{ts,tsx,js,jsx}',
        '!./app/graphql/customer-account/**/*.{ts,tsx,js,jsx}',
      ],
    },
    'customer-accountapi.generated.d.ts': {
      preset,
      schema:
        'node_modules/@shopify/hydrogen-react/customer-account.schema.json',
      documents: ['./app/graphql/customer-account/*.{ts,tsx,js,jsx}'],
    },
  },
} as CodegenConfig;
