import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/users/_search/')({
  component: () => <div>Hello /users/_search/!</div>
})