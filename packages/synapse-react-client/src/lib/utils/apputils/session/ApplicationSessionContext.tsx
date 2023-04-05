import React, { useContext } from 'react'
import { UseDetectSSOCodeReturnType } from '../../hooks'
import { TwoFactorAuthErrorResponse } from '../../synapseTypes/ErrorResponse'

export type ApplicationSessionContextType = {
  /* The Synapse Authentication token. If undefined, the user is not signed in. */
  token?: string
  /* Whether the current user accepts the terms of use. May be undefined while status is fetched. Will always be undefined for the anonymous user. */
  acceptsTermsOfUse?: boolean
  /* Whether the session has been initialized */
  hasInitializedSession: boolean
  /* Updates this context based on the current token cookie. Should typically be called when the user has signed in or signed out. */
  refreshSession: () => Promise<void>
  /* Error object encountered when a Synapse user signs in with SSO and has 2FA enabled. A code within this error object is required to complete sign-in. */
  twoFactorAuthSSOErrorResponse?: TwoFactorAuthErrorResponse
  /* Signs the user out and updates this context. */
  clearSession: () => Promise<void>
  isLoadingSSO: UseDetectSSOCodeReturnType['isLoading']
}

/*
 * ApplicationSessionContext
 */
const ApplicationSessionContext = React.createContext<
  ApplicationSessionContextType | undefined
>(undefined)

export type ApplicationSessionContextProviderProps = React.PropsWithChildren<{
  context: ApplicationSessionContextType
}>

export function ApplicationSessionContextProvider(
  props: ApplicationSessionContextProviderProps,
) {
  const { context, children } = props
  return (
    <ApplicationSessionContext.Provider value={context}>
      {children}
    </ApplicationSessionContext.Provider>
  )
}

export const ApplicationSessionContextConsumer =
  ApplicationSessionContext.Consumer

/*
 * A twoFactorAuthErrorResponse is required to complete a sign in with 2FA. If signing in with SSO (e.g. Google), then
 *  the error object would be returned out-of-band and can be passed back into the Login component through this context hook.
 */
export function useApplicationSessionContext(): ApplicationSessionContextType {
  const context = useContext(ApplicationSessionContext)
  if (context === undefined) {
    throw new Error(
      'useApplicationSessionContext must be used within an ApplicationSessionContextProvider',
    )
  }
  return context
}
