import React from 'react'
import PropTypes from 'prop-types'
import styles from './profile.css'

const propTypes = {
    avatar: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }

function Profile ({avatar, name, username, emailAddress, location}) {

        return(
            <div className={styles.root}>
                <img className={styles.avatar} src={avatar}/>
                <span className={styles.name}>{name}</span>
                <ul className={styles.data}>
                    <li>
                        <span className="fa fa-user"></span>{username}
                    </li>
                    <li>
                        <span className="fa fa-envelope"></span>{emailAddress}
                    </li>
                    <li>
                        <span className="fa fa-map-marker"></span>{location}
                    </li>
                </ul>
            </div>
        )
}

Profile.propTypes = propTypes

export default Profile