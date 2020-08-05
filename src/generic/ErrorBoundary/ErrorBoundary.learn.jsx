import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activo: false
        }
    }

    estaActivo = () => {
        return this.state.activo ? "Esta activo" : "No esta activo"
    }

    onClickHandler = () => {
        this.setState({ activo: !this.state.activo })
    }

    componentDidMount(){
        console.log("El compoenente se a montado")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Estado previo: ", prevState.activo)
        console.log("Estado nuevo: ", this.state.activo)
        console.log("El compoenente se a actualizado")
    }

    componentWillUnmount(){
        console.log("El compoenente se a desmontado")
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickHandler}>
                    { this.state.activo ? "Desactivar" : "Activar" }
                </button>
                <h1>
                    ErrorBoundary {this.props.saludo}
                    {this.estaActivo()}
                </h1>
            </div>
        );
    }
}

ErrorBoundary.propTypes = {
    saludo: PropTypes.string,
};

export default ErrorBoundary;
