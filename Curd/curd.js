let data=[]
    const viewrecord = () =>{
        let tbl = "";
        let all =localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
        all.map((val, i)=> {
            tbl +=`
            
            <tr>

            <td

            </tr>
            
            
            
            
            `


        })
    }