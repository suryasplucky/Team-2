import React, { useState } from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';



function Myheader() {
    const [size, setSize] = useState('large'); // default is 'middle'

    return (
        <div className='container-fluid d-flex justify-content-between py-5 px-5' style={{background: 'burlywood'}}>
            <div className='sum1'>
                <b> '+' view  them </b>
            </div>
            <div className='sun2 d-flex justify-content-between px-5'>
                <div className='no1 px-3'>
                    <img width={'50px'} height={'50px'} src="https://t4.ftcdn.net/jpg/02/45/59/53/360_F_245595382_zqUoYggkhYxBIyCOnTBcWKzEHqVJCCL1.jpg" alt="" srcSet="" />
                </div>
                <div className='no2 px-3'>
                    <img width={'50px'} height={'50px'} src="https://img.freepik.com/free-photo/top-view-roses-flowers_23-2148860041.jpg?size=626&ext=jpg" alt="" srcSet="" />
                </div>
            </div>

            <div className='sun3 d-flex justify-content-between px-5'>
                <div className='div1 px-2'>

                    <select name="" id="">
                        <option value="v1">select data</option>
                        <option value="v2"> team select</option>
                    </select>
                </div>
                <div className='div2 px-2'>
                    <Button type="primary">Prime Button</Button>
                </div>
                <div className='div3 px-2'>
                <Button type="primary" icon={<DownloadOutlined />} size={size} />

                </div>
            </div>

        </div>
    )
}

export default Myheader;


