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
import { getLang } from "@/locales";
import { ConfigContext } from "@/contexts";
import { AntdType } from "@/types";

const SideBar: FC = props => {
  const { pathname } = useLocation();
  const { path } = useRouteMatch();
  const history = useHistory();

  const { state } = useContext(ConfigContext);
  const { theme } = state;

  const menuSelect: AntdType.MenuProps["onSelect"] = ({ key }) => {
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
        title={getLang("common.menu.dashboard")}
      >
        <Menu.Item key="/dashboard/analysis">{getLang("common.menu.dashboard.analysis")}</Menu.Item>
        <Menu.Item key="/dashboard/workplace">
          {getLang("common.menu.dashboard.workplace")}
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="/animate"
        icon={<VideoCameraOutlined />}
        title={getLang("common.menu.animate")}
      >
        <Menu.Item key="/animate/list">{getLang("common.menu.animate.list")}</Menu.Item>
        <Menu.Item key="/animate/category">{getLang("common.menu.animate.category")}</Menu.Item>
        <Menu.Item key="/animate/season">{getLang("common.menu.animate.season")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="/comic" icon={<BookOutlined />} title={getLang("common.menu.comic")}>
        <Menu.Item key="/comic/list">{getLang("common.menu.comic.list")}</Menu.Item>
        <Menu.Item key="/comic/category">{getLang("common.menu.comic.category")}</Menu.Item>
        <Menu.Item key="/comic/season">{getLang("common.menu.comic.season")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="/post" icon={<ReadOutlined />} title={getLang("common.menu.post")}>
        <Menu.Item key="/post/list">{getLang("common.menu.post.list")}</Menu.Item>
        <Menu.Item key="/post/category">{getLang("common.menu.post.category")}</Menu.Item>
        <Menu.Item key="/post/season">{getLang("common.menu.post.season")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="/blog" icon={<WeiboOutlined />} title={getLang("common.menu.blog")}>
        <Menu.Item key="/blog/list">{getLang("common.menu.blog.list")}</Menu.Item>
        <Menu.Item key="/blog/category">{getLang("common.menu.blog.category")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="/feedback"
        icon={<CommentOutlined />}
        title={getLang("common.menu.feedback")}
      >
        <Menu.Item key="/feedback/comment">{getLang("common.menu.feedback.comment")}</Menu.Item>
        <Menu.Item key="/feedback/rate">{getLang("common.menu.feedback.rate")}</Menu.Item>
        <Menu.Item key="/feedback/danmu">{getLang("common.menu.feedback.danmu")}</Menu.Item>
        <Menu.Item key="/feedback/report">{getLang("common.menu.feedback.report")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="/user" icon={<UserOutlined />} title={getLang("common.menu.user")}>
        <Menu.Item key="/user/list">{getLang("common.menu.user.list")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="/store" icon={<ShopOutlined />} title={getLang("common.menu.store")}>
        <Menu.Item key="/store/shop">{getLang("common.menu.store.shop")}</Menu.Item>
        <Menu.Item key="/store/order">{getLang("common.menu.store.order")}</Menu.Item>
        <Menu.Item key="/store/key">{getLang("common.menu.store.key")}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="/cloud"
        icon={<CloudServerOutlined />}
        title={getLang("common.menu.cloud")}
      >
        <Menu.Item key="/cloud/list">{getLang("common.menu.cloud.list")}</Menu.Item>
        <Menu.Item key="/cloud/source">{getLang("common.menu.cloud.source")}</Menu.Item>
        <Menu.Item key="/cloud/record">{getLang("common.menu.cloud.record")}</Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        key="/manaager"
        icon={<SettingOutlined />}
        title={getLang("common.menu.manager")}
      >
        <Menu.Item key="/manager/image">{getLang("common.menu.manager.image")}</Menu.Item>
        <Menu.Item key="/manager/config">{getLang("common.menu.manager.config")}</Menu.Item>
        <Menu.Item key="/manager/tool">{getLang("common.menu.manager.tool")}</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default SideBar;
