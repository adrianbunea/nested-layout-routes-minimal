import {createFileRoute, Outlet} from '@tanstack/react-router'
import React from "react";

export const Route = createFileRoute('/_protected')({
  component: () => <div>Hello /_protected!
    <Outlet />
  </div>
})