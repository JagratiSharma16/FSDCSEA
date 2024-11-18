import React from 'react'
import './Student.css'


function Student({data}) {
    return (

        <div className='Icard'>

            {
                // JSON.stringify(data)
            }
            <table>
                <tbody>
                    <tr style={{ backgroundColor: 'lavender' }}>
                        <td colSpan={2}>{data.college}</td>
                    </tr>
                    <tr>
                        <td colspan={2}><img src={data.pic} width={150}/></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td>Roll_Number</td>
                        <td>{data.roll}</td>
                    </tr>
                    <tr>
                        <td>Branch</td>
                        <td>{data.branch}</td>
                    </tr>
                    <tr>
                        <td>Section</td>
                        <td>{data.section}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
// Student.defaultProps={

// }

export default Student