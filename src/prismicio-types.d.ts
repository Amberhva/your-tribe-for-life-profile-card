// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice = FotoSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * amber_pic field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.amber_pic
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  amber_pic: prismic.ImageField<never>;

  /**
   * title field in *home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * github_svg field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.github_svg
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  github_svg: prismic.ImageField<never>;

  /**
   * email_svg field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.email_svg
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  email_svg: prismic.ImageField<never>;

  /**
   * linkedin_svg field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.linkedin_svg
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  linkedin_svg: prismic.ImageField<never>;

  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

type VisitekaartjeDocumentDataSlicesSlice = never;

/**
 * Content for Visitekaartje documents
 */
interface VisitekaartjeDocumentData {
  /**
   * amber_picture field in *Visitekaartje*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: visitekaartje.amber_picture
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  amber_picture: prismic.ImageField<never>;

  /**
   * title field in *Visitekaartje*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Amber v/d Reijden
   * - **API ID Path**: visitekaartje.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * description field in *Visitekaartje*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Tweedejaars HvA student op de opleiding FDND.
   * - **API ID Path**: visitekaartje.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

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
  prismic.PrismicDocumentWithUID<
    Simplify<VisitekaartjeDocumentData>,
    "visitekaartje",
    Lang
  >;

export type AllDocumentTypes = HomeDocument | VisitekaartjeDocument;

/**
 * Primary content in *Foto → Primary*
 */
export interface FotoSliceDefaultPrimary {
  /**
   * amber_picture field in *Foto → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: foto.primary.amber_picture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  amber_picture: prismic.ImageField<never>;
}

/**
 * Default variation for Foto Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FotoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FotoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Foto*
 */
type FotoSliceVariation = FotoSliceDefault;

/**
 * Foto Shared Slice
 *
 * - **API ID**: `foto`
 * - **Description**: Foto
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FotoSlice = prismic.SharedSlice<"foto", FotoSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      VisitekaartjeDocument,
      VisitekaartjeDocumentData,
      VisitekaartjeDocumentDataSlicesSlice,
      AllDocumentTypes,
      FotoSlice,
      FotoSliceDefaultPrimary,
      FotoSliceVariation,
      FotoSliceDefault,
    };
  }
}
