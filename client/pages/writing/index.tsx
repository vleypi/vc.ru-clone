import { GetServerSidePropsContext } from 'next'
import React from 'react'
import MainContainer from '../../components/Containers/MainContainer'
import Writing from '../../components/Content/Writing/Writing'
import { getHome } from '../../controllers/pages.controller'







const index = ({}) => {

    

    return (
        <MainContainer title='vc.ru'>
            <Writing />
        </MainContainer>
    )
}

export const getServerSideProps = (context: GetServerSidePropsContext) =>{
    const server = getHome()
    return server
}

export default index
