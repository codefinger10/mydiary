import React from 'react'
import Main from '../components/Main'
import { Center } from '../styles/center'

const Intro = () => {
  return ( <div className="layout">
  <div className="wrap">
              <Main>
                  <Center>
                  <h2 style={{ textAlign: "center", color: "red" }}>웹서비스 첫화면</h2>
                  </Center>
                </Main>
                </div>
            </div>
  )
}

export default Intro