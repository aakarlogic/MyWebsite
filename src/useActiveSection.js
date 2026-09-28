import { useEffect, useState } from 'react'

// Returns the href (e.g. '#services') of the section at 40% of the screen height.
export default function useActiveSection(hrefs) {
  const [active, setActive] = useState(hrefs[0])

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.4
      let current = hrefs[0]
      for (const href of hrefs) {
        const el = document.querySelector(href)
        if (el && el.getBoundingClientRect().top <= line) current = href
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [hrefs])

  return active
}
