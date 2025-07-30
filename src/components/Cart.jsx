import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../reduxtoolkit/cartSlice'

function Cart() {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty. Add some items in your cart!!!</p>
      ) : (
        <>
          <button
            onClick={handleClearCart}
            className="mb-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Cart
          </button>

          <div className="space-y-4">
            {cartItems.map((item, index) => {
              const info = item.card.info
              const price = (info.price || info.defaultPrice) / 100
              const imgUrl = info.imageId
                ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fill/${info.imageId}`
                : 'https://via.placeholder.com/208?text=No+Image'

              return (
                <div
                  key={index}
                  className="flex justify-between items-center border p-4 rounded shadow-sm bg-white"
                >
                  <div>
                    <h2 className="text-lg font-semibold">{info.name}</h2>
                    <p className="text-gray-600">₹{price}</p>
                  </div>
                  <img
                    src={imgUrl}
                    alt={info.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
