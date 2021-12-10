import React, { FunctionComponent } from 'react'
import Content from '../types/content'

type Props = {
  content: Content
}

const ContentsRow = ({ content }: Props) => {
  return (
    <div className="table-row">
      <div className="table-cell bg-gray-50 text-gray-700 px-4 py-2 text-sm">{content.key}</div>
      <div className="table-cell bg-gray-50 text-gray-700 px-4 py-2 text-sm">{content.value}</div>
    </div>
  )
}

export default ContentsRow
