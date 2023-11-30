import React from 'react'
import Header from '../../components/Header'
import { TopBar } from '../../styles/header'
import { Button } from '../../styles/common'
import Main from '../../components/Main'
import { Center } from '../../styles/center'
import Bot from '../../components/Bot'
import { Footer } from '../../styles/footer'

const DiaryEdit = () => {
  return ( <div className="layout">
  <div className="wrap">

    <>
    <Header>
     <TopBar>
                   <Button>
                     <img src="images/bt_list.svg"/>
                   </Button>
                     <h2>타이틀</h2>
                   <Button>
                     <img src="images/bt_login.svg"/>
                   </Button>
     </TopBar>
   </Header>
   <Main>
               <Center>
                 중심 컨텐츠
               </Center>
   </Main>
           <Bot>
               <Footer>
                 <Button>
                   <img src="images/bottom_left.svg"/>
                 </Button>
                   <h2>홍길동</h2>                  
                 <Button>
                   <img src="images/bottom_right.svg"/>
                 </Button>
             </Footer>
               </Bot>
   </>
       </div>
       </div>
  )
}

export default DiaryEdit