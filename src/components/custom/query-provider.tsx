"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const QueryProvider: React.FC<Props> = ({ children }) => {
  const [client, _] = React.useState(new QueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
