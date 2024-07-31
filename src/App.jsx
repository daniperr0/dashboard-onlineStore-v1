import { useState } from "react";
import {
  RiAddLine,
  RiMenu3Fill,
  RiPieChartLine,
  RiUserLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";

/*components */
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Cards from "./components/shared/Cards";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false)
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder)
    setShowMenu(false)
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder}/>
      {/* menu movil */}
      <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-white p-3 flex items-center justify-between rounded-tr-lg rounded-tl-lg">
        <button className="p-2">
          <RiUserLine />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          <Header/>
          {/*Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className=" text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-3 text-gray-300 bg-[#1f1d2b] py-3 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/*content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/*Cards */}
            <Cards img="comida.png" 
            description="Spicy Seasoned seafood nodless" 
            price="1.40" 
            inventory="30"
            />
            <Cards img="comida.png" 
            description="salad whit cherry tomatoes and mozzarella" 
            price="2.34" 
            inventory="23"
            />
            <Cards img="comida.png" 
            description="Spicy Seasoned seafood nodless" 
            price="1.40" 
            inventory="30"
            />
            <Cards img="comida.png" 
            description="Spicy Seasoned seafood nodless" 
            price="1.40" 
            inventory="30"
            />
            <Cards img="comida.png" 
            description="Spicy Seasoned seafood nodless" 
            price="1.40" 
            inventory="30"
            />
            <Cards img="comida.png" 
            description="Spicy Seasoned seafood nodless" 
            price="1.40" 
            inventory="30"
            />
            <Cards img="comida.png" 
            description="Spicy Seasoned seafood nodless" 
            price="1.40" 
            inventory="30"
            />
            <Cards img="comida.png" 
            description="Spicy Seasoned seafood nodless" 
            price="1.40" 
            inventory="30"
            />
            <Cards img="comida.png" 
            description="Spicy Seasoned seafood nodless" 
            price="1.40" 
            inventory="30"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
