import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Notfound } from "./Notfound";
import { CharacterList } from "./Characterlist";
import { Addcharacter } from "./Addcharacters";
import { Editcharacter} from "./Editcharacter";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Tooltip from "@mui/material/Tooltip";
import { useHistory } from "react-router-dom";




export default function App() {
  const history = useHistory();
  //List of characters
  const Character_list = [
    {
      character_name: "Batman",
      poster: "https://images.alphacoders.com/440/thumb-1920-44041.jpg",
      description:
      "One of the most iconic fictional characters in the world, Batman has dedicated his life to an endless crusade, a war on all criminals in the name of his murdered parent, who were taken from him when he was just a child. Since that tragic night, he has trained his body and mind to near physical perfection to be a self-made Super Hero",
        Cast: "Christ Bale, Robert Patinson, Jenson Ackles",
    },
    {
     
      character_name: "Superman",
      poster: "https://wallpapercave.com/wp/h6CUqRv.jpg",
      description:
      "Faster than a speeding bullet, more powerful than a locomotive… The Man of Steel fights a never-ending battle for truth, justice, and the American way.",
        Cast: "Bardon Routh, Henry Cavill, Christopher Reeve",
    },
    {
      character_name: "THE FLASH",
      poster: "https://wallpapercave.com/wp/wp1829329.jpg",
      description:
      "The mysterious power known as the Speed Force is an energy field that has, over the centuries, granted incredible powers of velocity to certain heroes. The most famous of these is the Flash, also known as the Fastest Man Alive.",
        Cast: "Grant Gustin",
    },
    {
      character_name: "GREEN LANTERN",
      poster: "https://wallpapercave.com/wp/wp2950413.jpg",
      description:
      "Test pilot Hal Jordan went from being a novelty, the first-ever human Green Lantern, to one of the most legendary Lanterns to ever wield a power ring.Hal Jordan’s life was changed twice by crashing aircraft. The first time was when he witnessed the death of his father, pilot Martin Jordan. The second was when, as an adult and trained pilot himself, he was summoned to the crashed wreckage of a spaceship belonging to an alien named Abin Sur.",
        Cast: "Ryan Reynolds",
    },
    {
      character_name: "WONDER WOMAN",
      poster: "https://wallpapercave.com/wp/wp3864551.jpg",
      description:
      "Beautiful as Aphrodite, wise as Athena, swifter than Hermes, and stronger than Hercules, Princess Diana of Themyscira fights for peace in Man's World.",
        Cast: "Gal Gadot",
    },
   
  ];

  const [character, setcharacters] = useState(Character_list);

 

 

  return (
    <div className="App">
    {/* App bar contains list of links route path */}
    <AppBar position="static" className="tabcolor">
        <Toolbar disableGutters className="main-menu">
          <Tooltip disableFocusListener title="Home page"> 
            <Button
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<HomeIcon />}
              onClick={() => history.push("/")}
            >
              Home
            </Button>
          </Tooltip>
         

          <Tooltip disableFocusListener title="character">
            <Button
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<AssignmentIndIcon />}
              onClick={() => history.push("/character")}
            >
              Character
            </Button>
          </Tooltip>
          <Tooltip disableFocusListener title=" Add character">
            <Button
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<PersonAddAltIcon />}
              onClick={() => history.push("/addcharacter")}
            >
              Add Character
            </Button>
          </Tooltip>
         
         
        </Toolbar>
       
      </AppBar>
      <hr />


      <Switch>
      <Route exact path="/character/edit/:id">
         <Editcharacter character={character} setcharacters={setcharacters} />
        </Route>
        <Route path="/character">
      
      <CharacterList character_list={character} setcharacters={setcharacters}></CharacterList>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addcharacter">
          <Addcharacter character={character} setcharacters={setcharacters} />
        </Route>
      


       <Route path="**">
       <Notfound /> 
       </Route>
             
        </Switch>
    </div>
  );
}
// Function to return home
 function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to DC Character List</h1>
      <img className="home-img" Alt="Dc characters" src="https://wallpapercave.com/dwp1x/wp2412839.jpg"></img>
      {/* <TableComp /> */}
    </div>
  );
}
