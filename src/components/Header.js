import { Button } from "../styles/common";
import { TopBar } from "../styles/header";

const Header = ({props}) => {
  return (
    <TopBar>
    <Button>
      <img src="images/bt_list.svg"/>
    </Button>
      <h2>타이틀</h2>
    <Button>
      <img src="images/bt_login.svg"/>
    </Button>
  </TopBar>
  )
}

export default Header;