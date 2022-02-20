import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from "react";
import { useParams } from "react-router-dom";


export function Editcharacter ({character,setcharacters}){

  const { id } = useParams();  // To get id from URL
  console.log(id);
  const char = character[id];
    const [characterName, setName] = useState(char.character_name);
    const [characterPoster, setPoster] = useState(char.poster);
    const [characterdes, setdes] = useState(char.description);
    const [charactercast, setcast] = useState(char.Cast);
    const his=useHistory();

    const addCharacter = () => {
   
        const newcharacters = {
          character_name: characterName,
          poster: characterPoster,
          description: characterdes,
          cast: charactercast,
        };
        const copycharlist=[...character]
        copycharlist[id]=newcharacters;
        setcharacters(copycharlist)
        his.push("/character")
      };
   
return (
<div className="character">
<TextField value={characterName} id="outlined-basic"  variant="outlined"  onChange={(event) => setName(event.target.value)}/>

<TextField value={characterPoster} id="outlined-basic"  variant="outlined"  onChange={(event) => setPoster(event.target.value)}/>
<TextField value={characterdes} id="outlined-basic"   variant="outlined"  onChange={(event) =>  setdes(event.target.value)}/>
<TextField value={ charactercast} id="outlined-basic" variant="outlined"  onChange={(event) => setcast(event.target.value)}/>
 
<Button  variant="contained"  onClick={addCharacter}>save</Button>

</div>
)
}