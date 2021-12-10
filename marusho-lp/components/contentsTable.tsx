import React, { FunctionComponent } from 'react'
import Content from '../types/content'
import ContentsRow from './contentsRow'

type Props = {
  contents: Content[]
}

const ContentsTable = ({ contents }: Props) => {
  return (
      <div className="table w-50 mb-8">
        <div className="table-row-group">
          {contents.map((content, index) => (<ContentsRow content={content} key={index} />))}
        </div>
      </div>
  )
}

export default ContentsTable
