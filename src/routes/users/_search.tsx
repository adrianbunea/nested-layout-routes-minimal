import {createFileRoute, Outlet} from '@tanstack/react-router'
import React from "react";

export const Route = createFileRoute('/users/_search')({
  component: () => <div>Hello /users/_search!
      <Outlet />
  </div>
})