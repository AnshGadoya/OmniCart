import WordBtn from "../components/WordBtn.jsx";
import {useState} from "react";
import Card from "../components/Card.jsx";

function HomeScreen() {

    const items = [
        {id: 1, title: "Item A", category: "new"},
        {id: 2, title: "Item B", category: "new"},
        {id: 3, title: "Item C", category: "best"},
        {id: 4, title: "Item D", category: "best"},
        {id: 5, title: "Item E", category: "best"},
        {id: 6, title: "Item F", category: "best"},
        {id: 7, title: "Item G", category: "all"},
        {id: 8, title: "Item T", category: "all"},
    ];
    const MAX_CARDS = 6;
    const [activeTab, setActiveTab] = useState("new");
    const filteredItems = items
        .filter(item => {
            if (activeTab === "all") return true;
            return item.category === activeTab;
        })
        .slice(0, MAX_CARDS);


    return (
        <>

            <div>

                <div className='justify-center text-4xl font-medium text-center p-8 flex gap-4'>
                    <div className='h-1 w-1/14 border-2 mt-5'/>
                    <h1 className='text-3xl'>
                        Daily Deals
                    </h1>
                    <div className='h-1 w-1/14 border-2 mt-5'/>
                </div>

                <div className='flex gap-18 p-1 justify-center'>


                    <WordBtn children="New Arrivals" onClick={() => setActiveTab("new")} active={activeTab === "new"} />
                    <WordBtn children="Best Sellers" onClick={() => setActiveTab("best")} active={activeTab === "best"}/>
                    <WordBtn children="All Items" onClick={() => setActiveTab("all")} active={activeTab === "all"}/>

                </div>
                {/* Cards */}
                <div className="mt-6 grid grid-cols-3  gap-6 justify-items-center mx-90">
                    {filteredItems.map(item => (
                        <Card key={item.id} item={item}/>
                    ))}
                </div>
                <div className='flex justify-center mt-8 mb-8'>
                    <WordBtn children="VIEW MORE PRODUCTS" className='underline text-[15px] '/>
                </div>


            </div>


        </>

    )
}

export default HomeScreen
