"use client";

import DataTable from "./datatable";
import Sidebar from "./layout/Sidebar";
import Bear from "./pages/root/bear";
import Fish from "./pages/root/fish";
import Riki from "./pages/root/riki";
import Andika from "./pages/root/andika";
import PageHeader from "./layout/page-header";
import TableToolbar from "./datatable/table-toolbar";
import Avatar from "./avatar";
import GlobalProvider from "./layout/GlobalProvider";
import Header from "./layout/Header";
import { Layout, Button, theme } from "antd";

const { Content } = Layout;

export {
  Andika,
  Avatar,
  Bear,
  Content,
  DataTable,
  Fish,
  GlobalProvider,
  Header,
  PageHeader,
  Riki,
  Sidebar,
  TableToolbar,
};
