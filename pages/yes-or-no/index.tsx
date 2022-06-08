import Layout from '@components/Layout/Layout'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

import Styles from './yes-or-no.module.css'

const YesOrNo = () => {
  const [state, setState] = useState('YES')

  const randomValue = () => {
    const options = ['YES', 'NO']
    const allocated = Math.floor(Math.random() * options.length)
    return setState(options[allocated])
  }

  const { buttonContainer, container, textColor } = Styles

  return (
    <Layout>
      <div className={container}>
        <div className={textColor}>{state}</div>
        <div className={buttonContainer}>
          <Button color="green" onClick={randomValue}>
            Intentar de nuevo
          </Button>
        </div>
        <div className={buttonContainer}>
          <Link href="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default YesOrNo
