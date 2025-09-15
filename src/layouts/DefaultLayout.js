import { Outlet, useLocation, useNavigate } from "react-router";
import { Layout, Tabs } from "antd";

const { Header, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: 'white',
  headerColor: 'white'
};

const tabItems = [
  { key: "/todoList", label: "Todo List" },
  { key: "/donelist", label: "Done List" },
  { key: "/about", label: "About Us" },
  { key: "/TodoDetail", label: "Todo Detail" }
];

function DefaultLayout() {
    const location = useLocation();
    const navigate = useNavigate();
    const activeKey = tabItems.some(tab => tab.key === location.pathname) ? location.pathname : "/home";
    return (
        <div>
            <Header style={headerStyle}>
                <nav>
                    <Tabs
                        activeKey={activeKey}
                        items={tabItems}
                        onChange={key => navigate(key)}
                        tabBarStyle={{ marginBottom: 24 }}
                    />
                </nav>
            </Header>
            <Content>
                <Outlet />
            </Content>
        </div>
    );
}

export default DefaultLayout;