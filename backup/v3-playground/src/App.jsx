import { useState } from 'react'
import VersionToggle from './components/VersionToggle'
import V1 from './v1/App'
import V2 from './v2/App'
import V3 from './v3/App'

const designs = { v1: V1, v2: V2, v3: V3 }
const versions = Object.keys(designs)
const storageKey = 'enchanted-design'

export default function App() {
  const [version, setVersion] = useState(() => {
    const stored = localStorage.getItem(storageKey)
    return designs[stored] ? stored : 'v3'
  })
  const Design = designs[version]

  const select = (next) => {
    localStorage.setItem(storageKey, next)
    setVersion(next)
  }

  return <Design toggle={<VersionToggle version={version} versions={versions} onSelect={select} />} />
}
