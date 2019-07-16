import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = () => {
  return (
    <div>
      <h3>Welcome </h3>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
      <p>
        Eiusmod fugiat deserunt ipsum mollit laboris enim. Eiusmod sunt quis
        deserunt mollit anim dolore velit in minim laborum fugiat sint ipsum
        esse. Laborum nisi minim deserunt dolor ex nisi. Sint duis tempor quis
        veniam est officia nisi proident veniam fugiat exercitation mollit enim.
      </p>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
