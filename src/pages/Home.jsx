import React from "react";
import supabase from "../config/supabaseclient";
import { useEffect, useState } from "react";
import card from '../compoments/notesCard'

const Home = () => {
  const [data, setData] = useState(null);
  const [note, Setnote] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("notes").select();
      if (error) {
        setData("Error not fetched");
        Setnote(null);
        console.log("error");
      } 
      if(data) {
        Setnote(data)
        setData(null)
        console.log(data);

      }
    };
    getData()

  }, []);
  console.log(supabase);
  return (
    <div>
{
  data && (<p>{data}</p>)

}   
{
  note && (
    <div>
      {note.map(e=>{
        return card(e)
      } )}
    </div>
  )
} </div>
  );
};

export default Home;
