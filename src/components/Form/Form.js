import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./Radio/Radio";
import AppContext from '../../context';

const types = {
    twitter: 'twitter',
    article: 'article',
    note: 'note',
}
const description = {
    twitter: 'favorite Twitter account',
    article: 'Article',
    note: 'Note',

}

class Form extends React.Component {
    
    
    state = {
        type: types.twitter,
        title: '',
        link: '',
        image: '',
        description: '',
    }
    
    handleRadioButtonChange = (type) => {
        this.setState({type: type});
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    render() {
        const {type} = this.state;
        
        return (
            <AppContext.Consumer>
                {context=>(
                    <div className={styles.wrapper}>
                    <Title>Add new {description[type]}</Title>
    
                    <form 
                        autoComplete='off' 
                        className={styles.form} 
                        onSubmit={(e) => context.addItem(e, this.state)}
                    >
                        <div className={styles.radioSection}>
                            <Radio
                                // type={types.twitter}
                                changeFn={() => this.handleRadioButtonChange(types.twitter)}
                                checked={type === types.twitter}
                            >Twitter</Radio>
                            <Radio
                                // type={types.article}
                                changeFn={() => this.handleRadioButtonChange(types.article)}
                                checked={type === types.article}
                            >Article</Radio>
                            <Radio
                                // type={types.note}
                                changeFn={() => this.handleRadioButtonChange(types.note)}
                                checked={type === types.note}
                            >Note</Radio>
                        </div>
    
                        
                        <Input 
                            onChange={this.handleInputChange} 
                            value={this.state.title}
                            name="title" 
                            label={type === types.twitter ? 'Twitter name': 'Title'} 
                            />
                        
                        {type !== types.note 
                        ? 
                            <Input 
                                onChange={this.handleInputChange} 
                                value={this.state.link}
                                name="link"
                                label={type === types.twitter ? 'Twitter link': 'link'} maxLength={30}/>
                        : null}
                        {type === types.twitter 
                        ? 
                            <Input 
                                onChange={this.handleInputChange} 
                                value={this.state.image}
                                name="image" 
                                label="Image"/> 
                        : null}
                        <Input 
                            onChange={this.handleInputChange} 
                            value={this.state.description}
                            tag="textarea" 
                            name="description" 
                            label="Description"/>
    
                        <Button>add new item</Button>
    
                    </form>
                </div>
            )}
            </AppContext.Consumer>
        );
    }

};

export default Form;
