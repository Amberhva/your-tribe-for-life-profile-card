// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type VisitekaartjeDocumentDataSlicesSlice = never;

/**
 * Content for Visitekaartje documents
 */
interface VisitekaartjeDocumentData {
  /**
   * Slice Zone field in *Visitekaartje*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: visitekaartje.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<VisitekaartjeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Visitekaartje*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: visitekaartje.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Visitekaartje*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: visitekaartje.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Visitekaartje*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: visitekaartje.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Visitekaartje document from Prismic
 *
 * - **API ID**: `visitekaartje`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type VisitekaartjeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<VisitekaartjeDocumentData>,
    "visitekaartje",
    Lang
  >;

export type AllDocumentTypes = VisitekaartjeDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      VisitekaartjeDocument,
      VisitekaartjeDocumentData,
      VisitekaartjeDocumentDataSlicesSlice,
      AllDocumentTypes,
    };
  }
}
