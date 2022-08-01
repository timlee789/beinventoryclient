import Deductitem from './Deductitem';



export default function Deductresult({searchResults}) {
  return (
        <div>
            {searchResults.map(data => (
                <Deductitem
                key={data._id}
                id={data._id}
                upc_code={data.upc_code}
                item_code={data.item_code}
                product_name={data.product_name}
                bin={data.bin}
                box_qty={data.box_qty}
                pcs_qty={data.pcs_qty}
                
                />
            ))}
     </div>
  );
}

