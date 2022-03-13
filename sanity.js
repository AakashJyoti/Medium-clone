import { createCurrentUserHook } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import createClient from '@sanity/client'

export const config = {
  // Find your project ID and 'sanity-json' n your studio project.
  // These are considered "public", but you can use as ecviroment variables
  // if you want diffrent between local dev and production

  // https://nextjs.org/docs/basic-features/enviroment-variables

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  apiVersion: '2021-10-21',

  // Sst useCdn to 'false' if your application require the freshest possible
  // data always (Potentialy sightly slower and bit more expensive).
  // Authenticated request (like preview) will always bypass the CDN

  useCdn: process.env.NODE_ENV === 'production',
}

// setup the client for fetching data in the getProps Page function
export const sanityClient = createClient(config)

// setup a helper funstion for generating Image Url with only the asset reference data in your documents
// Read More:- https://www.sanity.io/docs/image-url
export const urlfor = (source) => createImageUrlBuilder(config).image(source)

// helper function for using the current logges in user account
export const useCurrentUser = createCurrentUserHook(config)
