import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Add | Remove
  addContact: ['user_id'],
  addContactSuccess: ['res'],
  addContactFailure: ['err'],
  removeContact: ['currency', 'amount', 'target'],
  removeContactSuccess: ['res'],
  removeContactFailure: ['err'],
})

export const ContactsTypes = Types
export default Creators
