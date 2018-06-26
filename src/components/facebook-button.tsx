import * as React from 'react'
import { View } from 'react-native'
import { LoginButton } from 'react-native-fbsdk'

import FBManager from '../services/facebook'

interface FBLoginButtonProps {
  onLoginFinished: () => void
  onLogoutFinished: () => void
}

export class FBLoginButton extends React.PureComponent<FBLoginButtonProps> {
  onLoginFinished = (error, result) => {
    if (error) {
      console.log('Login failed with error: ' + error.message)
    } else if (result.isCancelled) {
      console.log('Login was cancelled')
    } else {
      console.log('Login was successful with ID and Name: ' + result.grantedPermissions)

      const { onLoginFinished } = this.props

      FBManager.getAccessToken().then(res => {
        FBManager.getUser().then(res => {
          onLoginFinished()
        })
      })
    }
  }

  render() {
    const { onLogoutFinished } = this.props

    return (
      <View>
        <LoginButton
          readPermissions={['email', 'public_profile', 'user_friends']}
          onLoginFinished={this.onLoginFinished}
          onLogoutFinished={onLogoutFinished}
        />
      </View>
    )
  }
}

export default FBLoginButton
