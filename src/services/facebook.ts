import { GraphRequestManager, GraphRequest, AccessToken } from 'react-native-fbsdk'

class FacebookManager {
  status: string

  accessToken: string
  userId: string
  email: string
  firstName: string
  lastName: string

  requestManager: GraphRequestManager

  constructor() {
    this.requestManager = new GraphRequestManager()
    this.status = 'pending'
  }

  getAccessToken = () => {
    return new Promise((resolve, reject) => {
      AccessToken.getCurrentAccessToken()
        .then(data => {
          console.log('+++++++++++++++++++++++', data)
          this.accessToken = data.accessToken.toString()
          this.status = 'active'
          resolve()
        })
        .catch(reject)
    })
  }

  getUser = () => {
    return new Promise((resolve, reject) => {
      if (this.status !== 'active') {
        reject({
          message: 'Manager is not available at the moment.',
          status: this.status,
        })
      }
      const getMe = new GraphRequest(
        `/me`,
        {
          accessToken: this.accessToken,
          parameters: {
            fields: {
              string: 'email,name,first_name,middle_name,last_name',
            },
          },
        },
        (err: any, res: any) => {
          if (err) {
            this.status = 'error'
            console.log('Error occured while getting user information from facebook', err)
            reject(err)
          }

          this.userId = res.id
          this.email = res.email
          this.firstName = res.first_name
          this.lastName = res.last_name
          this.status = 'success'
          console.log('response from facebook', res)
          resolve(res)
        },
      )
      this.status = 'loading'
      this.requestManager.addRequest(getMe).start()
    })
  }
}

export default new FacebookManager()
