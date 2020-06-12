import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Anthony" timeAgo="Today at 4:25PM" contentText="What a beautiful day!" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Bobby" timeAgo="Today at 7:25PM" contentText="Taking me dog for a walk!" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Renee" timeAgo="Today at 10:25PM" contentText="How to swim with one hand!" avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
};


ReactDom.render(<App />, document.querySelector('#root'));
