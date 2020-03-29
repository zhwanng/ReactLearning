import React from 'react';
import { Layout, Menu, Breadcrumb, Select } from "antd"
import 'antd/dist/antd.css'
import './App.css';

const { SubMenu } = Menu;
const {Header,Content,Footer,Sider} = Layout;


const { Option } = Select;

function App() {

  const options = ["测试","测试2"];
  const ListItem = [];
  options.map(function (item,index) {
    ListItem.push(<Option key={index}>{item}</Option>);
  });


  return (
    <Layout className="layout">

      {/*Header*/}
      <Header className="header" theme="light">
        {/* <div id="logo">
          <img id="logoImg" src="{logoImgUrl}"/>
        </div> */}

        <Menu className="header-menu" mode="horizontal" 
        theme="dark" 
        defaultSelectedKeys={['1']}>
          <Menu.Item key="1">HeaderNav1</Menu.Item>
          <Menu.Item key="2">HeaderNav2</Menu.Item>
        </Menu>
      </Header>
      
      {/*Content*/}
      <Content id="content_container" style={{ padding: '0 50px' }}>

        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>面包屑</Breadcrumb.Item>
          <Breadcrumb.Item>面包屑2</Breadcrumb.Item>
        </Breadcrumb>

        <Layout className="site-layout-background">
          <Sider className="site-layout-background" theme="dark">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    subnav 1
                  </span>
                }
              >
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
              </SubMenu>
            
            </Menu>
            
          </Sider>

          <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
        </Layout>
      </Content>

      {/*Footer*/}
      <Footer style={{ textAlign: 'center' }}>React Demo Footer</Footer>

    </Layout>
  );
}

export default App;
