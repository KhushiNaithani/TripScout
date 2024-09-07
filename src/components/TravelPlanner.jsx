import React from "react";
import {useState ,useEffect} from "react";
import axios from "axios";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";


import bg from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-2.jpg";
import bg3 from "../assets/bg-3.jpg";
import bg4 from "../assets/bg-4.jpg";
import bg5 from "../assets/bg-5.jpg";



var bgImages=[bg2,bg3,bg4,bg5];


const options = {
    travelStyles: [
      "Cultural",
      "Adventure",
      "Relaxation",
      "Beach",
      "City Break",
      "Road Trip",
      "Wildlife Safari",
      "Ski",
    ],
    
    interestsNew: [
       "History🏛️" ,
       "Art🎨" ,
        "Food🍴" ,
        "Music🎵",
        "Nature🌳" ,
        "Sports⚽" ,
        "Photography📷" ,
        "Architecture🏰" ,
        "Literature📚" ,
    ],
  
    interests: [
      "History",
      "Art",
      "Food",
      "Music",
      "Nature",
      "Sports",
      "Photography",
      "Architecture",
      "Literature",
    ],
  
    accommodationTypes: [
      "Hotel",
      "Boutique Hotel",
      "Hostel",
      "Resort",
      "Vacation Rental",
      "Camping",
      "Homestay",
      "Bed and Breakfast",
    ],
    activityTypes: [
      "Outdoor",
      "Sightseeing",
      "Shopping",
      "Nightlife",
      "Museums",
      "Theme Parks",
      "Water Sports",
      "Yoga and Wellness",
    ],
    language:[
        "English",
        "Türkçe",
        "Français",
        "Español",
        "Deutsch",
        "Italiano",
        "Português",
        "Русский", 
        "日本語"],


  };





