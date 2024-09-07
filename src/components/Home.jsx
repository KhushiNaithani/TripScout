import React from "react";
import {Link} from "react-router-dom";

const Home=()=>{
    return (<>
        <div className="body-Home">
           <div className="container-home">
                <h1 className="title-home contain">
                    Explore the world
                </h1>
                <div className="contain">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod cumque quasi animi reiciendis qui rem, voluptas inventore pariatur veritatis exercitationem dicta totam? Sit doloremque nostrum dicta ipsum laborum, consequuntur delectus id non pariatur magnam libero vel quibusdam autem fugiat hic.
                </div>
                <div className="contain">
                <Link to={"/travel-planner"}><button className="button-home">Let's Go</button></Link>
                </div>
           </div>
        </div>
    </>
    )
}

export default Home;
