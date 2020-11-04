import React from 'react'
import { connect } from 'react-redux'
import Info from '../components/Info'

class InfoContainer extends React.Component {
    render() {
        const { data } = this.props
        return <Info data={data} />
    }
}

const mapStateToProps = state => ({
    data: [],
})

export default connect(mapStateToProps)(InfoContainer)
