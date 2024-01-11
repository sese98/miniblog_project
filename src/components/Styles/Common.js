import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: pink;
`

export const Container = styled.section`
  width: 80%;
  height: 100vh;
  background: #fff;
  margin: 0 auto;
  background: palegreen;
`

export const Box = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`
