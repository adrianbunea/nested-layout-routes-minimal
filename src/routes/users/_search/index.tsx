import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/_search/')({
  component: () => <div>Hello /users/_search/!</div>
})