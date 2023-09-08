import React from 'react';
import Card from './Card';

const CardList = ({robots, inputValue}) => {
    return(
        robots.map((element,i) => {
            return (
                <Card id={robots[i].id}
                 username={robots[i].username}
                 name={robots[i].name}
                 email={robots[i].email}
                 key={i}
                 inputValue={inputValue}
                  />
            );
        }
        )
    )
}

export default CardList;