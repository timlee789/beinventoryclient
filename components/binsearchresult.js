import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import cla from './form.module.css';

function binSearchResult({searchResults}) {
  const { register, handleSubmit } = useForm();
  const [inputdata, setInputdata] = useState()

  // async function onSubmit(data){ 
  //   const res = await fetch('/api/posts',
  //     {
  //       method: 'PUT',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         id: data.id,
  //         pcs_qty: searchResults.pcs_qty - data.pcs_qty,
  //       })   
  //     }
  //   ) 
  //   const data2 = await res.json()
  //   setInputdata(data.pcs_qty)
  // }
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
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        UPC : {data.upc_code}
        </Typography> */}
        <Typography variant="body2">
        ITEM CODE: {data.item_code}
        </Typography>
        <Typography variant="h5">
       Qty: {data.pcs_qty}
        </Typography>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input type='number' {...register ('pcs_qty',{ valueAsNumber: true })} id='pcs_qty' className={cla.deductform}/>
            <div className={cla.result}>{inputdata}</div>
            <input type='hidden' {...register ('id')} defaultValue={data._id} ></input><br/>
            <input type='submit'   className={cla.btn} ></input>
        </form> */}
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

export default binSearchResult