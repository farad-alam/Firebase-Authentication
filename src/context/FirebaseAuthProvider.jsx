import React from 'react'
import AuthContext from './AuthContext'

function FirebaseAuthProvider({children}) {
    const userAuthDetails = {
        name: "Farad"
    }
  return (
    <AuthContext value={userAuthDetails}>
        {children}
    </AuthContext>
  )
}

export default FirebaseAuthProvider