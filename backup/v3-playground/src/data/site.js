import copperRoses from '../assets/img/photo-copper-roses.webp'
import pinkGerbera from '../assets/img/photo-pink-gerbera.webp'
import pinkLily from '../assets/img/photo-pink-lily.webp'
import redGerbera from '../assets/img/photo-red-gerbera.webp'
import redRoses from '../assets/img/photo-red-roses.webp'
import softPink from '../assets/img/photo-soft-pink.webp'
import sunflower from '../assets/img/photo-sunflower.webp'
import tulips from '../assets/img/photo-tulips.webp'
import whiteLily from '../assets/img/photo-white-lily.webp'

const whatsappNumber = '6285921607737'

export const whatsappLink = (message) => `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`

export const contact = {
  whatsappDisplay: '0859 2160 7737',
  whatsappUrl: whatsappLink("Hi Enchanted! I'd love to arrange a bouquet"),
  instagramHandle: '@enchanted.you',
  instagramUrl: 'https://www.instagram.com/enchanted.you/',
}

export const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Flowers', href: '#flowers' },
  { label: 'How it works', href: '#custom' },
  { label: 'Love notes', href: '#love' },
]

export const storyPhoto = {
  src: copperRoses,
  alt: 'Bouquet of copper and deep red roses in beige wrapping',
  width: 368,
  height: 488,
}

export const pillars = [
  { title: 'Handcrafted', text: 'Every arrangement is made by hand.' },
  { title: 'Made to order', text: 'Nothing is arranged until you ask for it.' },
  { title: 'Yours to customize', text: 'Flowers and wrapping colors can be requested.' },
]

export const freshPhoto = {
  src: redGerbera,
  alt: 'Fresh bouquet of red roses and pink gerberas in red wrapping',
  width: 857,
  height: 1143,
}

export const artificialReasons = [
  {
    title: 'Long-lasting',
    text: 'No wilting, no worries. Keep your bouquet as a beautiful reminder of the moment.',
  },
  { title: 'Timeless', text: 'A thoughtful gift that can be displayed and enjoyed for years to come.' },
  { title: 'Meaningful', text: 'For the memories you want to hold onto, long after the day is over.' },
]

export const creations = ['Bouquet', 'Bloom Box', 'Newborn Box', 'Acrylic Box', 'Small Arrangement']

export const occasions = [
  'Birthday',
  'Graduation',
  'Congratulations',
  'Grand Opening',
  'New Born',
  'Baby Shower',
  'Gender Reveal',
  'Special celebrations',
]

export const steps = [
  {
    title: 'Chat Us!',
    text: "Tell us your mood, occasion & share your reference. We'll help you find the perfect bouquet.",
  },
  {
    title: 'Make Your Choice',
    text: "Choose your bouquet size, color tone & preferred flowers. We'll guide you through the options.",
  },
  {
    title: 'Let us enchant your day.',
    text: "We'll create your bouquet with love & confirm the final design with you before we proceed.",
  },
]

export const tones = ['Soft', 'Bright', 'Bold']

export const swatches = [
  { name: 'Red', color: '#c81e2f' },
  { name: 'White', color: '#f6f3ee' },
  { name: 'Pink', color: '#f2b3c2' },
  { name: 'Peach', color: '#f4c3a2' },
  { name: 'Blue', color: '#2f6fc4' },
  { name: 'Purple', color: '#a98bdc' },
  { name: 'Yellow', color: '#f2b90f' },
  { name: 'Gold', color: '#c9a45c' },
]

export const chatMessages = [
  { text: 'sumpah bagus bgt lgi 🤍', time: '22.22' },
  { text: 'aku bener2 suka', time: '22.22' },
  { text: 'GEMEMESSSSS', time: '23.17' },
  { text: 'Makaciii yaa', time: '23.18' },
  { text: 'Cantiiik bgt bunganya 😍😍', time: '12.04' },
]

export const galleryPhotos = [
  {
    src: pinkLily,
    alt: 'Bouquet of pink lilies and roses in white wrapping',
    caption: 'pretty in pink',
    width: 432,
    height: 576,
  },
  {
    src: softPink,
    alt: 'Soft pink rose bouquet in white wrapping',
    caption: 'soft era',
    width: 368,
    height: 491,
  },
  {
    src: whiteLily,
    alt: 'White lily bouquet in navy wrapping',
    caption: 'quiet & bold',
    width: 368,
    height: 484,
  },
  {
    src: tulips,
    alt: 'Pink and white tulip bouquet in pink wrapping',
    caption: 'tulip season',
    width: 294,
    height: 496,
  },
]

export const marqueeItems = [
  'Fresh flowers',
  'Artificial flowers',
  'Handcrafted',
  'Made to order',
  'Custom colors & wrapping',
  'Your vision, enchanted by us',
]

export const storyPhotos = [
  {
    src: redRoses,
    alt: 'Red rose bouquet in white wrapping',
    caption: 'made with love',
    tilt: -7,
    width: 368,
    height: 491,
  },
  { ...storyPhoto, caption: 'wrapped by hand', tilt: 4 },
  {
    src: pinkGerbera,
    alt: 'Pink gerbera bouquet with eucalyptus',
    caption: 'uniquely yours',
    tilt: -2,
    width: 368,
    height: 433,
  },
]

const sunflowerPhoto = {
  src: sunflower,
  alt: 'Sunflower and red rose bouquet in black wrapping',
  caption: 'sunny side',
  width: 480,
  height: 480,
}

const [lilyPhoto, softPinkPhoto, whiteLilyPhoto, tulipPhoto] = galleryPhotos
const [praiseA, praiseB, squealA, squealB, pretty] = chatMessages

export const looks = [
  { ...lilyPhoto, name: 'Pink lilies & roses' },
  { ...sunflowerPhoto, name: 'Sunflowers & red roses' },
  { ...softPinkPhoto, name: 'Soft pink roses' },
  { ...storyPhotos[0], name: 'Red roses' },
  { ...whiteLilyPhoto, name: 'White lilies' },
  { ...tulipPhoto, name: 'Pink tulips' },
  { ...storyPhotos[2], name: 'Pink gerberas' },
  { ...storyPhotos[1], name: 'Copper roses' },
]

export const loveNotes = [
  { ...lilyPhoto, tilt: -4 },
  { tilt: 2, messages: [praiseA, praiseB] },
  { ...sunflowerPhoto, tilt: 3 },
  { ...softPinkPhoto, tilt: -2 },
  { ...whiteLilyPhoto, tilt: 5 },
  { tilt: -3, messages: [squealA, squealB] },
  { ...tulipPhoto, tilt: -5 },
  { tilt: 4, messages: [pretty] },
]
