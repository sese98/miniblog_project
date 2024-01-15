import React, { useEffect, useState } from 'react';
import axios from 'axios';
/* Redux */
import { useSelector, useDispatch } from 'react-redux';
/* import conponent */
/* styled */
import { Layout, Container } from '../../components/Styles/Common'

/* image */

const OrderPage = () => {

  useEffect(() => {
    axios.get(`http://localhost:8000/`).then((res) => {
      const data = res
      console.log(data, "데이터 불러오기")
    }).catch((error) => {
      console.error(error)
    })
  }, [])

  return(
    <>
      <Layout>
        <Container>

        </Container>
      </Layout>
    </>
  )
}
export default OrderPage;