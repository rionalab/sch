"use client";

import DataTable from "./datatable";
import Sidebar from "./layout/Sidebar";
import LoadingModule from "./layout/loading-module";
import ButtonBack from "./button-back";
import ButtonForm from "./button-form";
import PageHeader from "./layout/page-header";
import TableToolbar from "./datatable/table-toolbar";
import TableAction from "./datatable/table-action";
import Avatar from "./avatar";
import Header from "./layout/Header";
import { Layout, ConfigProvider } from "antd";

const { Content } = Layout;

export {
  Avatar,
  ButtonBack,
  ButtonForm,
  Content,
  ConfigProvider,
  DataTable,
  Header,
  LoadingModule,
  PageHeader,
  Sidebar,
  TableToolbar,
  TableAction,
};
