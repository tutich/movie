import Authentication from "../AuthDetails";
import Card from "../../dbcomponents/Card";
import Navbar from "../../dbcomponents/Navbar";

function HomePage () {
    return(
        <div>
           <Navbar />
           <div className="container">
               <Card  />
           </div>
        </div>
    )
}
export default HomePage;