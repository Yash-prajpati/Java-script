let data=[]
    const viewrecord = () =>{
        let tbl = "";
        let all =localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
        all.map((val, i)=> {
            tbl +=`
            
            <tr>

            <td>${++i}</td>
            <td>${val.name}</td>
            <td>${val.phone}</td>
            <td>
            <button onclick=""></button>

            </td>

            </tr>
            
            
            
            
            `


        })
    }