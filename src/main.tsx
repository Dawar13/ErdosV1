import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import posthog from 'posthog-js'

const phToken = import.meta.env.VITE_PUBLIC_POSTHOG_TOKEN
const phHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST

if (phToken) {
  posthog.init(phToken, {
    api_host: phHost || 'https://eu.i.posthog.com',
    person_profiles: 'always',
    capture_pageview: true,
    capture_pageleave: true,
  })
} else {
  console.warn('PostHog token missing — analytics disabled')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
