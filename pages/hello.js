import React from 'react';
import Link from 'next/link'

const Hello = () => {
    console.log('## Render Hello!!');
    return (
        <div>
            <Link  href="/">Home으로 이동</Link>           
            <h1>Hello 페이지</h1>
        </div>
    );
};

export default Hello;