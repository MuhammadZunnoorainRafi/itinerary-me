import React from 'react'
import Image from 'next/image';

function AddToWishList() {
  return (
    <div className="flex items-center gap-1 justify-between max-w-[155px] mt-4 pb-1">
    <Image
      className="max-w-[25px] max-h-[25px]"
      src="/images/heart.png"
      alt="heart icon"
      width={100}
      height={100}
    />
    <span className="font-semibold text-grayish text-[17px]">
      Add to wishlist
    </span>
  </div>
  )
}

export default AddToWishList