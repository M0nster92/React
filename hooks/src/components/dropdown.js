import React, {useState} from 'react';
import Search from './Search';

const Dropdown = ({name, options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);

    const renderOptions = options.map((option) => {
        if(option.value === selected.value){
            return null;
        }
        return (
            <div key={option.value}
             className="item"
             onClick={()=> onSelectedChange(option)}
             >
                {option.label}
            </div>
        )
    })

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">{name} </label>
                <div 
                    onClick={()=> setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visiable active': ''}`}
                    style={{width: '50%'}}
                    >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label} </div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;