"use client";

import DataTable from "./datatable";
import Sidebar from "./layout/Sidebar";
import LoadingModule from "./layout/loading-module";
import Bear from "./pages/root/bear";
import Fish from "./pages/root/fish";
import Riki from "./pages/root/riki";
import Andika from "./pages/root/andika";
import ButtonBack from "./button-back";
import ButtonForm from "./button-form";
import PageHeader from "./layout/page-header";
import TableToolbar from "./datatable/table-toolbar";
import Avatar from "./avatar";
import GlobalProvider from "./layout/GlobalProvider";
import Header from "./layout/Header";
import { Layout, Button, ConfigProvider, theme } from "antd";

const { Content } = Layout;

export {
  Andika,
  Avatar,
  Bear,
  ButtonBack,
  ButtonForm,
  Content,
  ConfigProvider,
  DataTable,
  Fish,
  GlobalProvider,
  Header,
  LoadingModule,
  PageHeader,
  Riki,
  Sidebar,
  TableToolbar,
};
