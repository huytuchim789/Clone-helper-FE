import React, { useEffect, useContext, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import useComponentVisible from '../../../hooks/useComponentVisible'
import useWindowSize from '../../../hooks/useWindowSize'
import CONST from '../../../constants'
import ModalContext from '../../../store/modal'
import { AuthContext } from '../../../store/auth'

import Button from '../../button'
import NavigationDropdown from '../../navigation-dropdown'
import { Menu, Close, Logo } from '../../icons'
import SearchInput from '../../search-input'

import styles from './header.module.css'

const Header = ({ className, ...props }) => {
  const { handleComponentVisible } = useContext(ModalContext)
  const { isAuthenticated, authState, logout } = useContext(AuthContext)
  const { key, setKey } = useState('')

  const {
    ref,
    toggleRef,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false)
  const size = useWindowSize()

  useEffect(() => {
    if (size.width > CONST.MOBILE_SIZE) {
      setIsComponentVisible(false)
    }
  }, [size])

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.container}>
        <div ref={toggleRef} className={styles.menuContainer}>
          <Button
            className={styles.menu}
            onClick={() => setIsComponentVisible((isOpen) => !isOpen)}
          >
            {isComponentVisible ? <Close /> : <Menu />}
          </Button>
        </div>
        <Button className={styles.logo} href="/">
          <Logo />
          <p>
            Coding<span>Helper</span>
          </p>
        </Button>
          <SearchInput
            style={{ flex: 1, marginRight: 50, maxWidth: 700 }}
            placeholder="Search..."
            // isLoading={loading}
            autoFocus
            fullWidth={true}
            isKeyDown={true}
            autoComplete="off"
            type="text"
          />

        {isAuthenticated() ? (
          <div className={styles.userInfo}>
            <div  style={{ display: 'inline' }}>
              Welcome{' '}
              <Link
                href="/users/[user]"
                as={`/users/${authState.userInfo.username}`}
              >
                <a>{authState.userInfo.username}!</a>
              </Link>
            </div>
            <a onClick={() => logout()}>log out</a>
          </div>
        ) : (
          <>
            <Button
              className={styles.auth}
              secondary
              onClick={() => handleComponentVisible(true, 'login')}
            >
              Log in
            </Button>
            <Button
              className={styles.auth}
              primary
              onClick={() => handleComponentVisible(true, 'signup')}
            >
              Sign up
            </Button>
          </>
        )}
      </div>

      <div ref={ref}>{isComponentVisible && <NavigationDropdown />}</div>
    </header>
  )
}

export default Header
