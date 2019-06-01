
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './commentDetail';
import faker from 'faker';
import ApprovalCard from './approvalCard';

const App = () => {
    return (
        <div className="ui container comments">
            {/* We can wrap child components between parent open and closing tags. this will pass the child in as a prop */}

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:30pm" 
                    commentText="Nice blog post!" 
                    avatarImg={faker.image.avatar()}
                />
            </ApprovalCard>
        
            <ApprovalCard>
                <CommentDetail 
                    author="Mike" 
                    timeAgo="Today at 5:00am" 
                    commentText="Sa-WEEET d00d!!" 
                    avatarImg={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 10:15pm" 
                    commentText="GNAR, bro" 
                    avatarImg={faker.image.avatar()}
                />
            </ApprovalCard>
            
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));