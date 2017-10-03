import { expect } from 'chai'
import {
  fetchToken,
  REVOKE_TOKEN,
  FETCH_TOKEN_REQUEST,
  revokeToken,
  tokenAPIConfig
} from './auth'
import { verifyAPIConfig } from '../../utils/api.spec'

describe('Authentication actions', () => {
  context('Action Creators', () => {
    it('should create `FETCH_TOKEN_REQUEST` action upon calling fetchToken', () => {
      const credentials = {user: 'admin', password: 'password'}
      expect(fetchToken(credentials)).to.deep.equal({type: FETCH_TOKEN_REQUEST, credentials})
    })

    it('should create `REVOKE_TOKEN` upon calling revokeToken', () => {
      expect(revokeToken()).to.deep.equal({type: REVOKE_TOKEN})
    })
  })
  context('API config', () => {
    it('should have valid API config', () => {
      verifyAPIConfig(tokenAPIConfig)
    })
  })
})
