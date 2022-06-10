import { Input, Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <header>
      <Menu secondary>
        <Menu.Item name="home" className="cursor" />
        <Menu.Item name="messages" className="cursor" />
        <Menu.Item name="friends" className="cursor" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." className="cursor" />
          </Menu.Item>
          <Menu.Item name="logout" className="cursor" />
        </Menu.Menu>
      </Menu>
    </header>
  );
};

export default Header;
