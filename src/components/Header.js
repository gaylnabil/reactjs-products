import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return ( 
        <header>
            <h1> this is a header { title } </h1> 
        </header> 
    )
}

Header.defaultProps = {
    title: "Default Task",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// Using CSS in JS
// const headerStyle = {
//     color: 'blue', 
//     backgroundColor: 'yellow'
// }

export default Header