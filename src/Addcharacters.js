import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from "react";



export function Addcharacter ({character,setcharacters}){
    const [characterName, setName] = useState("");
    const [characterPoster, setPoster] = useState("");
    const [characterdes, setdes] = useState("");
    const [charactercast, setcast] = useState("");
    const his=useHistory();
// Function to add characters in characters list
    const addCharacter = () => {
   
        const newcharacters = {
          character_name: characterName,
          poster: characterPoster,
          description: characterdes,
          cast: charactercast,
        };
        console.log([...character, newcharacters]);
        setcharacters([...character, newcharacters]);
       
        his.push("/character")   // history to change URL while clicking buttons
      };
   
return (

  // List of Textfields to Add characters in CharacterList
<div className="character">
<TextField id="outlined-basic"  label="Character Name" variant="outlined"  onChange={(event) => setName(event.target.value)}/>

<TextField id="outlined-basic"  label="Poster" variant="outlined"  onChange={(event) => setPoster(event.target.value)}/>
<TextField id="outlined-basic"  label="Description" variant="outlined"  onChange={(event) =>  setdes(event.target.value)}/>
<TextField id="outlined-basic"  label="Cast" variant="outlined"  onChange={(event) => setcast(event.target.value)}/>
 
<Button  variant="contained"  onClick={addCharacter}>Add character</Button>




</div>
)
}