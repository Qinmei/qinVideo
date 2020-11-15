import React, { FC, useContext } from "react";
import { Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  VideoCameraOutlined,
  BookOutlined,
  ReadOutlined,
  WeiboOutlined,
  CommentOutlined,
  ShopOutlined,
  CloudServerOutlined,
} from "@ant-design/icons";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { intl } from "@/locales";
import { ConfigContext } from "@/contexts";
import { MenuProps } from "antd/es/menu";

const SideBar: FC = props => {
  const { pathname } = useLocation();
  const { path } = useRouteMatch();
  const history = useHistory();

  const { state } = useContext(ConfigContext);
  const { theme } = state;

  const menuSelect: MenuProps["onSelect"] = ({ key }) => {
    history.push(`${path}${key as string}`);
  };

  const selectKey = () => {
    const reg = new RegExp(path);
    const result = pathname.replace(reg, "");
    return result;
  };

  const openKeys = () => {
    const pathArr = pathname.split("/");
    return `/${pathArr[2]}`;
  };

  return (
    <Menu
      theme={theme}
      mode="inline"
      selectedKeys={[selectKey()]}
      defaultOpenKeys={[openKeys()]}
      onSelect={menuSelect}
    >
      <Menu.SubMenu
        key="/dashboard"
        icon={<DashboardOutlined />}
        title={intl.get("common.menu.dashboard")}
      >
        <Menu.Item key="/dashboard/analysis">
          {intl.get("common.menu.dashboard.analysis")}
        </Menu.Item>
        <Menu.Item key="/dashboard/workplace">
          {intl.get("common.menu.dashboard.workplace")}
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="/animate"
        icon={<VideoCameraOutlined />}
        title={intl.get("common.menu.animate")}
      >
        <Menu.Item key="/animate/list">{intl.get("common.menu.animate.list")}</Menu.Item>
        <Menu.Item key="/animate/category">{intl.get("common.menu.animate.category")}</Menu.Item>
        <Menu.Item key="/animate/season">{intl.get("common.menu.animate.season")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="/comic" icon={<BookOutlined />} title={intl.get("common.menu.comic")}>
        <Menu.Item key="/comic/list">{intl.get("common.menu.comic.list")}</Menu.Item>
        <Menu.Item key="/comic/category">{intl.get("common.menu.comic.category")}</Menu.Item>
        <Menu.Item key="/comic/season">{intl.get("common.menu.comic.season")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="/post" icon={<ReadOutlined />} title={intl.get("common.menu.post")}>
        <Menu.Item key="/post/list">{intl.get("common.menu.post.list")}</Menu.Item>
        <Menu.Item key="/post/category">{intl.get("common.menu.post.category")}</Menu.Item>
        <Menu.Item key="/post/season">{intl.get("common.menu.post.season")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="/blog" icon={<WeiboOutlined />} title={intl.get("common.menu.blog")}>
        <Menu.Item key="/blog/list">{intl.get("common.menu.blog.list")}</Menu.Item>
        <Menu.Item key="/blog/category">{intl.get("common.menu.blog.category")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="/feedback"
        icon={<CommentOutlined />}
        title={intl.get("common.menu.feedback")}
      >
        <Menu.Item key="/feedback/comment">{intl.get("common.menu.feedback.comment")}</Menu.Item>
        <Menu.Item key="/feedback/rate">{intl.get("common.menu.feedback.rate")}</Menu.Item>
        <Menu.Item key="/feedback/danmu">{intl.get("common.menu.feedback.danmu")}</Menu.Item>
        <Menu.Item key="/feedback/report">{intl.get("common.menu.feedback.report")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="/user" icon={<UserOutlined />} title={intl.get("common.menu.user")}>
        <Menu.Item key="/user/list">{intl.get("common.menu.user.list")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="/store" icon={<ShopOutlined />} title={intl.get("common.menu.store")}>
        <Menu.Item key="/store/shop">{intl.get("common.menu.store.shop")}</Menu.Item>
        <Menu.Item key="/store/order">{intl.get("common.menu.store.order")}</Menu.Item>
        <Menu.Item key="/store/key">{intl.get("common.menu.store.key")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="/cloud"
        icon={<CloudServerOutlined />}
        title={intl.get("common.menu.cloud")}
      >
        <Menu.Item key="/cloud/list">{intl.get("common.menu.cloud.list")}</Menu.Item>
        <Menu.Item key="/cloud/source">{intl.get("common.menu.cloud.source")}</Menu.Item>
        <Menu.Item key="/cloud/record">{intl.get("common.menu.cloud.record")}</Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        key="/manaager"
        icon={<SettingOutlined />}
        title={intl.get("common.menu.manager")}
      >
        <Menu.Item key="/manager/image">{intl.get("common.menu.manager.image")}</Menu.Item>
        <Menu.Item key="/manager/config">{intl.get("common.menu.manager.config")}</Menu.Item>
        <Menu.Item key="/manager/tool">{intl.get("common.menu.manager.tool")}</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default SideBar;
