import React from 'react';

const Card = ({}) => (
    <div className="fl w-100 w-50-m w-25-ns pa2">
      <article className="hide-child relative ba b--black-20 center">
        <img
            src="//via.placeholder.com/350x150"
            className="db w-100" alt="Photo of Jesse Grant"/>
        <div className="bt b--black-20">
          <a className="f4 mv3 db link light-gray hover-red" href="#">Name</a>
        </div>
        <a className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b"
           href="#">×</a>

      </article>

    </div>
);

export default Card;
