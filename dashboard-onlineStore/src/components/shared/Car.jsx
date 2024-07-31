import React from "react";
import {RiCloseLine, RiDeleteBin6Line,} from "react-icons/ri";

const Car = ( props ) => {

    const {showOrder, setShowOrder} = props;

    return (
        <div 
        className={`bg-[#1f1d2b] lg:col-span-2 fixed lg:w-96 lg:right-0 top-0 w-full h-full transition-all z-50 ${showOrder ? "right-0" : "-right-full"}`}>
          {/*orders */}
          <div className="relative pt-8 text-gray-300 p-8 h-full">
            <RiCloseLine onClick= {() => setShowOrder(false)} className="lg:hidden absolute left-4 top-5 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
            <h1 className="text-2xl my-10">Orders #151416</h1>
            {/*pills */}
            <div className="flex items-center gap-3  flex-wrap mb-8">
              <button className="bg-sky-400 text-white py-2 px-4 rounded-xl">
                Dine in
              </button>
              <button className=" text-sky-400 py-2 px-4 rounded-xl border border-sky-400">
                To Go
              </button>
              <button className=" text-sky-400 py-2 px-4 rounded-xl border border-sky-400">
                Delivery
              </button>
            </div>
            {/*car */}
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              {/*products */}
              <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
                {/*Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/*product description */}
                    <div className="col-span-4 flex items-center gap-2">
                      <img
                        src="comida.png"
                        className="w-10 h-10 object-cover"
                      />
                      <div>
                        <h5 className="text-sm">spicy seasoned sea...</h5>
                        <p className="text-xs text-gray-500">$1.40</p>
                      </div>
                    </div>
                    {/*Qty */}
                    <div>
                      <span>2</span>
                    </div>
                    {/*Price */}
                    <div>
                      <span>$2.80</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-5">
                      <input
                        type="text"
                        className="bg-[#1f1d2b] py-1 px-4 rounded-lg outline-none"
                        placeholder="Order note..."
                      />
                    </form>
                    <div>
                      <button className="border border-sky-400 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-sky-400" />
                      </button>
                    </div>
                  </div>
                </div>
                {/*Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/*product description */}
                    <div className="col-span-4 flex items-center gap-2">
                      <img
                        src="comida.png"
                        className="w-10 h-10 object-cover"
                      />
                      <div>
                        <h5 className="text-sm">spicy seasoned sea...</h5>
                        <p className="text-xs text-gray-500">$1.40</p>
                      </div>
                    </div>
                    {/*Qty */}
                    <div>
                      <span>2</span>
                    </div>
                    {/*Price */}
                    <div>
                      <span>$2.80</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-5">
                      <input
                        type="text"
                        className="bg-[#1f1d2b] py-1 px-4 rounded-lg outline-none"
                        placeholder="Order note..."
                      />
                    </form>
                    <div>
                      <button className="border border-sky-400 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-sky-400" />
                      </button>
                    </div>
                  </div>
                </div>
                {/*Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/*product description */}
                    <div className="col-span-4 flex items-center gap-2">
                      <img
                        src="comida.png"
                        className="w-10 h-10 object-cover"
                      />
                      <div>
                        <h5 className="text-sm">spicy seasoned sea...</h5>
                        <p className="text-xs text-gray-500">$1.40</p>
                      </div>
                    </div>
                    {/*Qty */}
                    <div>
                      <span>2</span>
                    </div>
                    {/*Price */}
                    <div>
                      <span>$2.80</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-5">
                      <input
                        type="text"
                        className="bg-[#1f1d2b] py-1 px-4 rounded-lg outline-none"
                        placeholder="Order note..."
                      />
                    </form>
                    <div>
                      <button className="border border-sky-400 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-sky-400" />
                      </button>
                    </div>
                  </div>
                </div>
                {/*Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/*product description */}
                    <div className="col-span-4 flex items-center gap-2">
                      <img
                        src="comida.png"
                        className="w-10 h-10 object-cover"
                      />
                      <div>
                        <h5 className="text-sm">spicy seasoned sea...</h5>
                        <p className="text-xs text-gray-500">$1.40</p>
                      </div>
                    </div>
                    {/*Qty */}
                    <div>
                      <span>2</span>
                    </div>
                    {/*Price */}
                    <div>
                      <span>$2.80</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-5">
                      <input
                        type="text"
                        className="bg-[#1f1d2b] py-1 px-4 rounded-lg outline-none"
                        placeholder="Order note..."
                      />
                    </form>
                    <div>
                      <button className="border border-sky-400 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-sky-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Submit payment */}
            <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Discount</span>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">Subtotal</span>
                <span>$201.03</span>
              </div>
              <div className="">
                <button className="bg-sky-400 w-full py-2 px-4 rounded-lg">
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Car