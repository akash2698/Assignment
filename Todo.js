import React , {useState} from 'react';

const Todo=()=>
{
    const[data , updateData] = useState([]);
    const[message , updateMessage] =useState();
    const[newdata,processData]=useState();
    
    const save=()=>
    {
        updateData(data => [...data,newdata]);
        updateMessage(newdata+" Added Successfully");
        processData("");
    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="text-success"> Todo List</h2>
                    
                    <p className="text-success">{message}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3 pt-2">
                    <input 
                    type="text" 
                    className="form-control" 
                    onChange={obj=>processData(obj.target.value)}
                    value={newdata}
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" onClick={save}>Save</button>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row text-center mt-3">
                {
                    data.map((xdata,index)=>
                    {
                        return(
                            <div className="col-md-3" key={index}>
                                <p className="p-3 border bg-light">
                                    {xdata}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Todo;