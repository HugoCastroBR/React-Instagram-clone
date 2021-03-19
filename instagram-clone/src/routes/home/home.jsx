import React from 'react';
import Page from './../../components/page/index';



function Home({name}) {
    return(
        <Page>
            <h1>{name}</h1>
        </Page>
    )
}

export default Home;