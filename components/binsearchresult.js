import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import cla from './form.module.css';

function BinSearchResult({searchResults}) {
  const { register, handleSubmit } = useForm();
  const [inputdata, setInputdata] = useState()


  async function deleteHanler(id) {
    const del = await fetch('/api/posts',
      {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
           id: id,
         
        })   
      }
    )
    console.log(data.id)
    const data2 = await del.json()
    setInputdata("DATA DELETED")
  }
 
  return (
    <div>
       {inputdata}
    <section>
    <Card>
    {searchResults.map(data => (
       <div key={data._id}>
       
    <Card sx={{ minWidth: 275, margin:5, backgroundColor: '#e9edee' }} >
      <CardContent >
      <Typography  variant="h5" color="primary">
        Bin: {data.bin}
        </Typography>
        <Typography variant="h6" component="div">
        {data.product_name}
        </Typography>
       
        <Typography variant="body2">
        ITEM CODE: {data.item_code}
        </Typography>
        <Typography variant="h5">
       Qty: {data.pcs_qty}
        </Typography>
      
        <form >
        <input type='hidden' defaultValue={data._id}></input>
        <button onClick={() => deleteHanler(data._id)}  className={cla.deletBtn}>DELETE</button>
        </form>
        
      </CardContent> 
    </Card>
    </div>
     ))}
   
        
   
    </Card>
    </section>
</div>
  )
}

export default BinSearchResult