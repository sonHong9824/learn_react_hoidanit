import './style.css'

const MyFunction = () => {
  const son = "Hong Son"
  const num = 98
  const arr = [1,2,3,4,5]
  const obj = {
    name: "Son",
    gender: "male"
  }
  return (
    <>
      <div>{son} {num} update</div>
      <div className='date' 
        style={
          {fontSize : "20px"}
        } 
      >09-08-2004</div>
      <div>{JSON.stringify(arr)}</div>
      <div>{obj.gender}</div>
      <div>{JSON.stringify(obj)}</div>
      <div>{console.log("son nè")}</div>
    </>
    
  )
}

export default MyFunction