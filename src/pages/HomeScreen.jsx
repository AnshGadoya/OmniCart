import WordBtn from "../components/Button/WordBtn.jsx";
import {useState} from "react";
import ItemCard from "../components/Card/ItemCard.jsx";
import SlideShow from "../layout/SlideShow.jsx";

function HomeScreen() {

   const items = [
        {
            id: 1,
            title: "Item A",
            category: "new",
            prev_image: "https://img.freepik.com/free-photo/attractive-girl-looking-fun-portrait-slender-caucasian-female-trendy-sweater-holding-hands-head-smiling-broadly-posing-camera-being-good-mood_176420-13719.jpg?semt=ais_hybrid&w=740&q=80",
            hover_image: "https://media.gettyimages.com/id/2252729390/video/paris-france-diane-batoukina-wears-light-brown-hair-tucked-under-a-ribbed-beige-knit-beanie.jpg?s=640x640&k=20&c=u9xzx8JU06xQAvHh68PE6HmsUUiMRyg3W84ZGc-0iTI=",
        },
        {
            id: 2, title: "Item B", category: "new",
            prev_image: "https://img.freepik.com/free-photo/attractive-girl-looking-fun-portrait-slender-caucasian-female-trendy-sweater-holding-hands-head-smiling-broadly-posing-camera-being-good-mood_176420-13719.jpg?semt=ais_hybrid&w=740&q=80",
            hover_image: "https://media.gettyimages.com/id/2252729390/video/paris-france-diane-batoukina-wears-light-brown-hair-tucked-under-a-ribbed-beige-knit-beanie.jpg?s=640x640&k=20&c=u9xzx8JU06xQAvHh68PE6HmsUUiMRyg3W84ZGc-0iTI=",
        },
        {
            id: 3,
            title: "Item C",
            category: "best",
            prev_image: "https://img.freepik.com/free-photo/attractive-girl-looking-fun-portrait-slender-caucasian-female-trendy-sweater-holding-hands-head-smiling-broadly-posing-camera-being-good-mood_176420-13719.jpg?semt=ais_hybrid&w=740&q=80",
            hover_image: "https://media.gettyimages.com/id/2252729390/video/paris-france-diane-batoukina-wears-light-brown-hair-tucked-under-a-ribbed-beige-knit-beanie.jpg?s=640x640&k=20&c=u9xzx8JU06xQAvHh68PE6HmsUUiMRyg3W84ZGc-0iTI=",
        },
        {
            id: 4,
            title: "Item D",
            category: "best",
            prev_image: "https://img.freepik.com/free-photo/attractive-girl-looking-fun-portrait-slender-caucasian-female-trendy-sweater-holding-hands-head-smiling-broadly-posing-camera-being-good-mood_176420-13719.jpg?semt=ais_hybrid&w=740&q=80",
            hover_image: "https://media.gettyimages.com/id/2252729390/video/paris-france-diane-batoukina-wears-light-brown-hair-tucked-under-a-ribbed-beige-knit-beanie.jpg?s=640x640&k=20&c=u9xzx8JU06xQAvHh68PE6HmsUUiMRyg3W84ZGc-0iTI=",
        },
        {
            id: 5,
            title: "Item E",
            category: "best",
            prev_image: "https://img.freepik.com/free-photo/attractive-girl-looking-fun-portrait-slender-caucasian-female-trendy-sweater-holding-hands-head-smiling-broadly-posing-camera-being-good-mood_176420-13719.jpg?semt=ais_hybrid&w=740&q=80",
            hover_image: "https://media.gettyimages.com/id/2252729390/video/paris-france-diane-batoukina-wears-light-brown-hair-tucked-under-a-ribbed-beige-knit-beanie.jpg?s=640x640&k=20&c=u9xzx8JU06xQAvHh68PE6HmsUUiMRyg3W84ZGc-0iTI=",
        },
        {
            id: 6,
            title: "Item F",
            category: "best",
            prev_image: "https://img.freepik.com/free-photo/attractive-girl-looking-fun-portrait-slender-caucasian-female-trendy-sweater-holding-hands-head-smiling-broadly-posing-camera-being-good-mood_176420-13719.jpg?semt=ais_hybrid&w=740&q=80",
            hover_image: "https://media.gettyimages.com/id/2252729390/video/paris-france-diane-batoukina-wears-light-brown-hair-tucked-under-a-ribbed-beige-knit-beanie.jpg?s=640x640&k=20&c=u9xzx8JU06xQAvHh68PE6HmsUUiMRyg3W84ZGc-0iTI=",
        },
        {
            id: 7,
            title: "Item G",
            category: "all",
            prev_image: "https://img.freepik.com/free-photo/attractive-girl-looking-fun-portrait-slender-caucasian-female-trendy-sweater-holding-hands-head-smiling-broadly-posing-camera-being-good-mood_176420-13719.jpg?semt=ais_hybrid&w=740&q=80",
            hover_image: "https://media.gettyimages.com/id/2252729390/video/paris-france-diane-batoukina-wears-light-brown-hair-tucked-under-a-ribbed-beige-knit-beanie.jpg?s=640x640&k=20&c=u9xzx8JU06xQAvHh68PE6HmsUUiMRyg3W84ZGc-0iTI=",
        },
        {
            id: 8,
            title: "Item T",
            category: "all",
            prev_image: "https://img.freepik.com/free-photo/attractive-girl-looking-fun-portrait-slender-caucasian-female-trendy-sweater-holding-hands-head-smiling-broadly-posing-camera-being-good-mood_176420-13719.jpg?semt=ais_hybrid&w=740&q=80",
            hover_image: "https://media.gettyimages.com/id/2252729390/video/paris-france-diane-batoukina-wears-light-brown-hair-tucked-under-a-ribbed-beige-knit-beanie.jpg?s=640x640&k=20&c=u9xzx8JU06xQAvHh68PE6HmsUUiMRyg3W84ZGc-0iTI=",
        },
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
            <SlideShow/>
            <div>
                <div className='justify-center text-4xl font-medium text-center p-8 flex gap-4 '>
                    <div className='h-1 w-1/14 border-3 rounded mt-5'/>
                    <h1 className='text-3xl'>
                        Daily Deals
                    </h1>
                    <div className='h-1 w-1/14 border-3 rounded mt-5'/>
                </div>

                <div className='flex gap-18 p-1 justify-center'>

                    <WordBtn children="New Arrivals" onClick={() => setActiveTab("new")} />
                    <WordBtn children="Best Sellers" onClick={() => setActiveTab("best")}/>
                    <WordBtn children="All Items" onClick={() => setActiveTab("all")} />

                </div>
                {/* Cards */}
               <div className="
                   mt-6
                  grid gap-6
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3
                  justify-items-center
                  max-w-7xl mx-auto px-4
                ">

                    {filteredItems.map(item => (
                        <ItemCard key={item.id} item={item}/>
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
