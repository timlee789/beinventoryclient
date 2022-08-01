import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useForm } from 'react-hook-form';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cla from './form.module.css'
import { useRef } from'react'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function InResultsearch(props) {

  const { register, handleSubmit } = useForm();
  const [inproduct, setInproduct] = useState();
 // const [inputdata, setInputdata] = useState();
  const [pcsqty, setPcsqty] = useState();
  const [inbin, setInbin] = useState();
  const [inupccode, setInupccode] = useState();
  const [initemcode, setInitemcode] = useState();
  const [inboxqty, setInboxqty] = useState();
  const refBin = useRef();
  const refPcsqty = useRef();
  const refPname = useRef();
  const refItemcode = useRef();
  const refUpccode = useRef();
  const refBoxqty = useRef();
  const refDate = useRef();

  async function onSubmit(){
    event.preventDefault();
    const enteredBin = refBin.current.value;
    const enteredPcsqty = refPcsqty.current.valueAsNumber;
    const enteredPname = refPname.current.value;
    const enteredItemcode = refItemcode.current.value;
    const enteredUpccode = refUpccode.current.value;
    const enteredBoxqty = refBoxqty.current.value;
   
    const InputData = {
      bin: enteredBin,
      pcs_qty: enteredPcsqty,
      product_name: enteredPname,
      item_code: enteredItemcode,
      upc_code: enteredUpccode,
      box_qty: enteredBoxqty,
      date_time: Date(),
    }

    // const res = await fetch('/api/posts',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(InputData)
    //   }
    // )
    // const data2 = await res.json()
    setPcsqty(InputData.pcs_qty);
    setInbin(InputData.bin)
    setInproduct(InputData.product_name)
    setInupccode(InputData.upc_code)
    setInitemcode(InputData.item_code)
    setInboxqty(InputData.box_qty)
    //document.getElementById('bin').value='';
    document.getElementById('pcs_qty').value='';


  }
  async function onClickinput() {
     const realData = {
      product_name: inproduct,
      bin: inbin,
      pcs_qty: pcsqty,
      upc_code: inupccode,
      item_code: initemcode,
      pcs_box: inboxqty,
      date_time: Date(),
     }
     const res = await fetch('/api/posts',
     {
       method: 'POST',
       headers: {
         'Content-type': 'application/json'
       },
       body: JSON.stringify(realData)
     }
   )
   const data2 = await res.json()

  }

  return (
        <div>
         
           <section >
    <Card sx={{ minWidth: 275, margin: 5, backgroundColor: '#e9edee'}} >
      <CardContent key={props._id}>
        <Typography  variant="h5" component="div" className={cla.inputtitle}>
        {props.product_name}
        </Typography>

      </CardContent>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Typography  variant="h5" component="div">
        1. Primero Qantidad (QTY First)
        </Typography>
        <input type='number' id='pcs_qty' placeholder='QUANTITY'  ref={refPcsqty}  className={cla.deductform}></input>
        <Typography  variant="h5" component="div">
          2. Y Segundo BIN (Bin Second)
        </Typography>
        <input type='search' id='bin' placeholder='BIN CODE' ref={refBin} className={cla.deductform} ></input><br/>
        <Typography  variant="h5" component="div">
          3. Y Tercero Confirmacion (Confirmation Third)
        </Typography>
        <input type='hidden' defaultValue={props.product_name} ref={refPname} ></input><br/>
        <input type='hidden' defaultValue={props.item_code} ref={refItemcode} ></input><br/>
        <input type='hidden' defaultValue={props.box_qty} ref={refBoxqty} ></input><br/>
        <input type='hidden' defaultValue={props.upc_code} ref={refUpccode} ></input><br/>
    

        <button></button>
      </form>
     {/* <form onSubmit={handleSubmit(onSubmit)}>
    <input type='text' id='bin' {...register ('bin', {required: true})} placeholder="BIN Code"  className={cla.deductform}/><br/>
    <input type='number' id='pcs_qty' {...register ('pcs_qty',{ valueAsNumber: true },{required: true})} placeholder="IN Quantity" className={cla.deductform}/>
    <input type='hidden' {...register ('product_name')} defaultValue={props.product_name} ></input><br/>
    <input type='hidden' {...register ('item_code')} defaultValue={props.item_code} ></input><br/>
    <input type='hidden' {...register ('box_qty')} defaultValue={props.box_qty} ></input><br/>
    <input type='hidden' {...register ('upc_code')} defaultValue={props.upc_code} ></input><br/>
    <button size="small" className={cla.btn} >ADD Inventory</button>
    </form> */}
    </Card>
    </section>
    <section>
       
            <Card sx={{ minWidth: 275, margin: 5, backgroundColor: '#e9edee'}} >
            <form>
          <div className={cla.result2}>{inproduct}</div>
          <div className={cla.result}>{inbin}</div>
          <div className={cla.result}>{pcsqty}</div>
          <button onClick={onClickinput} className={cla.btn}>CONFIRMACION</button>
          </form>
          </Card>
        
         
          </section>
     </div>
  );
}

