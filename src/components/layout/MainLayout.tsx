import { Button, Layout, theme } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "redux/features/auth/authSlice";
import { useAppDispatch } from "redux/hooks";
import { toast } from "sonner";
import SideBar from "./SideBar";
const { Header, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  //logout function
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <Layout>
      <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header style={{ padding: "0px 20px", background: colorBgContainer }}>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "85vh",
            height: "fit-content",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "initial",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
