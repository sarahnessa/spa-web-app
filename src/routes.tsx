import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Booking from './pages/Booking'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'booking', Component: Booking },
      { path: 'gallery', Component: Gallery },
      { path: 'contact', Component: Contact },
    ]
  },
], {
    basename: import.meta.env.BASE_URL.replace(/\/$/, '')
});
