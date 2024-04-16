interface StringMap {
  [key: string]: Theme;
}

type Theme = {
  style: string,
  credit?: string
}

export const Themes: StringMap = {
  piano: {
    style: `bg-[url('./bgs/person-playing-piano.jpg')] bg-cover bg-center`,
  },
  default: {
    style: `bg-[url('./bgs/pexels-tirachard-kumtanom-733856.jpg')] bg-cover bg-center`,
  },
  ggst: {
    style: `bg-[url('./bgs/ggst.png')] bg-cover bg-center`,
    credit: 'All credit goes to Arc System Works for the background image.'
  }
}