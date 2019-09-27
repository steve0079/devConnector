import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { deleteExperience } from '../../actions/profile'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const Experience = ({ experience, deleteExperience }) => {

    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className="hide-sm">{exp.title}</td>
            <td>
                <Moment format='MM/DD/YYYY'>{exp.from}</Moment> – {
                    exp.to === null ? (' Now') : (<Moment format="MM/DD/YYYY">{exp.to}</Moment>)
                }
            </td>
            <td>
                <button onClick={() => deleteExperience(exp._id)}className="btn btn-danger">Delete</button>
            </td>
        </tr>
    ))
    return (
        <Fragment>
            <h2 className="my2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Title</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </Fragment>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, { deleteExperience })(Experience)
