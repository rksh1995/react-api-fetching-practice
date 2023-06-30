import React, { useState, useEffect } from 'react';
import UserComment from './Components/UserComment';

const Header = () => {
  const [userComments, setUserComments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      const commentsData = await response.json();
      setUserComments(commentsData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const getEmailAddresses = (postId) => {
    const filteredComments = userComments.filter(comment => comment.postId === postId);
    const emailAddresses = filteredComments.map(comment => comment.email);
    return emailAddresses;
  };

  const getDomainNames = (emailAddresses) => {
    const domainNames = emailAddresses.map(email => email.split('@')[1]);
    return domainNames;
  };

  const getSumOfIds = (postId) => {
    const filteredComments = userComments.filter(comment => comment.postId === postId);
    const sumOfIds = filteredComments.reduce((sum, comment) => sum + comment.id, 0);
    return sumOfIds;
  };

  const postId = 2;
  const emailAddresses = getEmailAddresses(postId);
  const domainNames = getDomainNames(emailAddresses);
  const sumOfIds = getSumOfIds(postId);

  return (
    <>
      <div className='header-container'>
        <h2>postId: {postId}</h2>
        {emailAddresses.length > 0 && (
          <>
            <h3>Email Addresses:</h3>
            <ul>
              {emailAddresses.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </>
        )}
        {domainNames.length > 0 && (
          <>
            <h3>Domain Names:</h3>
            <ul>
              {domainNames.map((domain, index) => (
                <li key={index}>{domain}</li>
              ))}
            </ul>
          </>
        )}
        <h3>Sum of ids for postId {postId}: {sumOfIds}</h3>
      </div>
    </>
  );
};

export default Header;



//current woking code
// import React from 'react'
// import { useState,useEffect } from 'react'
// import UserComment from './Components/UserComment';
// const Header = () => {
//     const [userComment,setUserComment] = useState([]);
//     useEffect(() => {
//         fetchData();
//       }, []);
//       const fetchData = async () => {
//         const data = await fetch("https://jsonplaceholder.typicode.com/comments");
//         const commentData = await data.json();
//         setUserComment(commentData);
//       };
    
//   return (
//     <>
//       <div className='header-container' style={{}}>
//         {userComment.map((currentValue)=>{
//            return <UserComment key={currentValue.id} {...currentValue}/>
//         })}
//       </div>
//     </>
//   )
// }

// export default Header
