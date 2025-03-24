let data=[
    {name:"Anusha",batch:"PFS",mobile:8688187838,placed:"no"},
    {name:"Pavi",batch:"JFS",mobile:7689504321,placed:"no"},
    {name:"Deepa",batch:"JFS",mobile:9876540921,placed:"no"},
    {name:"Sravani",batch:"JFS",mobile:9087653421,placed:"no"},
    {name:"Triveni",batch:"PFS",mobile:8688987098,placed:"no"}
]

function data1(){
    let returnVal=data.reduce(function(acc,obj,ind)
    {
        let tr=`<tr>
                    <td>${obj.name}</td>
                    <td>${obj.batch}</td>
                    <td>${obj.mobile}</td>
                    <td>${obj.placed}</td>
                    <td><button onclick="deletedata(${ind})">Delete</button>
                    <td><button onclick="editdata(${ind});">Edit</button>
                </tr>`
            acc=acc+tr;
            return acc
    },"");
    let table=`<tr>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Mobile</th>
                    <th>Placed or not</th>
                    ${returnVal}
                </tr>
               `
        document.getElementById("info").innerHTML=table;
}
data1();


function add(){
    let elename=document.getElementById("name");
    let elebatch=document.getElementById("batch");
    let elenumber=document.getElementById("mobile");
    let eleplaced=document.getElementById("placed");
    let name=elename.value;
    let batch=elebatch.value;
    let mobile=elenumber.value;
    let placed=eleplaced.value;
    let obj={
        name:name,
        batch:batch,
        mobile:mobile,
        placed:placed
    }
    data.push(obj);
    data1();
}
function deletedata(ind){
    data.splice(ind,1);
    data1(data);
}
function editdata(ind){
    let elen=document.getElementById("name")
    let eleb=document.getElementById("batch")
    let elem=document.getElementById("mobile")
    let elep=document.getElementById("placed")
    let indEle=document.getElementById("ind");
    indEle.innerHTML=ind;
    let obj=data[ind];
    elen.value=obj.name;
    eleb.value=obj.batch;
    elem.value=obj.mobile;
    elep.value=obj.placed;
}
function edit(){
    let indEle=document.getElementById("ind");
    let ind=indEle.innerHTML;
    let elen=document.getElementById("name")
    let eleb=document.getElementById("batch")
    let elem=document.getElementById("mobile")
    let elep=document.getElementById("placed")
    let name=elen.value;
    let batch=eleb.value;
    let mobile=elem.value;
    let placed=elep.value;
    let obj={
        name,
        batch,
        mobile,
        placed
    }
    data[Number(ind)]=obj;
    data1();
}







