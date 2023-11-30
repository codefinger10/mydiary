import styled from '@emotion/styled'
import React from 'react'

const StyledChildComponent = styled.div`
 background-color: ${(props) => props.emotionProps.backgroundColor};
  color: ${(props) => props.emotionProps.color};
  padding: 10px;
  
`



const ChildComponent = ({emotionProps}) => {

  return (
    <StyledChildComponent emotionProps={emotionProps}>
    <div>ChildComponent</div>
    </StyledChildComponent>
  )
}


export default ChildComponent