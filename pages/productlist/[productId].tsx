import data from '../../data/products.json'
import Image from 'next/image'

interface Product {
    id: number
    name: string
    description: string
    price: number
    image: string
}

interface ProductProps {
    product: Product | null
}

export default function ProductDetailPage({ product }: ProductProps) {

    if (!product) {
        return <div className=" min-h-[19em] flex justify-center items-center text-[30px] font-serif">
            Product not found
        </div>
    }

    return (
        <div className='bg-white text-black w-[60%] mx-auto my-[7%] flex p-8 py-20 rounded-md h-[60%] shadow-xl shadow-gray-600'>
            <div className='w-[50%]'>
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={500}  
                    height={500} 
                    className='object-contain' 
                />
            </div>

            <div className='ml-[4%]'>
                <h1 className='text-[40px] mb-[2%]'>{product.name}</h1>
                <p className='text-[20px]'><strong>Price:</strong> ${product.price}</p>
                <p className='text-[20px]'>{product.description}</p>
            </div>
        </div>
    )
}

export function getServerSideProps({ params }: { params: { productId: string | string[] } }) {
    const { productId } = params
    
    const id = Array.isArray(productId) ? Number(productId[0]) : Number(productId)

    const product = data.find(item => item.id === id) || null

    return {
        props: { product }
    }
}
