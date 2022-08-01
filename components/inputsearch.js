import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Inputprocess from './inputprocess';
import cla from './form.module.css';



export default function Upcsearch() {
        const [queryText, setQueryText] = useState('')
	const [searchResults, setSearchResults] = useState([])

	const handleChange = (e) => setQueryText(e.target.value)

	useEffect(() => {
		if (!queryText) {
			setSearchResults([])
			//return false
		}
		;(async () => {
			const url = 'https://inventory-node-server.herokuapp.com/upcsearchone'

			const { data } = await axios.get(url, {
				params: {
					upc_code: queryText,
				},
			})

			setSearchResults(data)
		})()
	}, [queryText])
	const resetInputField = () => {
		setQueryText('')
	}
        return (
          <div className={cla.card}>
          <div className={cla.pagetitle}>ITEM IN</div>
            <div className={cla.formbody}>
             
                        <input
                        type='text'
                        placeholder='UPC_Code'
                        value={queryText}
                        onChange={handleChange}
                        className={cla.form2}
						autoFocus={true}
                        />
						<button onClick={resetInputField} className={cla.resetBtn}>Reset</button>
						{queryText && <Inputprocess searchResults={searchResults} />}
                </div>
              </div>
        )

}