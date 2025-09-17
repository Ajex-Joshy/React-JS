import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.dribbble.com/userupload/16778067/file/original-d75cb39663149843b1572e4cc64681fe.jpg?resize=400x0"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// we have backend data from zomato api so let build a config driven UI
let data = [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Chicking",
                            "image": "https://b.zmtcdn.com/data/pictures/chains/6/19137026/6f7dde1d6ab72b04a7688c93b47989ac_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.5",
                                "reviewCount": "840"
                            },
                            "url": "/malappuram/chicking-malappuram-locality/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "Door 8/590 R, Varangode, Malappuram Municipality, Malappuram Locality, Malappuram"
                            },
                            "servesCuisine": "Fast Food"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Chick Meal Broast",
                            "image": "https://b.zmtcdn.com/data/pictures/4/21849804/bca6f02011a7987b49c374cdecaa36ac_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "3.2",
                                "reviewCount": "7"
                            },
                            "url": "/malappuram/chick-meal-broast-malappuram-locality/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "9/580-D, Malapuram Circle, Munduparamba, Near Malappuram Locality, Malappuram"
                            },
                            "servesCuisine": "Fast Food"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Al Baith Broasted Cafeteria",
                            "image": "https://b.zmtcdn.com/data/pictures/9/21087969/90a58e07a13f49238a4fa8fb7cde8c26_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.3",
                                "reviewCount": "146"
                            },
                            "url": "/malappuram/al-baith-broasted-cafeteria-malappuram-locality/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "25/204, Kizhakkethala, Malappuram Locality, Malappuram"
                            },
                            "servesCuisine": "South Indian, Fast Food"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Cafe Pitmasters",
                            "image": "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.4",
                                "reviewCount": "299"
                            },
                            "url": "/malappuram/cafe-pitmasters-malappuram-locality/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "12-159/B, Bypass Arena Building, Munduparambu - Kavungal Bypass, Malappuram Locality, Malappuram"
                            },
                            "servesCuisine": "Burger, Juices, American"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 5,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Chickbuck",
                            "image": "https://b.zmtcdn.com/data/pictures/1/22028261/2737328c4c8fb07404d264ab911c3b83_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "3.8",
                                "reviewCount": "6"
                            },
                            "url": "/malappuram/chickbuck-malappuram-locality/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "23/19/A/B, Down Hill, Valiyangadi, Malappuram Locality, Malappuram"
                            },
                            "servesCuisine": "Fast Food, Ice Cream, Shake"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 6,
                        "item": {
                            "@type": "Restaurant",
                            "name": "The Cakes Bay",
                            "image": "https://b.zmtcdn.com/data/pictures/3/21571763/251a53261fa29be74f8204049045cd72_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "3.4",
                                "reviewCount": "16"
                            },
                            "url": "/malappuram/the-cakes-bay-malappuram-locality/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "9/394, Opposite Government Collage, Munduparamba, Malappuram Locality, Malappuram"
                            },
                            "servesCuisine": "Bakery, Fast Food, Salad"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 7,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Five Star",
                            "image": "https://b.zmtcdn.com/data/pictures/1/20032241/c604909e80e6582494ffe4948e416cd4_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "3.8",
                                "reviewCount": "339"
                            },
                            "url": "/malappuram/five-star-malappuram-locality/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "Club One Play Ground, Muncipal Bus Stand Road, Down Hill Malappuram Locality, Malappuram"
                            },
                            "servesCuisine": "Fast Food, Burger"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 8,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Blender Box",
                            "image": "https://b.zmtcdn.com/data/pictures/0/21511700/e010bbf05395f4f1dfabb9b9ff835270_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "3.7",
                                "reviewCount": "53"
                            },
                            "url": "/malappuram/blender-box-malappuram-locality/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "Munduparamba, Malappuram Locality, Malappuram"
                            },
                            "servesCuisine": "Fast Food, Pizza, Burger"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 9,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Ice Mug",
                            "image": "https://b.zmtcdn.com/data/pictures/9/20363219/6c1516bd7fc94707cf3792df1c4fdcfe_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "3.6",
                                "reviewCount": "660"
                            },
                            "url": "/malappuram/ice-mug-malappuram-locality/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "9/580E, By Pass Junction, Munduparamba, Malappuram Locality, Malappuram"
                            },
                            "servesCuisine": "Shake, Burger, Sandwich"
                        }
                    }
                ]
const ResCard = ({resData : {item}}) => {
    // actually here we want to use props like 
    // const ResCard = (props) => {
            // then we will use props?.resData?.item.?name
            // console.log(props); // see this (you should give props as parameter)
            // but its not a good practice but we should what is happening behind the scenes
            // so we actually destructure the data on the fly
            // what we done is same ass
            // const { resData } = props; 
            // const { item } resData // but we destructured on the way thats it
    //  }
    const {image, name, servesCuisine, aggregateRating} = item; // destructured data
    return (
        <div className="res-card">
            <img className="card-img" src={image} />
            <h2 className="card-text">{name}</h2>
            <h3 className="card-text">{servesCuisine}</h3>
            <h4 className="card-text">{aggregateRating.ratingValue}</h4>
        </div>
    )
}
const Body = () => {
    return (
        // here actuatlly we are doing
        // <div className="res-card-container">
        //     <ResCard resData={data[0]}/>
        //     <ResCard resData={data[1]}/>
        //     {/* .... */}
        //     <ResCard resData={data[7]}/>
        // </div>
        // so this is not good as we are repeating it so we made it using loop in react try
        // to use functional loop like map, filter, reduce
        
        <div className="res-card-container">
            {data.map(res => <ResCard key={res.position} resData={res}/>)} 
        </div>
        // while we are looping we need to give a unique value for each data as key
        // why do we need that?
        // also we should not give index as key. why? 
        // see the answer in theory.txt
    
    )
}



const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)