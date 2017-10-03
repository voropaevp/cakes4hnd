import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import configureMockStore from 'redux-mock-store'
import HttpStatus from 'http-status-codes'
import { generateApiEpic } from './api'
import { createEpicMiddleware } from 'redux-observable'
import { REVOKE_TOKEN } from '../actions/auth/auth'
import { initialState as authInitialState } from '../reducers/auth'

const testURLobj = {url: '/url'}
const testURLobjRef = '/url'

const testURLfunc = action => ({url: '/test' + action.url})
const testURLfuncRef = '/test/url'
const serverResponse = 'DATA'

const requestAction = {
  type: 'REQUEST',
  url: testURLobjRef
}
const pendingAction = {
  type: 'PENDING',
  originalAction: requestAction
}

const successAction = {
  type: 'SUCCESS',
  originalAction: requestAction,
  response: serverResponse
}

const failureActionAuth = {
  type: 'FAILURE',
  originalAction: requestAction,
  status: 401
}

const failureAction = {
  type: 'FAILURE',
  originalAction: requestAction,
  status: 500,
  error: HttpStatus.getStatusText(500)
}

const typeMap = {
  request: 'REQUEST',
  pending: 'PENDING',
  success: 'SUCCESS',
  failure: 'FAILURE'
}

const state = {
  Auth: Object.assign({}, authInitialState, {token: 'TEST_TOKEN'})
}

const revokeTokenAction = {
  type: REVOKE_TOKEN,
  originalAction: requestAction
}

export const verifyAPIConfig = config => {
  expect(config).to.have.property('actions')
    .which.is.an('object')
    .which.has.all.keys('request', 'pending', 'success', 'failure')
  expect(config).to.have.property('requestConfig')
    .which.satisfies(requestConfig => typeof (config) === 'function' || 'object',
    'request config has incorrect type should be object or function')
  expect(config).to.satisfy(config => typeof (config.isAuthRequired) === 'boolean' || 'undefined')
}

const staticConfig = {
  actions: typeMap,
  requestConfig: testURLobj
}

const dynamicConfig = {
  actions: typeMap,
  requestConfig: testURLfunc
}

const authConfig = {
  actions: typeMap,
  requestConfig: testURLobj,
  isAuthRequired: true
}

describe('Api Epic Middleware', () => {
  describe('Non Authenticated API', () => {
    describe('Static Request Config', () => {
      let store, server
      const testEpic = generateApiEpic(staticConfig)
      const epicMiddleware = createEpicMiddleware(testEpic)
      const mockStore = configureMockStore([epicMiddleware])
      beforeEach(() => {
        store = mockStore()
        server = sinon.fakeServer.create()
        server.respondImmediately = true
      })
      afterEach(() => {
        epicMiddleware.replaceEpic(testEpic)
        server.restore()
      })
      it('should create pending action after request is issued', () => {
        store.dispatch(requestAction)
        expect(store.getActions()[1]).to.deep.equal(pendingAction)
      })
      it('should create success action with reply taken from server upon completing successful(200) request', () => {
        server.respondWith('POST', testURLobjRef,
          [200, {'Content-Type': 'application/json'}, JSON.stringify(serverResponse)])
        store.dispatch(requestAction)
        expect(store.getActions()[2]).to.deep.equal(successAction)
      })

      it('should create revoke token action after, when request for token fails', () => {
        server.respondWith('POST', testURLobjRef, [500, {}, ''])
        store.dispatch(requestAction)
        expect(store.getActions()[2]).to.deep.equal(failureAction)
      })
      it('should emit actions in order request, pending, success', () => {
        server.respondWith('POST', testURLobjRef,
          [200, {'Content-Type': 'application/json'}, JSON.stringify(serverResponse)])
        store.dispatch(requestAction)
        expect(store.getActions()).to.deep.equal([requestAction, pendingAction, successAction])
      })
    })
    describe('Injected Request Config', () => {
      let store, server
      const testEpic = generateApiEpic(dynamicConfig)
      const epicMiddleware = createEpicMiddleware(testEpic)
      const mockStore = configureMockStore([epicMiddleware])
      beforeEach(() => {
        store = mockStore()
        server = sinon.fakeServer.create()
        server.respondImmediately = true
      })
      afterEach(() => {
        epicMiddleware.replaceEpic(testEpic)
        server.restore()
      })
      it('should create pending action after request is issued', () => {
        store.dispatch(requestAction)
        expect(store.getActions()[1]).to.deep.equal(pendingAction)
      })
      it('should create success action with reply taken from server, upon completing successful(200) request', () => {
        server.respondWith('POST', testURLfuncRef,
          [200, {'Content-Type': 'application/json'}, JSON.stringify(serverResponse)])
        store.dispatch(requestAction)
        expect(store.getActions()[2]).to.deep.equal(successAction)
      })

      it('should create revoke token action after if request for token fails', () => {
        server.respondWith('POST', testURLfuncRef, [500, {}, ''])
        store.dispatch(requestAction)
        expect(store.getActions()[2]).to.deep.equal(failureAction)
      })
    })
  })
  describe('Authenticated API', () => {
    let store, server
    const testEpic = generateApiEpic(authConfig)
    const epicMiddleware = createEpicMiddleware(testEpic)
    const mockStore = configureMockStore([epicMiddleware])
    beforeEach(() => {
      store = mockStore(state)
      server = sinon.fakeServer.create()
      server.respondImmediately = true
    })
    afterEach(() => {
      epicMiddleware.replaceEpic(testEpic)
      server.restore()
    })
    it('should create pending action after request is issued', () => {
      store.dispatch(requestAction)
      expect(store.getActions()[1]).to.deep.equal(pendingAction)
    })
    it('should have Authentication header set in request', () => {
      server.respondWith('POST', testURLobjRef,
        [200, {'Content-Type': 'application/json'}, JSON.stringify(serverResponse)])
      store.dispatch(requestAction)
      expect(server.requests[0].requestHeaders).to.have.property('Authorization', 'Bearer TEST_TOKEN')
    })
    it('should create success action with reply taken from server, upon completing successful(200) request', () => {
      server.respondWith('POST', testURLobjRef,
        [200, {'Content-Type': 'application/json'}, JSON.stringify(serverResponse)])
      store.dispatch(requestAction)
      expect(store.getActions()[2]).to.deep.equal(successAction)
    })

    it('should create failure action if server request failed', () => {
      server.respondWith('POST', testURLobjRef, [500, {}, ''])
      store.dispatch(requestAction)
      expect(store.getActions()[2]).to.deep.equal(failureAction)
    })
    it('should NOT create revoke token action after if request for token fails with anything but 401 or 403', () => {
      server.respondWith('POST', testURLobjRef, [500, {}, ''])
      store.dispatch(requestAction)
      expect(store.getActions()).to.not.include(revokeTokenAction)
    })
    it('should create revoke token action after if request for token fails with 401', () => {
      server.respondWith('POST', testURLobjRef, [401, {}, ''])
      store.dispatch(requestAction)
      expect(store.getActions()).to.include(revokeTokenAction)
    })
  })
})
