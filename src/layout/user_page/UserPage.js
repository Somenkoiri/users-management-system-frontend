import './style.css'; // Your CSS file
import UserSelect from '../../component/user_select/UserSelect';
import ToolsBox from '../../component/tools_box/ToolsBox';
import FooterBar from '../../component/footer_bar/FooterBar';

function UserPage() {

  return (
<div class="container">
    <div class="left">
        <ToolsBox />
    </div>
    <div class="center">
      Center Side
      <FooterBar />
    </div>
    <div class="right">
      <UserSelect />
    </div>
  </div>
  );
}

export default UserPage;
