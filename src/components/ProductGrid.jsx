"use client"

import { Eye, Heart } from 'lucide-react'
import { Input } from "@/components/ui/input"

interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
  reviews: number
}

const Products  {
    id: 1,
    name: "Essence Mascara Lash Princess",
    price: 9.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    name: "Eyeshadow Palette with Mirror",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviews: 88,
  },
  {
    id: 3,
    name: "Powder Canister",
    price: 14.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviews: 88,
  },
  {
    id: 4,
    name: "Red Lipstick",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviews: 88,
  },
  {
    id: 5,
    name: "Red Nail Polish",
    price: 8.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviews: 88,
  },
  {
    id: 6,
    name: "Calvin Klein CK One",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviews: 88,
  },
]

export default function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Input
          type="search"
          placeholder="Search your product"
          className="max-w-xl mx-auto"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md relative group">
            <div className="absolute top-2 left-2 z-10">
              <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">-35%</span>
            </div>
            <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
              <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors">
                <Eye className="w-4 h-4" />
              </button>
            </div>
            <div className="aspect-square relative overflow-hidden rounded-t-lg">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium line-clamp-2 mb-2">{product.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-500">({product.reviews})</span>
              </div>
              <div className="text-lg font-bold text-primary">${product.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

