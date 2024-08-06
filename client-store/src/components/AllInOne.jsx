import { useEffect, useState } from "react"


const AllInOne = ()=>{
    const[category,setCategory]=useState("")
    const[size,setSize]=useState("sm")
    const[isChecked,setIsChecked]=useState(null)
    const[name,setName]=useState("")
    const[products,setProducts]=useState([])
    const[click,setClick]=useState(false)

    const fetchData=async ()=>{
        try{
            const response = await fetch(`http://localhost:4000/api/v1/search?name=${name}&delivery=${isChecked}&category=${category}`)
            const result =await response.json()
            if(result){
                setProducts(result.data)
            }
        }catch(err){
            console.error(err)
        }
    }


    useEffect(()=>{
        fetchData()
    },[click])

    const handleClear = ()=>{
        setCategory("")
        setName("")
        setIsChecked(null)
        setClick(!click)
    }

    console.log(products)

   

    return (
        <main>
                    <div className="p-4 bg-yellow-200">
            <section className="flex justify-between">
                <input  type="text"  value={name} onChange={(e)=> setName(e.target.value)}/>

                <select value={category}  onChange={(e)=>setCategory(e.target.value)}>
                    <option>men</option>
                    <option >women</option>
                    <option>children</option>
                </select>

                <select value={size}  onChange={(e)=>setSize(e.target.value)} >
                    <option >sm</option>
                    <option>md</option>
                    <option>lg</option>
                    <option>xlg</option>
                </select>

                <div className="space-x-1 flex items-center">
                <label htmlFor="delivery">Delivery:</label>
                <input id="delivery" checked={isChecked} onChange={(e)=> setIsChecked(e.target.value)}  type="checkbox" />
                </div>
            </section>
            <button onClick={()=> setClick(!click)} className="m-2 p-2 border-solid border bg-red-200 border-red-500">Search</button>
            <button onClick={handleClear} className="m-2 p-2 border-solid border bg-red-200 border-red-500">All</button>
        </div>
        <div className="grid grid-cols-4 ">
            {products.map(product=>{
                const{category,price,_id,name}=product
                return (
                    <article key={_id} className=" p-2 border border-grey-400 " >
                        <p>{category}</p>
                        <p className="text-2xl">R{price}</p>
                        <p>{name}</p>
                    </article>
                )
            })}
        </div>
        </main>

    )
}

export default AllInOne