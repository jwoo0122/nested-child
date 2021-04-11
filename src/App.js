import { useState, useMemo } from 'react'
import Item from './Item'

function App({children}) {
  const [state, setState] = useState(false)

  const computedChildren = useMemo(() => {
    if (state) {
      return children
    }

    /**
     * Case 1: Nested
     */
    return [<Item key="4" id={4} />, children]

    /**
     * Case 2: Flat
     */
    // return [<Item key="0" id={0} />, ...children]
  }, [children, state])

  return (
    <div>
      <button onClick={() => setState((prevState) => !prevState)}>
        change state
      </button>

      { computedChildren }
    </div>
  )
}

export default App
