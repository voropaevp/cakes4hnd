import React from 'react'
import { NOT_FOUND } from '../../constants'
import { styles } from '../../styles'

export const NotFound = () => <div className="text-center" style={styles.notFound}>
  <img src={NOT_FOUND} className="mx-auto" alt='Not Found' />
</div>

export default NotFound
