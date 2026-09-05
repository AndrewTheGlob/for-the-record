import {createClient} from '@sanity/client'
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: '89mvxy7j',
  dataset: 'production',
  apiVersion: '2026-09-05',
  useCdn: false,
})

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}