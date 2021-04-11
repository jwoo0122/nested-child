import { useEffect } from 'react'

function Item({id}) {
  useEffect(() => {
    console.log('Item Mounted', id)
  }, [id])

  return <div>Hello {id}</div>
}

export default Item
