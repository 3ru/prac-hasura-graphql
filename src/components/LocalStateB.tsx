import { VFC } from 'react'
import { todoVar } from '../chace'
import { useReactiveVar } from '@apollo/client'
import Link from 'next/link'

export const LocalStateB: VFC = () => {
  const todos = useReactiveVar(todoVar)

  return (
    <>
      {todos?.map((task, index) => (
        <p className="mb-3" key={index}>
          {task.title}
        </p>
      ))}
      <Link href="/local-state-a">
        <a className="border border-gray-400 px-2 rounded-xl">Back</a>
      </Link>
    </>
  )
}
