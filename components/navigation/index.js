import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import NavItem from './nav-item'
import { World } from '../icons'

import styles from './navigation.module.css'
import { AuthContext } from '../../store/auth'

const Navigation = () => {
  const router = useRouter()
  const { authState } = useContext(AuthContext)
  return (
    <nav className={styles.nav}>
      <NavItem
        href="/"
        selected={
          router.pathname == '/' || router.pathname.split('/')[1] == 'questions'
        }
      >
        <World />
        <span>CodingHepler</span>
      </NavItem>

      <NavItem href="/tags" selected={router.pathname == '/tags'}>
        <span>Tags</span>
      </NavItem>
      {console.log(router.pathname.split('/'))}
      {Object.keys(authState).length > 0 && (
        <NavItem
          href={`/users/${authState?.userInfo?.username}/edit`}
          selected={router.pathname.split('/')[3] == 'edit'}
        >
          <span>My Profile</span>
        </NavItem>
      )}
      <NavItem
        href="/users"
        selected={
          router.pathname.split('/')[1] == 'users' &&
          router.pathname.split('/').length < 3
        }
      >
        <span>Users</span>
      </NavItem>

      <NavItem href="/blog" selected={router.pathname.split('/')[1] == 'blog'}>
        <span>Blog</span>
      </NavItem>
    </nav>
  )
}

export default Navigation
