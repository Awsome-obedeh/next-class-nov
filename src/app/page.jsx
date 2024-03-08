
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import styles from './page.module.css'

const products = [
  {
    src: "/image.jpg",
    name: "deku",
    price: "$19.99",
    buy: "buy deku",
    quantity: 6,
  },
  {
    src:"https://images.unsplash.com/photo-1598061403733-a0d8eb6bd569?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D",
    name: "telephone",
    price: "$3.00",
    buy: "buy phone",
    quantity: 0
  },
  {
    src:"https://media.istockphoto.com/id/1440355020/photo/hand-holding-smartphone-isolated-on-white-background-clipping-path.jpg?s=612x612&w=0&k=20&c=7wtCdrB9rX6ZrPFvwzMZYlM4tpEWykckqSPs-z0z9PQ=",
    name: "desk lamp",
    price: "$4.00",
    buy: "buy lamp",
    quantity:1
  },
  
]




export default function Home() {
  return (
    <>
   
    <h1>my first next project</h1>
    <Link href="/about">about</Link>
    <div className={styles.con}>

    {/* <Products
     src="/image.jpg"
      name="deku"
      price="$1.99"
      buy="buy deku"/>

    <Products
    src="https://images.unsplash.com/photo-1598061403733-a0d8eb6bd569?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D"
    name="telephone"
    price="$ 3.00"
    buy="buy phone"/>

    <Products
      src="https://media.istockphoto.com/id/1440355020/photo/hand-holding-smartphone-isolated-on-white-background-clipping-path.jpg?s=612x612&w=0&k=20&c=7wtCdrB9rX6ZrPFvwzMZYlM4tpEWykckqSPs-z0z9PQ="
      name="desk lamp"
      price="$4.00"
      buy="buy lamp"
    /> */}

    {
      products.map(function(product){
        return(
    <Products
      src={product.src}
      name={product.name}
      price={product.price}
      buy={product.buy}
      quantity={product.quantity}
    />
        )
      })
    }

    </div>
    
    </>
  );
}
