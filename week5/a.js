// all object store in state

toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
}

sort = () => {
    this.setState(prevState => ({contacts: prevState.contacts.sort(compareNames)}))
}

showForm = () => {
    this.setState({showForm: true})
}


handleSubmit = () => {
    //this.props.onSubmit({name: this.state.name, phone: this.state.phone })
    // this.props.onSubmit({...this.state})
    this.props.onSubmit(this.state)
    // then define what we are actually doing in this.state
}