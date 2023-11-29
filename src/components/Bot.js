import React from 'react'
import { Footer } from '../styles/footer'
import { Button } from '../styles/common'

const Bot = () => {
  return (
    <Footer>
    <Button>
        <img src="images/bottom_left.svg"/>
      </Button>
      <h2>홍길동</h2>                  
      <Button>
        <img src="images/bottom_right.svg"/>
      </Button>
    </Footer>
  )
}

export default Bot