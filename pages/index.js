import React from 'react';
import Link from 'next/link'

const index = () => {
    console.log('## Render Index!!');
    var dt = new Date();
    return (
        <div>
            <Link  href="/hello"><a>Hello로 이동</a></Link>           
            <h1>Index 페이지 : { dt.getTime() }</h1>
        </div>
    );
};

export default index;