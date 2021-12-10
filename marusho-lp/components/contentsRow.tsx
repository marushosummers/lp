import React, { FunctionComponent } from 'react'
import Content from '../types/content'

type Props = {
  content: Content
}

const ContentsRow = ({ content }: Props) => {
  return (
    <div className="grid grid-cols-4 items-center mb-2">
      <div className="col-span-1 text-gray-700 px-4 py-1 text-sm text-right">{content.key}</div>
      <div className="col-span-3 text-gray-700 px-4 py-1 text-sm border-l border-gray-400">{content.value}</div>
    </div>
  )
}

export default ContentsRow
