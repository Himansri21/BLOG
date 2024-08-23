import "mdb-react-ui-kit/dist/css/mdb.min.css";
import HeaderComp from "../Component /header";
import FooterComp from "../Component /footer";
import LuckArticle from "../posts/Luck-22-8-24";

function HomepageComp() {
  return (
    <div>
        <HeaderComp/>
        <LuckArticle/>
        <FooterComp/>
    </div>
  ) 
}

export default HomepageComp;
