import { Character } from "./Character";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export function CharacterList({character_list,setcharacters}) {
  const history=useHistory();
  
  return (
    <section className="character-list">
      <div className="character-list-container">
        {character_list.map((el, index) => (
          <Character
            key={index}
            name={el.character_name}
            pic={el.poster}
            description={el.description}
            cast={el.Cast} 
            id={index}
            editbutton={
              <Button 
            
            className="editbtn"
            color="success"
            startIcon={< EditIcon/>}
            onClick={()=>{history.push(`/character/edit/${index}`)}}
            />
            }
            
            deleteButton={
             
            <Button 
            
            className="dltbtn"
            color="error"
            startIcon={<DeleteIcon />
           }
              onClick={()=>{
               
              const copyCharacterList=[...character_list];
              
              copyCharacterList.splice(index,1)
              setcharacters(copyCharacterList)
            }}></Button> }/>
            
        ))
      
        }
          
      </div>

    </section>
  );
}