const TravelPlanner=()=>{
    const [response, setResponse] =useState("");
    const [values,setValues] =useState({});


    async function handelSubmit(){
        let prompt=`start from day one no unneccesary statements to be added. Generate a travel itineary for a trip to ${values.destinationCountry} with a budget of ${values.budget}. The traveler is interested in a ${values.travelStyle} vacation and enjoy few activities. They are looking for ${values.accommodationTypes} accommodations and prefer ${values.transportationType} transportation. The itinerary should include ${values.activityType} activities and ${values.cuisineType} dining options. There interest are ${values.interest}. The output should be in ${values.language} Please provide a detailed itinerary with daily recommendations for ${values.tripDuration} days, including suggested destinations, activities, and dining options. Format in a way that there is space between each day in respective p tag. The day font should be larger than rest. The timings should be underlined. Use blue color to highligh.add links of travel blogs/vlogs.`;        console.log("loading...")
        const response= await axios({
            url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_API_KEY}`,
            method:"post",
            data:{
              contents:[
                { parts: [{text: prompt,}]},
              ],
            },
          });
          
          
          setResponse(response['data']['candidates']['0']['content']['parts'][0]['text'])
             
// setResponse(`## Paris Adventure Itinerary (3 Days) - $1000 Budget\n\n**Day 1**\n\n**Morning:**\n\n* **<u>8:00 AM</u>**: Arrive at Charles de Gaulle Airport (CDG) and take the **Roissybus** to Gare du Nord (€10).\n* **<u>9:00 AM</u>**: Check in to your hotel - **Hotel du Nord** in the 10th arrondissement (€60/night).\n* **<u>10:00 AM</u>**: Get ready for a **running tour** of the city with **Running Tours Paris** (€30). They offer various routes that take you past iconic landmarks like the **Eiffel Tower**, **Arc de Triomphe**, and **Louvre Museum**. [https://www.runningtoursparis.com/](https://www.runningtoursparis.com/) \n\n<br>\n\n**Afternoon:**\n\n* **<u>1:00 PM</u>**: Lunch at **Le Bouillon Chartier** in the 9th arrondissement - a classic Parisian brasserie with affordable prices and delicious traditional French cuisine. [https://www.lebouillonchartier.com/](https://www.lebouillonchartier.com/)\n\n<br>\n\n**Evening:**\n\n* **<u>4:00 PM</u>**: Visit the **Sacré-Coeur Basilica** in Montmartre. Take in the stunning views of the city from the top of the hill. \n* **<u>6:00 PM</u>**: Enjoy a leisurely stroll through the charming streets of **Montmartre** and watch street performers.\n* **<u>8:00 PM</u>**: Dinner at **L'Avant Comptoir** in the 7th arrondissement - a small, bustling restaurant with a focus on ${values.cuisineType} dishes. [https://www.laavantcomptoir.com/](https://www.laavantcomptoir.com/)\n\n\n<br>\n\n<br>\n\n**Day 2**\n\n**Morning:**\n\n* **<u>9:00 AM</u>**: Visit the **Louvre Museum**, home to masterpieces like the **Mona Lisa** and **Venus de Milo**.\n* **<u>11:00 AM</u>**: Explore the **Tuileries Garden** behind the Louvre. Relax and enjoy the beautiful surroundings.\n\n<br>\n\n**Afternoon:**\n\n* **<u>1:00 PM</u>**: Lunch at **Le Comptoir Général** in the 10th arrondissement - a unique and eclectic restaurant with a variety of international flavors. [https://www.lecomptoirgeneral.com/](https://www.lecomptoirgeneral.com/)\n* **<u>2:00 PM</u>**: Take a **bike tour** through the city with **Fat Tire Tours** (€35). They offer various routes that take you past some of the most popular landmarks. [https://www.fattiretours.com/](https://www.fattiretours.com/)\n\n<br>\n\n**Evening:**\n\n* **<u>6:00 PM</u>**: Enjoy a **romantic river cruise** on the **Seine River** (€25) with **Bateaux Mouches**. \n* **<u>8:00 PM</u>**: Dinner at **La Gare** in the 10th arrondissement - a trendy restaurant with a diverse menu and a vibrant atmosphere. [https://www.lagareparis.com/](https://www.lagareparis.com/)\n\n<br>\n\n<br>\n\n**Day 3**\n\n**Morning:**\n\n* **<u>9:00 AM</u>**: Take a **walk** along the **Champ de Mars** towards the **Eiffel Tower**.\n* **<u>10:00 AM</u>**: Climb to the top of the **Eiffel Tower** for breathtaking panoramic views of Paris.\n\n<br>\n\n**Afternoon:**\n\n* **<u>1:00 PM</u>**: Lunch at **Le Café de l'Homme** in the 16th arrondissement - a stylish restaurant with stunning views of the **Eiffel Tower** and the **Trocadero Gardens**. [https://www.cafe-de-lhomme.com/](https://www.cafe-de-lhomme.com/)\n* **<u>2:00 PM</u>**: Visit the **Arc de Triomphe** and reflect on the history of France.\n\n<br>\n\n**Evening:**\n\n* **<u>4:00 PM</u>**: Stroll down the **Champs-Élysées**, a famous shopping avenue.\n* **<u>6:00 PM</u>**: Enjoy a final Parisian dinner at **Le Bouillon Chartier** - a classic and affordable option for your last meal. [https://www.lebouillonchartier.com/](https://www.lebouillonchartier.com/)\n* **<u>8:00 PM</u>**: Take the **Roissybus** back to **Charles de Gaulle Airport** for your departure.\n\n<br>\n\n**Note:** This itinerary is just a suggestion, and you can customize it to fit your interests and budget.  You can find many affordable accommodation options in Paris, including hostels and Airbnbs. \n\n<br>\n\n\n<br>\n\n**Image References:**\n\n* **Eiffel Tower:** [https://www.pinterest.com/pin/218039623349561385/](https://www.pinterest.com/pin/218039623349561385/)\n* **Arc de Triomphe:** [https://www.pinterest.com/pin/643929395855050889/](https://www.pinterest.com/pin/643929395855050889/)\n* **Louvre Museum:** [https://www.pinterest.com/pin/122581661323247462/](https://www.pinterest.com/pin/122581661323247462/)\n* **Sacré-Coeur Basilica:** [https://www.pinterest.com/pin/143230748851972529/](https://www.pinterest.com/pin/143230748851972529/)\n* **Tuileries Garden:** [https://www.pinterest.com/pin/517464265282061266/](https://www.pinterest.com/pin/517464265282061266/)\n\n**Note:** The links provided are to Pinterest images. Please note that Pinterest links can change. You can use Google search with the image description to find additional images. \n`)

          console.log({response});

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

        console.log(values)
    };


  const Main=({response, values})=>{
    return (
        <>
            <h1 className="title-planner">⭐️ Travel Planner ⭐️</h1>
            {
                !response ? (
                    <div className="subtitle">Fill the form to generate itineary</div>
                ): (
                    <div className="subtitle">Your travel Plan is ready🎊</div>
                )
            }
            <div className="response-container">
                {
                        response && <ResponseData response={response} values={values}></ResponseData> 
                }
            </div>             
        </>
    )    
 };



 const ResponseData = ({ response ,values }) => {  
    const [imageBackground,setImage]=useState("/");

    // setImage({values.destinationCountry==="Paris, France" ? bg : Math.floor(Math.random() * values.length)})
    
      useEffect(() => {
        const getRandomImage = () => {
            const randomIndex = Math.floor(Math.random() * bgImages.length);
            return bgImages[randomIndex];
          };
    
        if (values.destinationCountry === 'Paris, France') {
          setImage(bg);
        } else {
          setImage(getRandomImage());
        }
      }, [response, values.destinationCountry]);


    return (
      <div className="response-text">
          <img className="response-img" src={imageBackground}></img>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {response}
        </ReactMarkdown>
      </div>
    );
  };


  const ItineayGenerator=()=>{

    return (
        <>
            <form>
            <fieldset>
                <label htmlFor="destinationCountry">Destination Country</label><br/>
                <input type="text" name="destinationCountry" placeholder="eg. Delhi/India, Mumbai/India, Dehradun/India" id="destinationCountry" value={values.destinationCountry} onBlur={handleChange} required />
            </fieldset>

            <div className="form-row">
                <div className="form-group">
                <fieldset>
                <label>Budget </label>
                <small style={{color:"grey"}}>(with Currency)</small>
                <input name="budget" type="text" placeholder="eg 10000 Rs, $1000 usd" id="budget" value={values.budget} onBlur={handleChange} required/>
                <br/>
                </fieldset>

                <fieldset>
                <label>Trip Duration</label>
                <small style={{color:"grey"}}>(in days)</small>
                <input name="tripDuration" type="text" id="tripDuration" value={values.tripDuration} onBlur={handleChange} required />
                <br/>
                </fieldset>
                </div>
            </div>

            <fieldset>
                <label>
                    Interests
                </label>
                <select id="interest" name="interest" value={values.interest} onChange={handleChange}>
                    {options.interestsNew.map((option)=>(
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </fieldset>

            <div className="form-row">
                <div className="form-group">
                <fieldset>
                <label>Accomodation</label><br></br>
                <select name="accommodationTypes" id="accommodationTypes" value={values.accommodationTypes} onChange={handleChange}>
                {
                    options.accommodationTypes.map((option)=>(
                        <option key={(option)} value={option}>
                            {option}
                        </option>
                    ))
                }
                </select>
                </fieldset>

                <fieldset>
                    <label>Travel Style</label><br></br>
                    <select id="travelStyle" name="travelStyle" value={values.travelStyle} onChange={handleChange}>
                        {
                            options.travelStyles.map((option)=>(
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))
                        }
                    </select>
                </fieldset>

                </div>
            </div>

            <fieldset>
                <label>Transportation Tpes</label>
                <small style={{color:"grey"}}>(eg. bus, car, train etc)</small><br/>
                <input type="text" name="transportationType" value={values.transportationType} onBlur={handleChange} required/>
            </fieldset>

            <fieldset>
                <label>Activity Type</label><br/>
                <select id="activityType" name="activityType" value={values.activityType} onChange={handleChange} multiple>
                    {
                        options.activityTypes.map((option)=>(
                            <option key={(option)} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>

            </fieldset>
                <label>Language</label>
                <select id="language" value={values.language} name="language" onChange={handleChange}>
                    {
                        options.language.map((option)=>(
                            <option key={(option)} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>
            <fieldset>

            </fieldset>

            <fieldset>
                <button className="generate-button" type="button" onClick={handelSubmit}>Generate Itineary</button>
            </fieldset>
            
            </form>
        </>
    );
  }

    return(
        <div className="main">
        <div className="body">
            <div className="div-1">
                <Main response={response} values={values}/>                
            </div>
            <div className="div-2">
                <ItineayGenerator/>
            </div>
        </div>
        </div>
    )
}

export default TravelPlanner;