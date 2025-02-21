import data from '../../data/products.json'

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
            <div className=' border-green-300 w-[50%]'>
                <img src={product?.image} alt={product?.name} className='h-[90%] w-[50%] ' />
            </div>

            <div className=' border-red-300'>
                <h1 className='text-[40px] mb-[2%]'>{product?.name}</h1>
                <p className='text-[20px]'><strong>Price:</strong> ${product?.price}</p>
                <p className='text-[20px]'>{product?.description}</p>
            </div>

        </div>
    )
}

export function getServerSideProps({ params }: any) {
    const { productId } = params as { productId: string }
    const id = Array.isArray(productId) ? Number(productId[0]) : Number(productId) || null

    const product = data.find(item => item.id === id) || null
    return {
        props: { product }
    }
}
