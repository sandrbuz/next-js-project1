'use server'

const Child = ({item}) => {
  return (
    <>
    <div className="border-2 border-red-500">Child</div>
    {console.log(item)}
    </>
  )
}

export default Child