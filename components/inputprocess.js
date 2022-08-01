import Deductitem from './Deductitem';
import InResultsearch from './inresultsearch';




export default function Inputprocess({searchResults}) {
  return (
        <div>
            {searchResults.map(data => (
                <InResultsearch
                key={data._id}
                
                upc_code={data.upc_code}
                item_code={data.item_code}
                product_name={data.product_name}
               
                box_qty={data.box_qty}
               
                />
            ))}
     </div>
  );
}

