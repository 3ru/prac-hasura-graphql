import { ReactNode, VFC } from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface Props {
  children: ReactNode
  title: string
}

export const Layout: VFC<Props> = ({
  children,
  title = 'Welcom to Nextjs',
}) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a
                  data-testid="home-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Home
                </a>
              </Link>
              <Link href="/local-state-a">
                <a
                  data-testid="makevar-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  makeVar
                </a>
              </Link>
              <Link href="/hasura-main">
                <a
                  data-testid="fetchpolicy-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  fetchPolicy(Hasura)
                </a>
              </Link>
              <Link href="/hasura-crud">
                <a
                  data-testid="crud-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  CRUD(Hasura)
                </a>
              </Link>
              <Link href="/hasura-ssg">
                <a
                  data-testid="ssg-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  SSG+ISR(Hasura)
                </a>
              </Link>
              <Link href="/hooks-memo">
                <a
                  data-testid="memo-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  custom hook + memo
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 flex-col justify-center items-center w-screen">
        {children}
      </main>
      <footer className="w-full h-8 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://github.com/Ryuyxx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <small>Powered by Ryuyxx</small>
        </a>
      </footer>
    </div>
  )
}
